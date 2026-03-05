const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3001/api';

export interface Project {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  categories: string[];
  price?: string;
  demo_url?: string;
  features?: string[];
  created_at: string;
  updated_at: string;
}

export interface Inquiry {
  id: number;
  full_name: string;
  email: string;
  phone?: string;
  website_type?: string;
  budget_range?: string;
  project_description?: string;
  timeline?: string;
  created_at: string;
}

export const api = {
  async getProjects(category?: string): Promise<Project[]> {
    const url = category ? `${API_BASE}/projects?category=${encodeURIComponent(category)}` : `${API_BASE}/projects`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch projects');
    return res.json();
  },
  async createProject(data: Omit<Project, 'id' | 'created_at' | 'updated_at'>): Promise<{ id: number; message: string }> {
    const res = await fetch(`${API_BASE}/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to create project');
    return res.json();
  },
  async getInquiries(): Promise<Inquiry[]> {
    const res = await fetch(`${API_BASE}/inquiries`);
    if (!res.ok) throw new Error('Failed to fetch inquiries');
    return res.json();
  },
  async createInquiry(data: Omit<Inquiry, 'id' | 'created_at'>): Promise<{ id: number; message: string }> {
    const res = await fetch(`${API_BASE}/inquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to submit inquiry');
    return res.json();
  },
};
