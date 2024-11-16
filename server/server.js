const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');
const mqtt = require('mqtt');
const db=require('./config/db')
const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());

// MQTT broker details
const brokerUrl = 'mqtt://broker.hivemq.com';
const topic1 = 'Pleasure/ADC';
const topic2 = 'Pleasure/GPS';
db.run(
    `CREATE TABLE IF NOT EXISTS mqtt_data (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      topic TEXT NOT NULL,
      data JSON NOT NULL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )`,
    (err) => {
      if (err) {
        console.error('Error creating table:', err.message);
      } else {
        console.log('Table "mqtt_data" ensured to exist');
      }
    }
  );
// Connect to the broker
const mqttClient = mqtt.connect(brokerUrl, {
  clientId: `qpperzPGO3`, // Unique client ID
});

const wss = new WebSocket.Server({ port: 8080 });
let clients = [];
wss.on('connection', (ws) => {
  console.log('New WebSocket client connected');
  clients.push(ws);

  // Remove client on disconnect
  ws.on('close', () => {
    console.log('Client disconnected');
    clients = clients.filter((client) => client !== ws);
  });
});


mqttClient.on('connect', () => {
  console.log('Connected to MQTT broker!');

  // Subscribe to both topics
  mqttClient.subscribe([topic1, topic2], (err) => {
    if (err) {
      console.error('Failed to subscribe:', err);
    } else {
      console.log(`Subscribed to topics: ${topic1}, ${topic2}`);
    }
  });
});


// Handle incoming MQTT messages
let messageBuffer=[];
mqttClient.on('message', (topic, message) => {
  const data = message.toString();
  console.log(`Message received on topic '${topic}': ${data}`);
messageBuffer.push({topic:topic,data:data})
  // Prepare payload for WebSocket clients
  const payload = {
    topic,
    data: JSON.parse(data),
  };

 
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(payload));
    }
  });
});
setInterval(()=>{
    if(messageBuffer.length>0){
        const insert=db.prepare('INSERT INTO mqtt_data (topic,data) VALUES (?,?)')
        messageBuffer.forEach((message)=>{
            insert.run([message.topic,message.data],(err)=>{
                    if(err){
                        console.log(err)
                    }
                    else
                    {
                        console.log('Data inserted')
                    }
            })
        })
  messageBuffer=[]

    }

},510000)
// Handle MQTT errors
mqttClient.on('error', (err) => {
  console.error('MQTT Connection error:', err);
});

app.use('/auth', require('./routes/auth'));
app.use('/protected', require('./routes/protected'));
app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});

console.log('WebSocket server running on ws://localhost:8080');
