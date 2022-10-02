//Menu
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

//tema
function mudarTema() {
 document.body.classList.toggle("dark");
}

//Validar formulário
document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario() {
  var valorDoInputNome = document.getElementById("nome").value;
  console.log(valorDoInputNome)
  var valorDoInputEmail = document.getElementById("email").value;

  if(valorDoInputNome != "" && valorDoInputEmail !="") {
    alert("Prontinho! Você receberá as novidades por email")
  } else {
    alert("Por favor, preencha os campos nome e email!")
  }
}


//API ScrollReveal

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home,
            #home img, 
            #home .stats, 
            #infancia,
            #infancia header,
            #infancia .content,
            #infancia img,
            #juventude,
            #juventude header,
            #juventude img,
            #juventude .content,
            #vida-adulta,
            #vida-adulta header,
            #vida-adulta .content,
            #vida-adulta img
            #novidades,
            #novidades header,
            #novidades .content,
            footer`);
