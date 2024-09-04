let numb = Math.random()*50;

const prom = new Promise((res, rej) =>{
    if(numb>10) setTimeout(function() { res(numb)}, 10);
    else rej('Errore')
    
})

async function prova(){
    try{
const result = await prom
console.log(result)
}
catch(e){
console.log(e)}}

prova()