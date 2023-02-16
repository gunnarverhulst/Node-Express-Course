const {createReadStream} = require('fs');

const stream = createReadStream('.>./content/big.txt', {highWaterMark:90000});

// default 64 jb
// last buffer - remainder
// highWaterMark - control size
// const streazm = createReadStream('./content/big.txt', {highWaterMark: 90000})
// const streazm = createReadStream('./content/big.txt', {encoding: 'utf8'})

stream.on('data', (result) => {
    console.log(result);
});

stream.on('error', (error) => {
    console.log(error);
});