#!/usr/bin/env node

var fs = require('fs')
var dirName = process.argv[2] // 你传的参数是从第 2 个开始的

if (fs.existsSync(dirName)) {
    console.log("directory exist!")
    process.exit(1)

} else {
    fs.mkdirSync("./" + dirName)
    process.chdir("./" + dirName)
    fs.mkdirSync('css')
    fs.mkdirSync('js')

    var index = `
 <!DOCTYPE>
<title>Hello</title>
<h1>Hi</h1>`
    var css = `h1{color: red;}`
    var main_js = `
var string = "Hello World"
alert(string)
`
    fs.writeFileSync("./index.html", index)
    fs.writeFileSync("css/style.css", css)
    fs.writeFileSync("./js/main.js", main_js)

    process.exit(0)
}