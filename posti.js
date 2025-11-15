const gallery = document.getElementById("gallery");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

next.addEventListener("click", () => {
    gallery.scrollLeft += 420;
});

prev.addEventListener("click", () => {
    gallery.scrollLeft -= 420;
});



// function cadastrar(tipo) {
//   // Redireciona para a página de cadastro com o tipo como parâmetro
//   window.location.href = `cadastro.html?tipo=${tipo}`;