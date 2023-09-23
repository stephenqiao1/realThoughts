const db = require('../../config/db');

class ReactionModel {
    static async create(userId, thoughtId) {
        try {
            const [result] = await db.query('INSERT INTO reactions (user_id, thought_id) VALUES (?, ?)', [userId, thoughtId]);
            return result.insertId;
        } catch (error) {
            throw error;
        }
    }

    static async findByThoughtId(thoughtId) {
        try {
            const [rows] = await db.query('SELECT * FROM reactions WHERE thought_id = ?', [thoughtId]);
            return rows; // return the found reactions
        } catch (error) {
            throw error;
        }
    }

    static async delete(reactionId) {
        try {
            await db.query('DELETE FROM reactions WHERE id = ?', [reactionId]);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ReactionModel;