const { Database } = require('@sqlitecloud/drivers');

const db = new Database('sqlitecloud://cokwqq8zhk.sqlite.cloud:8860/vehicle-tracking-analytics?apikey=WOVbBakYX9k0GsbNMQbbQmFDUZslsVX5dSqaAXdqwzA');

module.exports = db;