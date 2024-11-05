const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');
const app = express();
const authRoute = require('./routes/auth');
const protectedRoute = require('./routes/protected');
const { default: axios } = require('axios');
app.use(cors());
app.use(express.json());
const port = 3000;

const ws=new WebSocket('wss://57fcccb2dd144715b331185b6c4931be.s1.eu.hivemq.cloud:8884/mqtt')
let dataBuffer=[]

ws.on('message',(message)=>{
    const data=JSON.parse(message.toString())   
    dataBuffer.push(
        {
            speed:data.speed,
            fuel:data.fuel,
            engineStatus:data.engineStatus,
            gear:data.gear,
        }
    )
    console.log(dataBuffer)
}
)



const saveToDataBase=()=>{
    const dataToStore=[...dataBuffer]
    if(dataBuffer.length>0){
        console.log('Saving to database')
        dataBuffer=[]
    }


}


setInterval(saveToDataBase,60000)


ws.on('error',(error)=>{
    console.log(error)
}
)



app.use('/auth',authRoute)
app.use('/protected',protectedRoute)


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    }
);