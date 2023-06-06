const fs = require('fs');

//Normal Stream

const readStream = fs.createReadStream("./streamFiles/stream2.txt", { encoding: 'utf8' });
const writeStream = fs.createWriteStream("./streamFiles/stream1.txt");
// let num = 0
// readStream.on('data', (chunk) => {
//     num++;
//     writeStream.write('\n!!!!!!!!!!NEW CHUNK!!!!!!!!!!!!!!\n' + num)
//     console.log(chunk)

// })

//Piping

readStream.pipe(writeStream)



