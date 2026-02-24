console.log("Hello Dhurv Modi is here")
console.log("Hello Dhurv Modi was here")

document.getElementById("red").style.backgroundColor = "yellow"

setTimeout(() => {
    console.log("Dhruv is in timeout")
}), 2000

setTimeout(() => {
    console.log("Dhruv is in timeout this is second")
}), 2000
// This is asynchornous nature where timeout is executed afterwards

console.log("Hello Dhurv Modi will be here")


const callback = (arg) => {
    console.log("This is main callback function")
}


const loadscript = (src, callback) => {
    // console.log("Hello callback, this is callback 1 ")
    let sc=document.createElement("script")
    sc.src=src
    sc.onload=callback("Dhruv is in callback")
    document.head.append(sc)
}

loadscript("https://www.google.com",callback)