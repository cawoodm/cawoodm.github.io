const dp = console.log
const $ = document.querySelector.bind(document);
const rnd = function(min, max) {return Math.round(Math.random() * (max - min) + min)};
const rnda = function(arr) {return arr[rnd(0, arr.length-1)]};
const btw = (a, b, c)=>{return (a>=b) && (c>=a)}
const Vector = {
    norm: (vec)=>{let m = Vector.mag(vec);return {x: vec.x/m, y: vec.y/m}},
    mag: (vec)=>{return Math.sqrt(Math.pow(vec.x, 2)+Math.pow(vec.y, 2))},
    subtract: (v1, v2)=>{return {x: v1.x-v2.x, y: v1.y-v2.y}},
    right: ()=>{return {x: 1, y: 0}},
    left: ()=>{return {x: -1, y: 0}},
    up: ()=>{return {x: 0, y: -1}},
    down: ()=>{return {x: 0, y: 1}}
}