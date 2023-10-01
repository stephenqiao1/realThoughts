const db = require('../../config/db');

class MoodModel {
    static async create(userId, mood) {
        try {
            const [result] = await db.query('INSERT INTO moods (user_id, mood) VALUES (?, ?)', [userId, mood]);
            return result.insertId;
        } catch (error) {
            throw error;
        }
    }

    static async findByUserId(userId) {
        try {
            const [rows] = await db.query('SELECT * FROM moods WHERE user_id = ?', [userId]);
            return rows; // return the found moods
        } catch (error) {
            throw error;
        }
    }

    static async delete(moodId) {
        try {
            await db.query('DELETE FROM moods WHERE id = ?', [moodId]);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = MoodModel;