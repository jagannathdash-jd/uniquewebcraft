import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { initDatabase } from './db';
import { inquiriesRouter } from './routes/inquiries';
import { projectsRouter } from './routes/projects';

dotenv.config();

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/inquiries', inquiriesRouter);
app.use('/api/projects', projectsRouter);

app.get('/api/health', (req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

initDatabase().catch((error) => {
  console.error('MySQL is not reachable. Start MySQL and run init-db. Details:', error);
});
