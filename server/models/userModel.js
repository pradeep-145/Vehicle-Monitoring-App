const axios = require('axios');

const API_URL = 'https://cokwqq8zhk.sqlite.cloud:8860/chinook.sqlite';
const API_KEY = 'WOVbBakYX9k0GsbNMQbbQmFDUZslsVX5dSqaAXdqwzA';

class User {
  constructor(mobile, password) {
    this.mobile = mobile;
    this.password = password;
  }

  async save() {
    const sql = `INSERT INTO users (mobile, password) VALUES ('${this.mobile}', '${this.password}')`;
    try {
      const response = await axios.post(API_URL, {
        sql,
        apikey: API_KEY,
      });
      console.log('User saved:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error saving user:', error);
    }
  }

  static async findByMobile(mobile) {
    const sql = `SELECT * FROM users WHERE mobile = '${mobile}' LIMIT 1`;
    try {
      const response = await axios.post(API_URL, {
        sql,
        apikey: API_KEY,
      });
      console.log('User found:', response.data);
      return response.data[0];
    } catch (error) {
      console.error('Error finding user:', error);
    }
  }
}

module.exports = User;
