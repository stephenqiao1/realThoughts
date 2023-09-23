const db = require('../config/db');

class FollowModel {
    static async create(followerId, followeeId) {
        try {
            const [result] = await db.query('INSERT INTO follows (follower_id, followee_id) VALUES (?, ?)', [followerId, followeeId]);
            return result.insertId;  
        } catch (error) {
            throw error;
        }
    }

    static async findByFollowerId(followerId) {
        try {
            const [rows] = await db.query('SELECT * FROM follows WHERE follower_id = ?', [followerId]);
            return rows; // Return the found follows
        } catch (error) {
            throw error;
        }
    }

    static async delete(followId) {
        try {
            await db.query('DELETE FROM follows WHERE id = ?', [followId]);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = FollowModel;