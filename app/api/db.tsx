import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Erreur lors de la connexion à la base de données:', err);
    } else {
        console.log('Connexion réussie à la base de données SQLite');
    }
});

export default db;
