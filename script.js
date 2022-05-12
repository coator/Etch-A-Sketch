
const blockHolder = document.createElement('mainbody')

document.body.appendChild(blockHolder);

const bb = document.getElementsByTagName('mainBody')

bb.backgroundColor = '#666';
bb.width = '50%';
bb.height = '50%';

let johnMadden = 20;


for (let i = 0; i < johnMadden; i++) {
    let a = document.createElement('mainbody.block'+i)
    blockHolder.textContent = i;
    blockHolder.appendChild(a)
    let aa = document.getElementsByTagName('mainbody.block'+i)
    aa.width = '20px';
    aa.height = '20px';
    console.log(a)
}

