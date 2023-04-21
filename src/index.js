const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/', (req, res)=>{
    res.send('hello world');
})
// console.log("abc")
app.post('/add', (req, res)=>{
    const{num1, num2} = req.body;
    if(typeof num1 !=='number' || typeof num2 !== 'number'){
        res.status(400).json({
            status:'error',
            message:'Invalid data types',
        });
    } else if(num1<-1000000 || num2 <-1000000 || num1+num2 <-1000000){
        res.status(400).json({
            status:'error',
            message:'Underflow'
        });
    } else if(num1>1000000 || num2 >1000000 || num1+num2>1000000){
        res.status(400).json({
            status:'error',
            message:'Overflow'
        });
    } else {
        const sum = num1 + num2;
        res.json({
            status:'success',
            message:'The sum of given numbers',
            sum,
        });
    }
});

app.post('/sub', (req, res)=>{
    const{num1, num2} = req.body;
    if(typeof num1 !=='number' || typeof num2 !== 'number'){
        res.status(400).json({
            status:'error',
            message:'Invalid data types',
        });
    } else if(num1<-1000000 || num2 <-1000000 || num1-num2 <-1000000){
        res.status(400).json({
            status:'error',
            message:'Underflow'
        });
    } else if(num1>1000000 || num2 >1000000 || num1-num2>1000000){
        res.status(400).json({
            status:'error',
            message:'Overflow'
        });
    } else {
        const sub = num1 - num2;
        res.json({
            status:'success',
            message:'The sum of given numbers',
            sub,
        });
    }
});

app.post('/multiply', (req, res)=>{
    const{num1, num2} = req.body;
    if(typeof num1 !=='number' || typeof num2 !== 'number'){
        res.status(400).json({
            status:'error',
            message:'Invalid data types',
        });
    } else if(num1<-1000000 || num2 <-1000000 || num1*num2 <-1000000){
        res.status(400).json({
            status:'error',
            message:'Underflow'
        });
    } else if(num1>1000000 || num2 >1000000 || num1*num2>1000000){
        res.status(400).json({
            status:'error',
            message:'Overflow'
        });
    } else {
        const multiply = num1 * num2;
        res.json({
            status:'success',
            message:'The sum of given numbers',
            multiply,
        });
    }
});

app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;
  
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return res.status(400).json({ 
        status: 'error', 
        message: 'Invalid data types' 
        });
    }
  
    if (num2 === 0) {
      return res.status(400).json({ 
        status: 'error', 
        message: 'Cannot divide by zero'
        });
    }
  
    const result = num1 / num2;
  
    if (result < -1000000) {
      return res.status(400).json({ 
        status: 'error', 
        message: 'Underflow' 
        });
    }
  
    return res.json({ 
        status: 'success', 
        message: 'The division of given numbers', 
        result 
        });
  });
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;