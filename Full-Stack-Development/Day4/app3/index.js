// const os = require('os');

// console.log('Operating System: ', os.platform());
// console.log('HostName: ', os.hostname());
// console.log('Number of CPUs: ', os.cpus().length);

const fs = require('fs');

// fs.readFile('hello.txt', 'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });

// fs.writeFile('new_file.txt', 'Hello World!', (err)=>{
//     if(err) throw err;
//     console.log('File Written successfully!!');
    
// })

// fs.mkdir('test_dir', (err)=>{
//     if(err) throw err;
//     console.log('Directory Created');
// });

fs.readdir('test_dir', (err, files)=>{
    if(err) throw err;
    console.log(files);
    
});