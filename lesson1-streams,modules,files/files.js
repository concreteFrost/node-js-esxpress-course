//fs - file system
const fs = require('fs')

//read
// fs.readFile("./testFiles/testFile.txt", (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(data.toString().split(' ').join(''))
//     }
// })

//write
// fs.writeFile('./testFiles/testFiles.txt', 'Fuck off', () => {
//     console.log('files saved')
// })

//dir
// if (fs.existsSync('./assets')) {
//     console.log('already exists')
// }

// else {
//     fs.mkdir("./assets", (err) => {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             console.log('folder created')
//         }
//     })
// }

//delete
// fs.rmdir('./assets', () => {
//     console.log('deleted')
// })