// app/page.tsx
import React, { useEffect, useState } from 'react';
import db from '../db';

const HomePage = () => {
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        fetch('/api/artworks')
            .then(res => res.json())
            .then(data => setArtworks(data));
    }, []);

    return (
        <div>
            {artworks.map((artwork) => (
                <div key={artwork.id}>
                    <h3>{artwork.title}</h3>
                    <p>{artwork.description}</p>
                    <button onClick={() => viewDetails(artwork.id)}>View Details</button>
                </div>
            ))}
        </div>
    );
};

export default HomePage;

// app/api/artworks.tsx
import { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('database.db');

export default async (req: NextApiRequest, res: NextApiResponse) => {
    db.all(`SELECT * FROM artworks`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: 'Unable to fetch artworks' });
        res.status(200).json(rows);
    });
};
