const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const animate = window.requestAnimationFrame;
const W_KEY = 87
const A_KEY = 65
const D_KEY = 68
const S_KEY = 83

let game, player;