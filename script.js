
function generateCSS(){
    let styles = `

        body {
            background-color: #ffffff;
        }

        #bodyHolder {
            display:flex;
            flex-direction: row;
            padding-top: 15px;
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
            display: border-box;
            background-color: #111111;
            border-left: 1px solid black;
            border-top: 1px solid black;
            border-right: 1px solid black;
            width: 960px;
            height: 626px;
            font-family: Arial, Helvetica, sans-serif;}
        }

        #etchASketchHolder{
            display: flex;
            width:100%;
            height:100%;
        }

        .row {
            height: 100%;
            width: 100%
        }

        .block {
            background-color: black;
            display: inline-block;
            transition: background-color 2s, color 2s;
            }    

        .invisible {
            width: 54px;
            height: 54px;
            display: inline-block;
            background-color: gray;
            }
        
        .block:hover{
            background-color:#000;
            color:#fff;
            transition: background-color 2s, color 2s;
            }
            
        /* The slider itself */
        .slider {
        -webkit-appearance: none;  /* Override default CSS styles */
        appearance: none;
        width: 101%; /* Full-width */
        height: 25px; /* Specified height */
        background: #d3d3d3; /* Grey background */
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
        background: #04AA6D; /* Green background */
        cursor: pointer; /* Cursor on hover */
        }
        
        .slider::-moz-range-thumb {
        width: 25px; /* Set a specific slider handle width */
        height: 25px; /* Slider handle height */
        background: #04AA6D; /* Green background */
        cursor: pointer; /* Cursor on hover */
        }
    }`

    let styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
}

function changeColor(obj, size){  // math to help determine waht color should be
    // generates the hexidecimal six color string for the random color
    function rndHexGenerator(){
        colorStr = '0123456789ABCDEF';
        let randColor = '#'
        for (let i = 0; i < 6; ++i) randColor = randColor + colorStr[Math.round(Math.random()*15)]
        return randColor
        }
    obj.setAttribute('style', `background-color: ${rndHexGenerator()};
                    height: ${blockSizeHTMLAttr};
                    width: ${blockSizeHTMLAttr}`)
}


// reworking to change blockPixelSize variable to take Number of blocks in a row.
// need to calculate blocks in square based on amount of blocks in a single row.
function initializeStartGridWithRows(blockAmount){
    const gridHeight = 625;
    const gridWidth = 960;
    blockSideLength = (Math.floor(gridHeight/blockAmount))
    // rowWidth subtracts remainder of block that does not fit in column from total column size 
    const rowWidth = 960-Math.round((gridHeight/blockAmount-blockSideLength)*960)
    console.log(rowWidth)
    blockSizeHTMLAttr = blockSideLength+'px'
    let rowsPerGrid = Math.floor(gridHeight/blockSideLength);
    let blocksPerRow = Math.floor(gridWidth/blockSideLength);
    for (let i=0; i < rowsPerGrid; i++){
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        row.setAttribute('style',`height: ${blockSizeHTMLAttr}
                        ; width: ${rowWidth}px`);
        etchASketchHolder.appendChild(row);
        for (let j=0; j < blocksPerRow; j++){
            let block = document.createElement("div");  
            block.addEventListener("mouseover", function() {changeColor(block, blockSizeHTMLAttr)});
            block.setAttribute('class','block');
            block.setAttribute('style','height: '+blockSizeHTMLAttr+
                               ';width:'+ blockSizeHTMLAttr);
            row.appendChild(block);
        }
    }
}    

function generateGrid(newValue){
    let gridLayout = 285;
    let sizeObj = [36,48,64,81,100,121,144,169,225,256];
    gridLayout = sizeObj[newValue];
    //Procedure used to clear out old block layout
    const parent = document.getElementById('etchASketchHolder') 
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);}
    // end procedure
    // start procedure to append new blocks
    for (let i = 0; i < gridLayout; i++) {
        let block = document.createElement("div");  
        block.addEventListener("mouseover", function() {changeColor(block)});
        block.setAttribute('class','block');
        etchASketchHolder.appendChild(block); }
}


function insertSlideBar(divParent){ // sliderbar allows adjustment of the grid size
    const slideBar =  document.createElement('input');
    let values= {class:'slider',
                id:'myRange',
                type:'range',
                min:'1',
                max:'10'};     
    for (const key in values){
        slideBar.setAttribute(`${key}`,`${values[key]}`)}
    const slideBarReset = document.createElement('a')
    values = {href:'' , id:'slideBarReset'}
    for (const key in values){
        slideBarReset.setAttribute(`${key}`,`${values[key]}`)}
    slideBarReset.innerHTML='reset'
    divParent.appendChild(slideBar)
    divParent.appendChild(slideBarReset)

    let slider = document.getElementById('myRange');

    slideBar.addEventListener('click', function() {
        generateGrid(slider.value)
    })
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
    rightBodyHolder.appendChild(etchASketchHolder)

    bodyHolder.appendChild(sideBarHolder)
    insertSlideBar(sideBarHolder)
    bodyHolder.appendChild(rightBodyHolder)
}

generateCSS();
createLayout();
initializeStartGridWithRows(48)