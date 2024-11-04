const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');
const app = express();
const authRoute = require('./routes/auth');
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
app.post('/send-otp',(req,res)=>{
    console.log(req.body)
    res.status(200).json({otp:12345,message:'OTP sent successfully'})
}
)
app.get('/', (req, res) => {
    axios.get('https://www.fast2sms.com/dev/bulkV2?authorization=j2o3T8JgFRqz0WhGdpLfemKMbVEUBn4xAsv7wZrlPIcDXNO51Q7gr6U9JAiNShp1sQ4x3fzOwaWtEBbC&route=otp&variables_values=&flash=0&numbers=').then(response=>response.json())
    .catch(error=>console.log(error))
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    }
);