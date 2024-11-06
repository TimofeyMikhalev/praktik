import { sum, substract, division } from "./math.js";
import { Model } from './model.js'


const aInputNode = document.querySelector('#a')
const bInputNode = document.querySelector('#b')
const resBtntNode = document.querySelector('#result-btn')
const outputtNode = document.querySelector('#output')

const model = new Model();

resBtntNode.addEventListener('click', () => {
    const a = parseInt(aInputNode.value)
    const b = parseInt(bInputNode.value)

    outputtNode.innerText = substract(a, b)

    console.log(model.getTodos())
})