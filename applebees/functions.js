const dp = console.log
const $ = document.querySelector.bind(document);
const rnd = function(min, max) {return Math.round(Math.random() * (max - min) + min)};
const rnda = function(arr) {return arr[rnd(0, arr.length-1)]};
const btw = (a, b, c)=>{return (a>=b) && (c>=a)}