// app/api/artworks/[id]/view.tsx
import { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('database.db');

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') return res.status(405).end();

    const { userId, artworkId } = req.body;
    const viewedAt = new Date().toISOString();

    db.run(`INSERT INTO views (userId, artworkId, viewedAt) VALUES (?, ?, ?)`, [userId, artworkId, viewedAt], function (err) {
        if (err) return res.status(500).json({ error: 'Unable to save view' });
        res.status(201).json({ message: 'View recorded successfully' });
    });
};

// app/api/artworks/[id]/vote.tsx
import { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('database.db');

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') return res.status(405).end();

    const { userId, artworkId } = req.body;
    const votedAt = new Date().toISOString();

    db.run(`INSERT INTO votes (userId, artworkId, votedAt) VALUES (?, ?, ?)`, [userId, artworkId, votedAt], function (err) {
        if (err) return res.status(500).json({ error: 'Unable to save vote' });
        res.status(201).json({ message: 'Vote recorded successfully' });
    });
};
