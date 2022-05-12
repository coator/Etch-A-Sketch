function generateStylesheet(){
    let styles = `
        #topHolder{
            border: 1px solid black;
            height: 45px;
            width: 80%;
            display: flex;
            flex-direction: row;
            padding: 5px;
            margin: auto auto;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 16pt;
        }

        .boxLeft {
            width: 30%;
            padding: 8px;
            padding-left:40px;
            left: 0px;
        }

        .boxRight{
            width: 70%;
            padding: 8px;
            padding-left:40px;
            margin-right: 0px;
        }


        #etchASketchHolder {
            margin: 0 auto;
            background-color:  gray;
            border: 1px solid blue;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 960px;
            height: 60%;
            justify-content: center;
            padding: 15px;
            font-family: Arial, Helvetica, sans-serif;
            margin-top: 50px;
            
        }

        .block {
            width: 54px;
            height: 54px;
            border: 1px solid black;
            display: inline-block;
            transition: background-color 2s, color 2s;
            }    

        .invisible {
            width: 60px;
            height: 60px;
            display: inline-block;
            background-color: gray;
            }
        
            .block:hover{
            background-color:#000;
            color:#fff;
            transition: background-color 2s, color 2s;
            }
        }`

    let styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
}

function generateDivTop(){
    const topHolder = document.createElement("div")
    const topHolderLeft = document.createElement("div")
    const topHolderRight = document.createElement("div")
    topHolder.setAttribute('id', 'topHolder')
    topHolderLeft.setAttribute('class', 'boxLeft')
    topHolderRight.setAttribute('class', 'boxRight')
    document.body.appendChild(topHolder)
    topHolderLeft.textContent = 'coator'
    topHolder.appendChild(topHolderLeft)
    topHolderRight.textContent = 'etch-a-sketch'
    topHolder.appendChild(topHolderRight)


}


generateStylesheet()
generateDivTop()

const etchASketchHolder = document.createElement("div")
etchASketchHolder.setAttribute('id','etchASketchHolder')
document.body.appendChild(etchASketchHolder)



function generateStartGrid(){
const gridLayout = 256+16;
    return gridLayout
}


let count=110
count = generateStartGrid()
             // this number will become var that will change as user sets it

for (let i = 0; i < count; i++) {
    let block = document.createElement("div");
    block.setAttribute('class', 'block')
    ii = i%16
    block.innerHTML = i+' '+ii;
    etchASketchHolder.appendChild(block)
    
}

`if (count % 2 == 1){
    iBlock = document.createElement('div')
    iBlock.setAttribute('class', 'invisible')
    etchASketchHolder.appendChild(iBlock)
}`
"https://jsfiddle.net/hQKy9/"
