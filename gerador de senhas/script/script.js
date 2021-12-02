const display = document.querySelector("input");
 button = document.querySelector("button");
 copyBtn = document.querySelector("span.far");
 copyActive = document.querySelector("span.fas");

 let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

button.onclick = ()=>{

let i;

senhagerada="";

for(i = 0; i < 16; i++){

senhagerada = senhagerada + chars.charAt(Math.floor(Math.random() * chars.length));

}

display.value = senhagerada;

}

copyBtn.onclick= copiar;
copyActive.onclick = copiar;

function copiar (){

let textocopiado = display;
textocopiado.select();
document.execCommand("copy")

}