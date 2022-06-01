// setTimeout(() => {
//     console.log('hello');
//     clearInterval(int)
// }, 3000)

// const int = setInterval(() => {
//     console.log('interval');
// }, 1000)

// const {people, ages} = require('./people')

// console.log(people, ages)

const fs = require("fs");

// fs.readFile('./blog.txt', (err, data) => {
//     if(err) {
//         console.log(err)
//     }

//     console.log(data.toString())
// })

// fs.writeFile('./blog.txt', 'Hello World', () => {
//     console.log('Written')
// })


// if (!fs.existsSync("./Assets")) {
//   fs.mkdir("./Assets", (err) => {
//     if (err) {
//       console.log(err);
//     }

//     console.log("Created");
//   });
// }else {
//     fs.rmdir('./Assets', (err) => {
//         if(err) {
//             console.log(err)
//         }
//         console.log('delted')
//     })
// }

const readStream = fs.createReadStream('./blog.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./blog2.txt')

// readStream.on('data', (chunk) => {
//     console.log('-------------NEW CHUNK--------------')
//     console.log(chunk)
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk);
// })

readStream.pipe(writeStream)
