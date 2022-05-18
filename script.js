// adds stylesheet fom var styles
function generateStylesheet(){
    let styles = `

        body {
            background-color: #ffffff;
        }

        #bodyHolder {
            display:flex;
            flex-direction: row;
            padding-top: 25px;
            padding-left: 50px;
        }

        #sideBarHolder {
            margin-left: 10%;
            margin-right: -5%;
            margin-top: 0px;
            width: 300px;
            height:400px;
            border: 10px solid #111111;
            background-color: #252525;
            color: #898989;
            font: 24px Arial, sans-serif;
            padding: 15px 15px 15px 5px;
        }

        #etchASketchHolder {
            margin: 0 auto;
            background-color: #111111;
            border: 1px solid black;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 960px;
            height: 60%;
            padding: 15px;
            font-family: Arial, Helvetica, sans-serif;
            
        }

        .block {
            background-color: black;
            width: 48px;
            height: 48px;
            border: 1px solid black;
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

// generates the hexidecimal six color string for the random color
function rndHexGenerator(){
    colorStr = '0123456789ABCDEF';
    let randColor = '#'
    for (let i = 0; i < 6; ++i) randColor = randColor + colorStr[Math.round(Math.random()*15)]
    return randColor
    }

// creates initial 285 15x19 grid
function generateStartGrid(){
    function changeColor(obj){
        // math to help determine waht color should be
        obj.setAttribute('style', `background-color: ${rndHexGenerator()}`)} 
    const gridLayout = 285;
    for (let i = 0; i < gridLayout; i++) {
        let block = document.createElement("div");
        block.setAttribute('class', 'block');
        block.addEventListener("mouseover", function() {
            changeColor(block)})
        etchASketchHolder.appendChild(block);
    }
}

// sliderbar allows adjustment of the grid size
function insertSlideBar(divParent){
    const slideBar =  document.createElement('input');
    slideBar.setAttribute('class', 'slider');
    slideBar.setAttribute('id', 'myRange');
    slideBar.setAttribute('type','range');
    slideBar.setAttribute('min','1');
    slideBar.setAttribute('max','100');
    slideBar.innerHTML = "<a href=''>reset</a> <br />";
    divParent.appendChild(slideBar)
    let slider = document.getElementById('myRange');
    slideBar.addEventListener('click', function() {
        console.log(slider.value)
    })
}

// generates bodyHolder (holds sidebar and etchASketch grid) as well as sideBarHolder and etchASketch
function createLayout(){
    const bodyHolder= document.createElement('div');
    bodyHolder.setAttribute('id', 'bodyHolder');
    document.body.appendChild(bodyHolder)

    const sideBarHolder = document.createElement('div');
    sideBarHolder.setAttribute('id', 'sideBarHolder');
    document.body.appendChild(sideBarHolder)

    const links = document.createElement('span')

    const etchASketchHolder = document.createElement("div");
    etchASketchHolder.setAttribute('id','etchASketchHolder');
    document.body.appendChild(etchASketchHolder)

    bodyHolder.appendChild(sideBarHolder)
    insertSlideBar(sideBarHolder)
    bodyHolder.appendChild(etchASketchHolder)
}

generateStylesheet();
createLayout()
generateStartGrid();