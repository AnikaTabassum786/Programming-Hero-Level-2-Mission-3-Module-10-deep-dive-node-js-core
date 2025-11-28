const { error } = require('console');
const fs = require('fs')

const contant1 = 'This is content \n node js is awesome!!!';

try{
    fs.writeFileSync('./output/test-sync.txt',contant1);
    console.log('file written sync')
}
catch(err){
console.log(err.message)
}

const content2 = "This is a content too \n asynchronous!!!"
fs.writeFile('./output/test-async.txt', content2,(error)=>{
    if(error){
        console.error(err.message)
    }
    else{
        console.log("file written asynchronously")
    }
})