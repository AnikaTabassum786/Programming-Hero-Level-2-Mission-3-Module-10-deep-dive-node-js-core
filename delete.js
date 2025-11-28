const fs = require('fs')

fs.writeFileSync("./output/temp.tst", "This is a temporary file")
console.log("temp file created")

if(fs.existsSync('./output/temp.tst')){
    console.log('File exist')

    fs.unlinkSync("./output/temp.tst");
    console.log('file deleted')
}


try{
    fs.unlinkSync('./output/temp.tst')
}
catch(error){
console.log("Error: ", error.message)
}


fs.writeFile('./output/temp2.txt',"Another file created",(err)=>{
    if(err) {
        return console.error(err.message)
    }

    console.log("Another temp2 file is created")

    fs.unlink('./output/temp2.txt',(err)=>{
        if(err){
            console.log('Error:', err.message)
        }
        else{
            console.log('temp2 file deleted')
        }
    })
})