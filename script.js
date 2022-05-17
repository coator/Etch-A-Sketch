// https://www.youtube.com/watch?v=-5KAN9_CzSA
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
            border: 2px solid black;
            background-color: #252525;
            color: #898989;
            font: 24px Arial, sans-serif;
            padding: 15px 0px 15px 5px;
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

        .slideContainer {
            width: 100%;
            }

        .slider {
            -webkit-appearance: none; /* overrides default appearance*/
            appearance: none;
            width: 100%;
            height: 25px;
            background: #333333;
            outline: none;
            opacity: 0.7;
            -webkit-transistion: .2s;
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

function rndHexGenerator(){
    colorStr = '0123456789ABCDEF';
    let randColor = '#'
    for (let i = 0; i < 6; ++i) randColor = randColor + colorStr[Math.round(Math.random()*15)]
    return randColor}

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


const bodyHolder= document.createElement('div');
bodyHolder.setAttribute('id', 'bodyHolder');
document.body.appendChild(bodyHolder)

const sideBarHolder = document.createElement('div');
sideBarHolder.setAttribute('id', 'sideBarHolder');
document.body.appendChild(sideBarHolder)

const links = document.createElement('span')
const squareSlideBar =  document.createElement('squareSlideBar')
links.innerHTML = '<td><b>cats are not food</b></td>'
sideBarHolder.appendChild(links)
var slider = document.getElementById(squareSlideBar);
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
} 
sideBarHolder.innerHTML = "<a href=''>reset</a> <br /> <input type='range' min='1' max='100' value='50' class='slider' id='squareRange'>"

const etchASketchHolder = document.createElement("div");
etchASketchHolder.setAttribute('id','etchASketchHolder');
document.body.appendChild(etchASketchHolder)

bodyHolder.appendChild(sideBarHolder)
bodyHolder.appendChild(etchASketchHolder)

generateStylesheet();
generateStartGrid();