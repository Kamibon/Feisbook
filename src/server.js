


const express = require('express')


const app = express();
const PORT = 4200;
//const me = "http:localhost:4200/"
app.use(express.json());


app.post(("/users/create" ),(req,res)=>{
    console.log(req.body)
    fetch('https://ricette-7e199-default-rtdb.firebaseio.com/users', {method:"POST", body:req.body}).then(res.json("Ciao"))

} )

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});