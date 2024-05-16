const request = require('supertest');
const app = require('./function');

async function calldependance(name) {
    const response = await request(app).get(`/action?name=${name}`);
    return response.body;
}

function action(name) {
    return `hello ${name}!`;
}

module.exports = { calldependance, action };