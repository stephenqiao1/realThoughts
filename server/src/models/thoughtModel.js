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

    static async findAll() {
        try {
            const [rows] = await db.query('SELECT * FROM thoughts');
            return rows; // Return all thoughts
        } catch (error) {
            throw error;
        }
    }

    static async delete(thoughtId) {
        try {
            await db.query('DELETE FROM thoughts WHERE id = ?', [thoughtId]);
        } catch (error) {
            throw error;
        }
    }

    static async findRandomExcludingUser(userId, limit = 10) {
        try {
            const [rows] = await db.query('SELECT * FROM thoughts WHERE user_id != ? ORDER BY RAND() LIMIT ?', [userId, limit]);
            console.log(rows);
            return rows;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ThoughtModel;