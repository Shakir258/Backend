const fs = require('fs');

// fs.writeFile("intro.txt" , "I am mohd Shakir siddqui", function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("Done")
//     }
// })

// fs.appendFile("intro.txt" , "Currently done my bechaler", function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("Done")
//     }
// })

// 


// fs.unlink("shakir.txt" , function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("remove")
//     }
// })

fs.readFile("./intro.txt",function(err ,data){
    if(err) console.log(err)
    else console.log(data.toString())
})