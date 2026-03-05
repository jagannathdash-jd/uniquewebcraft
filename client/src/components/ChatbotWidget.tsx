import { useEffect, useMemo, useRef, useState } from 'react';

type Role = 'user' | 'bot';

type Message = {
  id: string;
  role: Role;
  text: string;
  ts: number;
};

type QuickAction = {
  label: string;
  message: string;
};

const WHATSAPP_NUMBER = '919777237126';

type Intent =
  | 'website'
  | 'seo_marketing'
  | 'college_project'
  | 'graphics_design'
  | 'pattachitra'
  | 'solar'
  | 'general';

type Lead = {
  intent: Intent;
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  budget?: string;
  timeline?: string;
  tech?: string;
  topic?: string;
  quantity?: string;
};

function uid() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function normalize(s: string) {
  return s.toLowerCase().replace(/\s+/g, ' ').trim();
}

function buildWhatsAppHref(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function detectIntent(text: string): Intent {
  const t = normalize(text);

  if (/(pattachitra|raghurajpur|painting|art|odisha art)/i.test(t)) return 'pattachitra';
  if (/(solar|panel|rooftop|kw|subsidy|electricity bill)/i.test(t)) return 'solar';
  if (/(college|project|documentation|report|ppt|viva|semester|btech|mca)/i.test(t)) return 'college_project';
  if (/(java|python|php|laravel|django|angular|spring\s*boot|springboot|android|kotlin|c#|dotnet|\.net)/i.test(t)) {
    return 'college_project';
  }
  if (/(seo|digital marketing|social media|traffic|rank|google|ads|meta ads|instagram|facebook|lead)/i.test(t)) {
    return 'seo_marketing';
  }
  if (/(poster|banner|graphic|logo|branding|marriage|wedding|invitation|card|design)/i.test(t)) {
    return 'graphics_design';
  }
  if (/(website|web site|portfolio|business site|ecommerce|e-commerce|landing page)/i.test(t)) return 'website';
  return 'general';
}

function extractLead(prev: Lead, userText: string): Lead {
  const t = userText.trim();
  const lower = normalize(userText);

  let lead: Lead = { ...prev };
  if (!lead.intent || lead.intent === 'general') {
    lead.intent = detectIntent(userText);
  }

  const phoneMatch = t.match(/(\+?91[-\s]?)?[6-9]\d{9}/);
  if (phoneMatch) {
    lead.phone = phoneMatch[0].replace(/\s|-/g, '').replace(/^91/, '').replace(/^\+91/, '');
    if (lead.phone.length === 10) lead.phone = `+91${lead.phone}`;
  }

  const emailMatch = t.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  if (emailMatch) lead.email = emailMatch[0];

  const nameMatch = lower.match(/my name is ([a-z ]{2,30})/i);
  if (nameMatch) lead.name = nameMatch[1].trim().replace(/\b\w/g, (c) => c.toUpperCase());

  const cityMatch = lower.match(/(i am from|from|city) ([a-z ]{2,30})/i);
  if (cityMatch) lead.city = cityMatch[2].trim().replace(/\b\w/g, (c) => c.toUpperCase());

  const budgetMatch = lower.match(/(budget|under|upto|up to|around)\s*(₹|rs\.?\s*)?\s*([0-9,]{3,})(k|\s*lakh|l|\s*lakhs)?/i);
  if (budgetMatch) {
    lead.budget = `${budgetMatch[2] ? '₹' : ''}${budgetMatch[3]}${budgetMatch[4] ? budgetMatch[4].trim() : ''}`;
  }

  const timelineMatch = lower.match(/(timeline|within|in)\s*(\d+\s*(day|days|week|weeks|month|months))/i);
  if (timelineMatch) lead.timeline = timelineMatch[2];

  if (lead.intent === 'college_project') {
    const tech = ['java', 'python', 'php', 'laravel', 'django', 'angular', 'spring boot', 'android', 'kotlin', 'c#', '.net'];
    const found = tech.find((k) => lower.includes(k));
    if (found) lead.tech = found === 'spring boot' ? 'Spring Boot' : found.toUpperCase();
    const topicMatch = lower.match(/topic\s*[:\-]\s*(.{3,80})/i);
    if (topicMatch) lead.topic = topicMatch[1].trim();
  }

  if (lead.intent === 'pattachitra') {
    const qtyMatch = lower.match(/(qty|quantity|pieces)\s*[:\-]?\s*(\d+)/i);
    if (qtyMatch) lead.quantity = qtyMatch[2];
  }

  return lead;
}

function nextQuestion(lead: Lead) {
  if (!lead.name) return 'Great. What is your name? (Example: “My name is Rahul”)';

  if (!lead.phone && !lead.email) {
    return 'Please share your WhatsApp number or email so we can send details.';
  }

  if (lead.intent === 'website') {
    if (!lead.city) return 'Which city are you from? (Example: Bhubaneswar)';
    if (!lead.budget) return 'What is your budget range for the website?';
    if (!lead.timeline) return 'When do you want the website delivered (timeline)?';
    return 'Perfect. Share the website type (business/portfolio/e-commerce) and any reference link if you have.';
  }

  if (lead.intent === 'seo_marketing') {
    if (!lead.city) return 'Which city is your business in (for local SEO)?';
    if (!lead.budget) return 'Monthly budget for SEO/ads/social media?';
    return 'Which platform do you want first: Google SEO, Google Ads, Instagram/Facebook Ads, or full digital marketing?';
  }

  if (lead.intent === 'college_project') {
    if (!lead.tech) return 'Which technology do you want? (Java / Python / PHP / Laravel / Django / Angular / Spring Boot)';
    if (!lead.topic) return 'What is your project topic or module name? (Example: “Online Examination System”)';
    return 'Do you need documentation + PPT + viva questions also?';
  }

  if (lead.intent === 'graphics_design') {
    if (!lead.budget) return 'What is your budget for design work?';
    return 'What do you need exactly: logo / poster / banner / marriage card? Share text + size + style (modern/ethnic).';
  }

  if (lead.intent === 'pattachitra') {
    if (!lead.city) return 'Delivery city?';
    if (!lead.quantity) return 'How many pieces do you want? (Qty)';
    return 'What size do you prefer (small/medium/large) and what theme (Jagannath/Radha-Krishna/traditional)?';
  }

  if (lead.intent === 'solar') {
    if (!lead.city) return 'Which city is the installation location?';
    return 'Approx monthly electricity bill and rooftop size (if known)?';
  }

  return 'Tell me what you need: website, SEO/marketing, college project, graphics, Pattachitra, or solar help.';
}

function intentIntro(intent: Intent) {
  if (intent === 'website') {
    return 'Great — we build modern business websites with SEO-ready structure.';
  }
  if (intent === 'seo_marketing') {
    return 'Great — we can help you increase traffic using SEO + digital marketing + social media marketing.';
  }
  if (intent === 'college_project') {
    return 'Great — we provide ready-to-submit college projects with source code + documentation + demo support.';
  }
  if (intent === 'graphics_design') {
    return 'Great — we design posters/banners, business graphics, and digital marriage cards.';
  }
  if (intent === 'pattachitra') {
    return 'Great — we sell authentic Pattachitra from Raghurajpur with special pricing (bulk available).';
  }
  if (intent === 'solar') {
    return 'Great — we assist with solar panel consultation and installation guidance.';
  }
  return 'Namaste! I can guide you and connect you quickly.';
}

export default function ChatbotWidget() {
  const quickActions: QuickAction[] = useMemo(
    () => [
      { label: 'Website + SEO', message: 'I want a business website + SEO' },
      { label: 'College Project', message: 'I need a college project (Java/Python/PHP etc.)' },
      { label: 'Digital Marketing', message: 'I want digital marketing + social media marketing' },
      { label: 'Pattachitra', message: 'I want Pattachitra from Raghurajpur (special price)' },
      { label: 'Solar Help', message: 'I need help for solar panel' },
    ],
    []
  );

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [lead, setLead] = useState<Lead>({ intent: 'general' });
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: uid(),
      role: 'bot',
      text: 'Namaste! I am UniQue WebCraft Assistant. Ask me about services, college projects, Pattachitra or solar assistance.',
      ts: Date.now(),
    },
  ]);

  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, open]);

  const lastUserText = useMemo(() => {
    for (let i = messages.length - 1; i >= 0; i -= 1) {
      if (messages[i].role === 'user') return messages[i].text;
    }
    return '';
  }, [messages]);

  const whatsappHref = useMemo(() => {
    const transcript = messages
      .slice(-8)
      .map((m) => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.text}`)
      .join('\n');

    const leadLines = [
      lead.intent ? `Intent: ${lead.intent}` : null,
      lead.name ? `Name: ${lead.name}` : null,
      lead.phone ? `Phone: ${lead.phone}` : null,
      lead.email ? `Email: ${lead.email}` : null,
      lead.city ? `City: ${lead.city}` : null,
      lead.budget ? `Budget: ${lead.budget}` : null,
      lead.timeline ? `Timeline: ${lead.timeline}` : null,
      lead.tech ? `Tech: ${lead.tech}` : null,
      lead.topic ? `Topic: ${lead.topic}` : null,
      lead.quantity ? `Qty: ${lead.quantity}` : null,
    ].filter(Boolean);

    const text = `Hi UniQue WebCraft, I need help.\n\nLast topic: ${lastUserText || 'General inquiry'}\n\nDetails:\n${leadLines.join('\n') || 'N/A'}\n\nRecent chat:\n${transcript}`;
    return buildWhatsAppHref(text);
  }, [messages, lastUserText, lead]);

  const sendUserMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = { id: uid(), role: 'user', text: trimmed, ts: Date.now() };

    const nextLead = extractLead(lead, trimmed);
    setLead(nextLead);

    const willIntro = lead.intent === 'general' && nextLead.intent !== 'general';
    const intro = willIntro ? `${intentIntro(nextLead.intent)} ` : '';
    const botText = `${intro}${nextQuestion(nextLead)}`;
    const botMsg: Message = { id: uid(), role: 'bot', text: botText, ts: Date.now() + 1 };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  return (
    <div className="chatbot">
      {!open ? (
        <button className="chatbot-fab" onClick={() => setOpen(true)} aria-label="Open chatbot">
          Chat
        </button>
      ) : (
        <div className="chatbot-panel" role="dialog" aria-label="Chatbot">
          <div className="chatbot-header">
            <div>
              <div className="chatbot-title">UniQue Assistant</div>
              <div className="chatbot-subtitle">Quick help + WhatsApp support</div>
            </div>
            <button className="chatbot-close" onClick={() => setOpen(false)} aria-label="Close chatbot">
              ×
            </button>
          </div>

          <div className="chatbot-body" ref={listRef}>
            {messages.map((m) => (
              <div key={m.id} className={`chatbot-msg ${m.role === 'user' ? 'user' : 'bot'}`}>
                <div className="chatbot-bubble">{m.text}</div>
              </div>
            ))}

            <div className="chatbot-quick">
              {quickActions.map((a) => (
                <button key={a.label} className="chatbot-chip" onClick={() => sendUserMessage(a.message)}>
                  {a.label}
                </button>
              ))}
            </div>
          </div>

          <div className="chatbot-footer">
            <div className="chatbot-input-row">
              <input
                className="chatbot-input"
                value={input}
                placeholder="Type your message..."
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') sendUserMessage(input);
                }}
              />
              <button className="chatbot-send" onClick={() => sendUserMessage(input)}>
                Send
              </button>
            </div>

            <div className="chatbot-actions">
              <a className="chatbot-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="chatbot-contact" href="/hire-us">
                Contact Form
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
