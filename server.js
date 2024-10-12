const express = require('express');
const path = require("path")
const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'src')))


// const fsPromises = require("fs").promises;

// const fileOps = async () => {
//     try {
//         const data = await fsPromises.readFile(path.join(__dirname, "starter.txt"), 'utf8')
//         await fsPromises.writeFile(path.join(__dirname, "newdata.txt"), data)
//         await fsPromises.rename(path.join(__dirname, "newdata.txt"), path.join(__dirname, "olddata.txt"))
//         await fsPromises.appendFile(path.join(__dirname, "olddata.txt"), '\n\nThis is the appended statement')
//         const newdata = await fsPromises.readFile(path.join(__dirname, "olddata.txt"), 'utf8')
//         await fsPromises.writeFile(path.join(__dirname, "next.txt"), newdata)
//         await fsPromises.unlink(path.join(__dirname, 'starter.txt'))
//         console.log('Operation completed')
//     } catch (err) {
//         console.error(err);
//     }
// }

// fileOps();

// exits on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})