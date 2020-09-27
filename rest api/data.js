const path = require('path');
const fs = require('fs');
const helpers = require('./helpers');
const fileSystem = {};

fileSystem.workingDirectory = path.join(__dirname, './.data/');

fileSystem.create = (dir, file, data, callback) => {
    fs.open(fileSystem.workingDirectory + dir + '/' + file + '.json', 'wx', (err, fd) => {
            if (!err && fd) {
                const stringData = JSON.stringify(data);
                fs.writeFile(fd, stringData, (err) => {
                    if (!err) {
                        fs.close(fd, (err) => {
                            if (!err) {
                                callback(false);
                            } else {
                                callback('error closing new file')
                            }
                        })

                    } else {
                        callback("error writing file")
                    }
                })


            } else {
                callback("There is dome error in opening of file");
            }
        }

    )
}
fileSystem.read = (dir, file, callback) => {

    fs.readFile(fileSystem.workingDirectory+ dir + '/' + file + '.json', 'utf-8', (err, data) => {
        callback(err, data);
    })

}

fileSystem.update = (dir, file, data, callback) => {
    fs.open(fileSystem.workingDirectory + dir + '/' + file + 'json', 'wx', (err, fd) => {
        if (!err && fd) {
            const stringData = JSON.stringify(data);
            fs.ftruncate(fd, (err) => {
                if (!err && fd) {
                    fs.write(fd, stringData, (err) => {

                        if (!err) {
                            fs.close(fd, (err) => {
                                if (!err) {
                                    callback(false);
                                } else {
                                    callback('error in closing file')
                                }
                            })

                        } else {
                            callback('not able to update file')
                        }

                    })

                } else {

                    callback('error in adding new data')
                }

            })


        } else {
            callback("error opening new file")
        }

    })
}


fileSystem.delete = (dir, file, callback) => {
    //Unlinking or deleting
    fs.unlink(fileSystem.workingDirectory + dir + '/' + file + '.json', (err) => {
        if (!err) {
            callback(false);
        } else {
            callback("Error in Deleting File");
        }
    })
}


module.exports = fileSystem;