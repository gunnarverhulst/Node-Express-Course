// GLOBALS          - NO WINDOW !!!!

// __dirname        - path to current directory
// __filename       - file name
// require          - functions to use modules (CommonJS)
// module           - info about current module (file)
// process          - info about env where the program is being exeuted

console.log(__filename);

setInterval(() => {
    console.log('hello')
},1000);