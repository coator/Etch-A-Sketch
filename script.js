"use strict"
function generateCSS(){
    let styles = `

        body {
            background-color: #333;
        }
        a:link {
           color: BlueViolet;
        }

        a:visited {
            color: RebeccaPurple;
        }

        a:hover {
            color: DarkViolet;
        }

        a:active {
            color: GreenYellow;
        }

        #bodyHolder {
            display:flex;
            flex-direction: row;
            padding-top: 5px;
            padding-left: 50px;
        }

        #sideBarHolder {
            margin-top: 0px;
            min-width:300px;
            height:400px;
            border: 10px solid #111111;
            background-color: #252525;
            color: #898989;
            font: 24px Arial, sans-serif;
            padding: 30px 15px 15px 5px;
        }

        #rightBodyHolder {
            margin-left: 100px;
            background-color: #000;
            width: 960px;
            height: 670px;
            font-family: Arial, Helvetica, sans-serif;}
        }

        #etchASketchHolder{
            background-color: #222222;
        }

        .row {
            height: 100%;
            width: 100%;
        }

        .block {
            background-color: black;
            display: inline-block;
            transition: background-color 2s, color 2s;
            }    
        
        .block:hover{
            background-color:#000;
            color:#fff;
            transition: background-color 2s, color 2s;
            }
            

        .slider { 
            -webkit-appearance: none;  /* Override default CSS styles */
            appearance: none;
            width: 101%; /* Full-width */
            height: 25px; /* Specified height */
            background: #777; /* Grey background */
            outline: none; /* Remove outline */
            opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
            -webkit-transition: .2s; /* 0.2 seconds transition on hover */
            transition: opacity .2s;
        }
        
        /* Mouse-over effects */
        .slider:hover {
        opacity: 1; /* Fully shown on mouse-over */
        }
        
        /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
        .slider::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        width: 25px; /* Set a specific slider handle width */
        height: 25px; /* Slider handle height */
        background: #444; /* Green background */
        cursor: pointer; /* Cursor on hover */
        }
        
        .slider::-moz-range-thumb {
        width: 25px; /* Set a specific slider handle width */
        height: 25px; /* Slider handle height */
        background: #444; /* Green background */
        cursor: pointer; /* Cursor on hover */
        }

        .btn {
            border: 3px solid DimGrey;
            background-color: #222;
            color:#999;
            text-align:center;
            display:inline-block;
            margin:4px 2px;
            font-size:18px;
            border-radius: 6px;
            transition: .2s
        }

        .btn:hover{
            background-color: DimGrey;
            color: #222;
            border: 3px dashed #222;
            border-radius: 6px;
        }

    }`

    let styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
}


function initializeGrid(blockAmount){
    //Procedure used to clear out old block layout
    const parent = document.getElementById('etchASketchHolder') 
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);}
    // start procedure to append new blocks
    function returnDecimal(a,b){
        // returns number with last two decimal places 
        return (Math.round((a/b)*100))/100;}
    const gridHeight = 625;
    const gridWidth = 960;
    let squareSize = returnDecimal(gridHeight,blockAmount);
    console.log(squareSize)
    // rowWidth subtracts remainder of blockLength that does not fit in a column from the total column size 
   // const rowWidth = gridWidth-returnRemainderDec(gridWidth,blockAmount);
    //console.log('a block of '+squareSize+' with rows of '+rowWidth+' pixels can fit '+rowWidth/squareSize+' blocks. the remainder block is '+rowWidth%squareSize)
    let blockSizeHTMLAttr = squareSize+'px';
    let rowsPerGrid = returnDecimal(gridHeight,squareSize);
    let blocksPerRow = returnDecimal(gridWidth,squareSize);
    for (let i=0; i <= rowsPerGrid; i++){
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        row.setAttribute('style',`height: ${blockSizeHTMLAttr}`);
        etchASketchHolder.appendChild(row);
        for (let j=1; j < blocksPerRow; j++){
            let block = document.createElement("div");  
            block.addEventListener("mouseover", function() {changeColor(block, blockSizeHTMLAttr)});
            block.setAttribute('class','block');
            block.setAttribute('style','height: '+blockSizeHTMLAttr+
                               ';width:'+ blockSizeHTMLAttr);
            row.appendChild(block);
            //console.log(rowWidth +' estimated squares; '+ j +' actual squares')
        }
    }
}    

function generateGrid(newValue){
    console.log('confirm')
    let sizeObj = [5,15,25,35,48,55,65,75,85,95,100];
    let gridLayout = sizeObj[newValue];
    initializeGrid(gridLayout)
}

function changeColor(obj, size){ 
    // generates the hexidecimal six color string for the random color
    function rndHexGenerator(){
        let colorStr = '0123456789ABCDEF';
        let randColor = '#'
        for (let i = 0; i < 6; ++i) randColor = randColor + colorStr[Math.round(Math.random()*15)]
        return randColor
        }
    obj.setAttribute('style', `background-color: ${rndHexGenerator()};
                    height: ${size};
                    width: ${size}`)
}


function insertSlideBar(divParent){ // sliderbar allows adjustment of the grid size
    const slideBar =  document.createElement('input');
    // initialize slide bar
    let values= {class:'slider',
                id:'blockSizeRange',
                type:'range',
                min:'1',
                max:'10'};     
    for (const key in values){
        slideBar.setAttribute(`${key}`,`${values[key]}`)}
    divParent.appendChild(slideBar)

    // initialize slide bar reset button
    const slideBarReset = document.createElement('a')
    values = {href:'' , id:'slideBarReset'}
    for (const key in values){
        slideBarReset.setAttribute(`${key}`,`${values[key]}`)}
    divParent.appendChild(slideBarReset)

    let sliderVar = document.getElementById('blockSizeRange');
    slideBar.addEventListener('click', function() {
        generateGrid(sliderVar.value)
    })
}

function addButtons(){
    const welcomeMsg = document.createElement('div');
    welcomeMsg.innerText = 'Welcome to the EtchASketch!'
    sideBarHolder.appendChild(welcomeMsg)

    const resetBtn = document.createElement('button');
    resetBtn.setAttribute('class','btn');
resetBtn.textContent = 'Reset';
    sideBarHolder.appendChild(resetBtn);
    resetBtn.onclick = () => generateGrid(10)

    const lineBreak = document.createElement('br');
    sideBarHolder.appendChild(lineBreak);

    function customGrid(){
        let num = prompt('how many blocks per side? (numbers less than 10 tend to do funky things)');
        num = Number(num)
        if ( typeof(num) == 'number' && num <= 100 ){
            console.log('y')
            initializeGrid(num)}
        else{
            return}
        }

    const customBtn = document.createElement('button');
    customBtn.setAttribute('class','btn');
    customBtn.textContent = 'Custom';
    sideBarHolder.appendChild(customBtn);
    customBtn.onclick = () =>  customGrid();
    return
}


function createLayout(){ // generates bodyHolder (holds sidebar and rightBodyHolder grid) as well as sideBarHolder and rightBodyHolder
    const bodyHolder= document.createElement('div');
    bodyHolder.setAttribute('id', 'bodyHolder');
    document.body.appendChild(bodyHolder)

    const sideBarHolder = document.createElement('div');
    sideBarHolder.setAttribute('id', 'sideBarHolder');
    document.body.appendChild(sideBarHolder)

    const rightBodyHolder = document.createElement('div');
    rightBodyHolder.setAttribute('id','rightBodyHolder');
    document.body.appendChild(rightBodyHolder)

    const etchASketchHolder = document.createElement('div');
    etchASketchHolder.setAttribute('id','etchASketchHolder')
    etchASketchHolder.setAttribute('style','height: 626px');
    rightBodyHolder.appendChild(etchASketchHolder)

    bodyHolder.appendChild(sideBarHolder)
    insertSlideBar(sideBarHolder)
    bodyHolder.appendChild(rightBodyHolder)
    addButtons()
}

generateCSS();
createLayout();
initializeGrid(100)