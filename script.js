function generateStylesheet(){
    let styles = `
        #etchASketchHolder {
            background-color:  gray;
            border: 1px solid blue;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 40%;
            height: 40%;
            justify-content: center;
        }

        .block {
            width: 40px;
            height: 40px;
            border: 1px solid red;
            display: inline-block;
        }

        }`

    let styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
}

generateStylesheet()

const etchASketchHolder = document.createElement("div")
etchASketchHolder.setAttribute('id','etchASketchHolder')
document.body.appendChild(etchASketchHolder)

let count=20 // this number will become var that will change as user sets it

for (let i = 0; i < count+1; i++) {
    let block = document.createElement("div");
    block.setAttribute('class', 'block')
    block.innerHTML = i;
    etchASketchHolder.appendChild(block)
}
"https://jsfiddle.net/hQKy9/"
