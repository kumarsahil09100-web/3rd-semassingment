import fs from 'fs';



//Readable streams
const readStream = fs.createReadStream('intro.txt', 'utf8');


readStream.on('data', (chunk) => {
    console.log('New chunk received:');
    console.log("Data:", chunk);
});
