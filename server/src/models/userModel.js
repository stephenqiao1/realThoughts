const db = require('../../config/db');

class UserModel {
    // Create a new user
    static async create(username, email, hashedPassword) {
        try {
            const [result] = await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);
            console.log("DB Result:", result);
            return result.insertId;
        } catch (error) {
            throw error;
        }
    }

    // Find a user by ID
    static async findById(userId) {
        try {
            const [rows] = await db.query('SELECT * FROM users where id = ?', [userId]);
            return rows[0]
        } catch (error) {
            throw error;
        }
    }

    // Find a user by email
    static async findByEmail(email) {
        try {
            const [rows] = await db.query('SELECT * FROM users where email = ?', [email]);
            return rows[0]
        } catch (error) {
            throw error;
        }
    }

    // Update a user's information
    static async update(userId, username, email) {
        try {
            await db.query('UPDATE users SET username = ?, email = ? WHERE id = ?', [username, email, userId]);
        } catch (error) {
            throw error;
        }
    }

    // Delete a user
    static async delete(userId) {
        try {
            await db.query('DELETE FROM users WHERE id = ?', [userId]);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserModel;