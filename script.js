function inserirNome(){
   let nomeUsuario = prompt("Qual o seu nome");
   let elemento = document.querySelector("#nome-usuario");
   console.log(elemento);
   elemento.textContent = nomeUsuario;
}

inserirNome();

let linguagens = ["JavaScript", "Python", "C++"];
console.log (linguagens [0])
console.log (linguagens [1])
console.log (linguagens [2])


const lista = document.querySelector ("#lista");
item.textContent = linguagens[0] + ""-""+ linguagens[1]  +""-"" + linguagens[2];