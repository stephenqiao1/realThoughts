const db = require('../../config/db');

class ThoughtModel {
    static async create(userId, content) {
        try {
            const [result] = await db.query('INSERT INTO thoughts (user_id, content) VALUES (?, ?)', [userId, content]);
            return result.insertId;
        } catch (error) {
            throw error;
        }
    }

    static async findByUserId(userId) {
        try {
            const [rows] = await db.query('SELECT * FROM thoughts WHERE user_id = ?', [userId])
            return rows;
        } catch (error) {
            throw error;
        }
    }

    
}