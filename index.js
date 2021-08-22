const sharp = require('sharp')
const fs = require('fs')

console.log('starting application.... ')
let startingDir = '../'
const moveToDir = './optimizedImages/'

fs.readdir(startingDir, (err, files) => {
    files.forEach((file) => {
        fileArr = file.split('.')
        fileArr.splice(1, 0, ' OPTIMIZED.')
        optimizedStr = fileArr.join('')
        console.log('Changing file to ', optimizedStr)
        const oldFilePath = startingDir + file
        var stats = fs.statSync(oldFilePath)
        var fileSizeInBytesStarting = stats.size
        const newPath = moveToDir + optimizedStr
        sharp(oldFilePath).toFile(newPath, (err, info) => {
            if (err) {
                console.log(err.message)
            } else {
                var stats = fs.statSync(newPath)
                var fileSizeInBytesEnding = stats.size
                console.log('String File size is: ', fileSizeInBytesStarting)
                console.log('Ending file size is: ', fileSizeInBytesEnding)
                console.log('Image is compressed =============================')
            }
        })
    })
})
