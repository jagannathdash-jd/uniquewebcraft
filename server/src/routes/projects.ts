import express from 'express';
import { db } from '../db';
import { tempStore } from '../tempStore';

const router = express.Router();

function isDatabaseUnavailable(error: unknown) {
  const e = error as any;
  return e?.code === 'ECONNREFUSED' || e?.code === 'PROTOCOL_CONNECTION_LOST' || e?.code === 'ENOTFOUND';
}

router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    let query = 'SELECT * FROM projects ORDER BY created_at DESC';
    let params: any[] = [];
    if (category) {
      query = 'SELECT * FROM projects WHERE JSON_CONTAINS(categories, ?) ORDER BY created_at DESC';
      params = [`"${category}"`];
    }
    const [rows] = await db.execute(query, params);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching projects:', error);
    if (isDatabaseUnavailable(error)) {
      const category = typeof req.query.category === 'string' ? req.query.category : undefined;
      return res.json(tempStore.listProjects(category));
    }
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, description, tech_stack, categories, price, demo_url, features } = req.body;
    if (!title || !description || !tech_stack || !categories) {
      return res.status(400).json({ error: 'Title, description, tech stack, and categories are required' });
    }
    const [result] = await db.execute(
      `INSERT INTO projects (title, description, tech_stack, categories, price, demo_url, features)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [title, description, tech_stack, JSON.stringify(categories), price, demo_url, JSON.stringify(features || [])]
    );
    res.status(201).json({ id: (result as any).insertId, message: 'Project created successfully' });
  } catch (error) {
    console.error('Error creating project:', error);
    if (isDatabaseUnavailable(error)) {
      const created = tempStore.createProject({
        title: String(req.body?.title || ''),
        description: String(req.body?.description || ''),
        tech_stack: String(req.body?.tech_stack || ''),
        categories: Array.isArray(req.body?.categories) ? req.body.categories : [String(req.body?.categories || 'Web')],
        price: req.body?.price,
        demo_url: req.body?.demo_url,
        features: Array.isArray(req.body?.features) ? req.body.features : [],
      });
      return res.status(201).json({ id: created.id, message: 'Project created successfully (temp db)' });
    }
    res.status(500).json({ error: 'Failed to create project' });
  }
});

export { router as projectsRouter };
