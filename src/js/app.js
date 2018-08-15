const inputText= document.querySelector("input");
const listaImagenes= document.getElementById("listaImagenes");



inputText.addEventListener("keypress", (event)=> {
  let key= event.which || event.keyCode;
  if(key ===13){
    let imagenes=inputText.value;
    console.log(imagenes)
    inputText.value= ""; 

    fetch(`https://pixabay.com/api/?key=9828833-9a15a3dc938016b93df55afe1&q=${imagenes}&image_type=photo`)
      .then(response => response.json()) 
      .then(datos =>{ 
        console.log(datos);
        renderInfo(datos);
      })
  }
})

const renderInfo = datos => {
  listaImagenes.innerHTML = "";
  datos.hits.forEach((imagen) => {
    listaImagenes.innerHTML += `<div class="imagenes">
    <img src=${imagen.webformatURL} id="imagen">
    <h5>Título: Pixabay</h5>
    <p id="likes">Likes: ${imagen.likes}</p>
    <p id="usuario">Usuario: ${imagen.user}</p>
    </div>`    
  })
} 
