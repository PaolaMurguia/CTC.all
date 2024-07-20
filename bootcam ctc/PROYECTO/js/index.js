const inputNombre = document.querySelector("#input-nombre");

const buttonContinuar = document.querySelector("#continue-categories");

inputNombre.addEventListener("input", function showValue() {
  // console.log(inputNombre.value);

  //guardamos el valor en el navegador
  localStorage.setItem("nombre", inputNombre.value);

  if (inputNombre.value.length >= 3) {
    buttonContinuar.disabled = false;
  }
});

buttonContinuar.addEventListener("click", function goCategories() {
  window.location.href = "http://127.0.0.1:5500/pages/categorias.html";
});


