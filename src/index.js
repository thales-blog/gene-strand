import strand from './component/strand';
console.log(strand)
let camera = document.createElement("div");
camera.classList.add("camera");
let gene = document.createElement("div");
gene.classList.add("gene");
camera.appendChild(gene);
for(let n = 0; n< 10; n++){
  gene.appendChild(strand());
}
document.body.appendChild(camera);