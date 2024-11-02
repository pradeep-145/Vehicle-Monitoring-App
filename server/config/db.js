const sqlite3=require('sqlite3').verbose()
const db=new sqlite3.Database('sqlitecloud://cokwqq8zhk.sqlite.cloud:8860/vehicle-tracking-analytics?apikey=WOVbBakYX9k0GsbNMQbbQmFDUZslsVX5dSqaAXdqwzA',(err)=>{
    if(err){
        console.error(err.message)
        throw err
    }
    console.log('Connected to the vehicle-tracking-analytics database.')
})

module.exports=db