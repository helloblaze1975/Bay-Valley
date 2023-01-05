const source = document.querySelectorAll(".source");
const target = document.querySelectorAll(".target");
for (let i =0; i < source.length; i++){
source[i].addEventListener('dragstart',(e)=>{
 console.log(e);
 e.dataTransfer.setData('text/plain',e.target.id);
 e.target.style.opacity = 0.3;
})
source[i].addEventListener("dragend",(e)=>{
    e.target.style.opacity = 1;
});


target[i].addEventListener('dragover',(e)=>{
    e.preventDefault();
})
target[i].addEventListener('dragenter',(e)=>{
    e.target.style.background = "#eee";
})

target[i].addEventListener('dragleave',(e)=>{
    e.target.style.background = ""
})
target[i].addEventListener("drop",(e)=>{
    e.preventDefault();
    const sourceID = e.dataTransfer.getData('text/plain');
    console.log(sourceID);
    e.target.appendChild(document.getElementById(sourceID))
    e.target.style.background = ""
})
}