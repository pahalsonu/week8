// 1. get ip of your system by axios and promise

// const axios = require('axios');
// const ipUrl = 'http://api.ipify.org/?format=json';
// console.log(" I am Making a Network Request and learning Async Program..");
// axios.get(ipUrl)
//     .then((response) => {
//         console.log(response.data);
        
//     })
//     .catch((err) => {
//        console.log(err)
//     })


// 2.promise chaining

// const URL = 'http://localhost:5000/add';
// const readlineSync = require('readline-sync');
// const axios = require("axios");
// const num1 = readlineSync.question("Enter First Number : ");
// const num2 = readlineSync.question("Enter Second Number : ");
// axios.get(`${URL}/${num1}/${num2}`)
//     .then((res) => {
//         console.log(res.data); //expect sum
//         const num3 = readlineSync.question("Enter Third Number : ");
//         axios.get(`${URL}/${res.data}/${num3}`)
//             .then((res) => {
//                 console.log("Final Sum : "+ res.data);
//             })
//             .catch((err) => {
//                 console.log("Something Went Wrong!")
//             })
//     })
//     .catch((err) => {
//         console.log("Something Went Wrong!")
//     })

// 3.async 

// const axios = require("axios");
// var URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
// var apiCall = `${URL}Delhi&appid=b3ddff3ed6d7680c73f7f66c51c30928`;
// console.log("First");
// async function abc(apiCall) {
//     try {
//        const result = await axios.get(apiCall);
//       console.log(result.data.main);
//     }catch(err){
//         console.log('Something Went Wrong');
//     }
// }
// abc(apiCall);
// console.log("Last");


// 3.async chaining


// const URL = 'http://localhost:5000/add';
// const readlineSync = require('readline-sync');
// const axios = require("axios");
// const num1 = readlineSync.question("Enter First Number : ");
// const num2 = readlineSync.question("Enter Second Number : ");
// var dodo = async ()=>{
//     try {
//         const res1 = await axios.get(`${URL}/${num1}/${num2}`);
//         const sum1 = res1.data;
//         const num3 = readlineSync.question("Enter Third Number : ");
//         const res2 = await axios.get(`${URL}/${sum1}/${num3}`);
//         console.log('Final Sum : ', res2.data);
//     } catch (error) {
//         console.log("Something Went Wrong");
//     }
// }
// dodo();


//4. async chaining

// const URL = 'http://localhost:5000/add';
// const readlineSync = require('readline-sync');
// const axios = require("axios");
// const num1 = readlineSync.question("Enter First Number : ");
// const num2 = readlineSync.question("Enter Second Number : ");
// console.log("First");
// var dodo = async ()=>{
//     try {
//         console.log("123");
//         const res1 = await axios.get(`${URL}/${num1}/${num2}`);
//         console.log('First Sum : ', res1.data);
//         const sum1 = res1.data;
//         const num3 = readlineSync.question("Enter Third Number : ");
//         const res2 = await axios.get(`${URL}/${sum1}/${num3}`);
//         console.log('Second Sum : ', res2.data);
//         const sum2 = res2.data;
//         const num4 = readlineSync.question("Enter Fourth Number : ");
//         const res3 = await axios.get(`${URL}/${sum2}/${num4}`);
//         console.log("Final Sum : ", res3.data);
//     } catch (error) {
//         console.log("Something Went Wrong");
//     }
// }
// dodo();
// console.log("Last");


//5.

// const URL = 'http://localhost:5000/add';
// const readlineSync = require('readline-sync');
// const axios = require("axios");
// const num1 = readlineSync.question("Enter First Number : ");
// const num2 = readlineSync.question("Enter Second Number : ");
// console.log("First");
// var dodo = async ()=>{
//     try {
//         console.log("123");
//         const res1 = await axios.get(`${URL}/${num1}/${num2}`);
//         console.log('First Sum : ', res1.data);
//         const sum1 = res1.data;
//         const num3 = readlineSync.question("Enter Third Number : ");
//         const res2 = await axios.get(`${URL}/${sum1}/${num3}`);
//         console.log('Second Sum : ', res2.data);
//         const sum2 = res2.data;
//         const num4 = readlineSync.question("Enter Fourth Number : ");
//         const res3 = await axios.get(`${URL}/${sum2}/${num4}`);
//         console.log("Final Sum : ", res3.data);
//     } catch (error) {
//         console.log("Something Went Wrong");
//     }
// }
// dodo();
// console.log("Last");




//6. 

// const fs = require('fs');
// const readlineSync = require('readline-sync');
// const fileName = readlineSync.question("Enter File Name :");
// const fileData = readlineSync.question("Enter Data : ");
// fs.writeFile(fileName, fileData, (err) => {
//     if (err) {
//         throw err;
//     } else {
//         fs.readFile(fileName, (err, data) => {
//             if (err) {
//                 throw err;
//             } else {
//                 console.log(data.toString());
//             }
//         })
//     }
// })



//7. util promisify 

// const fs = require('fs');
// const readlineSync = require('readline-sync');
// const util = require('util');
// const fileName = readlineSync.question("Enter File Name :");
// const fileData = readlineSync.question("Enter Data : ");
// const readFile = util.promisify(fs.readFile);
// const writeFile = util.promisify(fs.writeFile);
// console.log(1);
// writeFile(fileName,fileData)
//     .then(()=>{
//         console.log('File Created!');
//         return readFile(fileName);
//     })
//     .then((data)=>{
//         console.log(data.toString());
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
// console.log(11);




//8. three methods
// a.
// const readLineSync = require('readline-sync');
// const fs = require('fs');
// //Method 1
// const fileName = (new Date()).toLocaleTimeString();
// const fileData = readLineSync.question("Enter File Content : ");
// fs.writeFile(fileName, fileData, (err) => {
//     if (err) {
//         throw err;
//     }
//     fs.readFile(fileName, (err, data) => {
//         if (err) {
//             throw err;
//         } console.log(data.toString());
//         fs.unlink(fileName, (err) => {
//             if (err) {
//                 throw err;
//             }
//         })
//     })
// })



// b.


// const readLineSync = require('readline-sync');
// const fs = require('fs');
// const util = require('util');
// //Method 2
// const writeFile = util.promisify(fs.writeFile);
// const readFile = util.promisify(fs.readFile);
// const deleteFile = util.promisify(fs.unlink);
// const fileName = (new Date()).toLocaleTimeString();
// const fileData = readLineSync.question("Enter File Content : ");
// writeFile(fileName, fileData)
//     .then(() => {
//         console.log(fileName + 'File Created');
//         return readFile(fileName);
//     })
//     .then((data) => {
//         console.log(data.toString());
//         deleteFile(fileName);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


//c.
// const readLineSync = require('readline-sync');
// const fs = require('fs');
// const util = require('util');
// //Method 3
// const writeFile = util.promisify(fs.writeFile);
// const readFile = util.promisify(fs.readFile);
// const deleteFile = util.promisify(fs.unlink);
// const fileName = (new Date()).toLocaleTimeString();
// const fileData = readLineSync.question("Enter File Content : ");
// async function abc() {
//     try {
//         await writeFile(fileName, fileData);
//         console.log('File Created.', fileName);
//         const data = await readFile(fileName);
//         console.log(data.toString());
//         await deleteFile(fileName);
//         console.log('File Deleted.', fileName);
//     } catch (err) {
//         console.log(err);
//     }
// }
// abc();



// 


// const readLineSync = require('readline-sync');
// const fs = require('fs');
// //Method 4
// const fileName = (new Date()).toLocaleTimeString();
// const fileData = readLineSync.question("Enter File Content : ");
// function writeFile(fileName,fileData){
//     return new Promise((resolve,reject)=>{
//         fs.writeFile(fileName,fileData, (err)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve();
//             }
//         });
//     })
// }
// function readFile(fileName){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(fileName, (err,data)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         });
//     })
// }
// function deleteFile(fileName){
//     return new Promise((resolve,reject)=>{
//         fs.unlink(fileName, (err)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve();
//             }
//         });
//     })
// }
// writeFile(fileName, fileData)
//     .then(() => {
//         console.log(fileName + 'File Created');
//         return readFile(fileName);
//     })
//     .then((data) => {
//         console.log(data.toString());
//         deleteFile(fileName);
//     })
//     .catch((err) => {
//         console.log(err);
//     })







// axios.get(`${URL}/${num1}/${num2}`)
//     .then((res) => {
//         console.log(res.data); //expect sum
//         const num3 = readlineSync.question("Enter Third Number : ");
//         axios.get(`${URL}/${res.data}/${num3}`)
//             .then((res) => {
//                 console.log("Final Sum : " + res.data);
//             })
//             .catch((err) => {
//                 console.log("Something Went Wrong!")
//             })
//     })
//     .catch((err) => {
//         console.log("Something Went Wrong!")
//     })
















// axios.get(`${URL}/${num1}/${num2}`)
//     .then((res) => {
//         console.log(res.data); //expect sum
//         const num3 = readlineSync.question("Enter Third Number : ");
//         axios.get(`${URL}/${res.data}/${num3}`)
//             .then((res) => {
//                 console.log("Final Sum : " + res.data);
//             })
//             .catch((err) => {
//                 console.log("Something Went Wrong!")
//             })
//     })
//     .catch((err) => {
//         console.log("Something Went Wrong!")
//     })



// axios.get(apiCall)
//     .then((res)=>{
//         console.log(res.data.main)
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// console.log("Last");














// var fs = require("fs");
// var util=require("util")
// var readline= require('readline-sync')
// var usercontent=readline.question("file data")
// fs.writeFile('prob.txt', usercontent, function(err) {
//    if (err) {
//       throw err;
//    }
//    fs.readFile('prob.txt', function (err, data) {
//       if (err) {
//          throw err;
//       }
//       console.log("First Method: " + data.toString());
//       fs.unlink("prob.txt",(err)=>{
//           if(err){
//               throw err;
//           }
//       })
//    });
// });

// // second method

//  const write = util.promisify(fs.writefile);
//  const read = util.promisify(fs.readfile);
//  const del= util.promisify(fs.unlink);
//  write(file,dat)
//  .then(()=>{
// console.log(file+)
//  })
//  .catch(()=>{
//      console.log(err);
//  })
