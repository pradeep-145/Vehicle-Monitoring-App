const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');
const mqtt = require('mqtt');

const app = express();
const port = 3000;

// Enable CORS and JSON middleware
app.use(cors());
app.use(express.json());

// MQTT broker details
const brokerUrl = 'mqtt://broker.hivemq.com';
const topic = 'Pleasure/GPS';
const gps='Pleasure/GPS';

// Connect to the broker
const mqttClient = mqtt.connect(brokerUrl, {
  clientId: `client_${Math.random().toString(16).substr(2, 8)}`, // Unique client ID
});

// WebSocket server
const wss = new WebSocket.Server({ port: 8080 });
let clients = [];

// Add WebSocket client connections
wss.on('connection', (ws) => {
  console.log('New WebSocket client connected');
  clients.push(ws);

  // Remove client on disconnect
  ws.on('close', () => {
    console.log('Client disconnected');
    clients = clients.filter((client) => client !== ws);
  });
});

// Connect to MQTT broker
mqttClient.on('connect', () => {
  console.log('Connected to MQTT broker!');

  // Subscribe to the topic
  mqttClient.subscribe(topic, (err) => {
    if (err) {
      console.error('Failed to subscribe:', err);
    } else {
      console.log(`Subscribed to topic: ${topic}`);
    }
  });
});


// Handle incoming MQTT messages
mqttClient.on('message', (topic, message) => {
  const data = message.toString();
  console.log(`Message received on topic '${topic}': ${data}`);

  // Broadcast data to all WebSocket clients
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
});

// Handle MQTT errors
mqttClient.on('error', (err) => {
  console.error('MQTT Connection error:', err);
});

// Express server
app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});

console.log('WebSocket server running on ws://localhost:8080');
