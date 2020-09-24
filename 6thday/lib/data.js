const { dir } = require('console');
const fs = require('fs');
const path = require('path');
const lib = {};
//Base Directory of the data folder
lib.baseDir = path.join(__dirname, '/../.data/');
console.log(lib.baseDir);
//Function to create a new file and insert the data
//lib.creat,, creating a key having a function which contains 4 var
lib.create = (dir, file, data, callback) =>{
    fs.open(lib.baseDir + dir +'/'+ file+ '.json' , "wx", (err, fileDescriptor) => {
        // console.log(fileDescriptor); It will give or point to the file reference
        if(!err) {
            const stringData = JSON.stringify(data);//kk
            //Write to file and close the file
            fs.writeFile(fileDescriptor, stringData, (err) => {
                if (!err){
                    fs.close(fileDescriptor, stringData, (err) => {
                        if(!err){
                            callback(false)
                        }else{
                            callback("error in closing file");

                        }
                     
                    
                    })
                } else{
                    callback("Error in Writing to new File!");
                }
            })
 
        } else {
            callback('Could not create New File, or It may be there already!')
        }
    })
}

//function to read a file and print the data

lib.read = (dir, file, callback) => {
    fs.readFile(lib.baseDir + dir + '/' + file + '.json', "utf-8", (err, data) =>{
        callback(err,data);
    } )
}

//Function to Update the File Contents

lib.update = (dir, file, data, callback) => {
    //Open the Files
    fs.open(lib.baseDir + dir + '/' + file + '.json', 'r+', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            const stringData = JSON.stringify(data);
            //Truncate the file
            fs.ftruncate(fileDescriptor, (err) => {
                if (!err) {
                    //We can write to the file and close it
                    fs.writeFile(fileDescriptor, stringData, (err) => {
                        if (!err) {
                            fs.close(fileDescriptor, (err) => {
                                if (!err) {
                                    callback(false);
                                } else {
                                    callback("Error in Closing File");
                                }
                            })
                        } else {
                            callback("Error in Writing File")
                        }
                    })
                } else {
                    callback("Error in truncating File");
                }
            })
        } else {
            callback('Could not open the file for update');
        }
    })
}