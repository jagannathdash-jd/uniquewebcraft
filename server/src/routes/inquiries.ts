import express from 'express';
import { db } from '../db';
import { tempStore } from '../tempStore';

const router = express.Router();

function isDatabaseUnavailable(error: unknown) {
  const e = error as any;
  return e?.code === 'ECONNREFUSED' || e?.code === 'PROTOCOL_CONNECTION_LOST' || e?.code === 'ENOTFOUND';
}

router.post('/', async (req, res) => {
  try {
    const { full_name, email, phone, website_type, budget_range, project_description, timeline } = req.body;
    if (!full_name || !email) {
      return res.status(400).json({ error: 'Full name and email are required' });
    }
    const [result] = await db.execute(
      `INSERT INTO inquiries (full_name, email, phone, website_type, budget_range, project_description, timeline)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [full_name, email, phone, website_type, budget_range, project_description, timeline]
    );
    res.status(201).json({ id: (result as any).insertId, message: 'Inquiry submitted successfully' });
  } catch (error) {
    console.error('Error creating inquiry:', error);
    if (isDatabaseUnavailable(error)) {
      const created = tempStore.createInquiry({
        full_name: String(req.body?.full_name || ''),
        email: String(req.body?.email || ''),
        phone: req.body?.phone,
        website_type: req.body?.website_type,
        budget_range: req.body?.budget_range,
        project_description: req.body?.project_description,
        timeline: req.body?.timeline,
      });
      return res.status(201).json({ id: created.id, message: 'Inquiry submitted successfully (temp db)' });
    }
    res.status(500).json({ error: 'Failed to submit inquiry' });
  }
});

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM inquiries ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    if (isDatabaseUnavailable(error)) {
      return res.json(tempStore.listInquiries());
    }
    res.status(500).json({ error: 'Failed to fetch inquiries' });
  }
});

export { router as inquiriesRouter };
