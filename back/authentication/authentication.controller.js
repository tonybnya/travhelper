const connection = require('../_config/db');
const { CONFIG } = require('../_config/env');
const authentication_model = require('./authentication.model');
const jwt = require('jsonwebtoken');

module.exports = {
    login: async (req, res) => {
        let {
            email,
            password
        } = {...req.body}
        try {
            const [result] = await connection.query(authentication_model.query_login, [email, password]);
            let user = result
            console.log(user);
            if (user.length != 0){ 
                let token = jwt.sign({email}, CONFIG.jwt_token, { expiresIn: '1h' });
                return res.status(200).json({message: "Successfully authenticated!",  token})
            }
            return res.status(401).json({message: "Invalid email or password."})
        } catch (error) {
            return res.status(500).json({message: error})
        }
    },

    register: async (req, res) => {
        let {
            username,
            full_name,
            email,
            password,
            confirm_password
        } = {...req.body}
        if (!username || !full_name || !email || !password || !confirm_password) {
            return res.status(400).json({message: "All fields are required!"});
        }
        if (password.length < 8) {
          return res.status(400).json({message: "Password must be more than 8 characters."})
        }
        if (password !== confirm_password) {
          return res.status(400).json({message: "Password must match confirmation."})
        }
        try {
            const [result] = await connection.query(authentication_model.query_register, [
              username,
              full_name,
              email,
              password
            ])
            return res.status(201).send({message: "User successfully registered!"})
        }
        catch (error) {
            return res.status(500).send(error)
        }
    },

    profile: async (req, res) => {
        try {
            const [result] = await connection.query('SELECT * FROM users_table;')
            return res.status(200).send(result);
        }
        catch (error) {
            return res.status(500).send(error)
        }
    }
}