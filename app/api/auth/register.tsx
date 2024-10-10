// app/api/auth/login.tsx
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import sqlite3 from 'sqlite3';
import { setCookie } from 'cookies-next';
import db from '../db';

const db = new sqlite3.Database('database.db');

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') return res.status(405).end();

    const { email, password } = req.body;

    db.get(`SELECT * FROM users WHERE email = ?`, [email], async (err, user) => {
        if (err || !user) return res.status(401).json({ error: 'Invalid credentials' });

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) return res.status(401).json({ error: 'Invalid credentials' });

        setCookie('user', user.id, { req, res });
        res.status(200).json({ message: 'Logged in successfully' });
    });
};
