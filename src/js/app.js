$('#exampleModalCenter').on('show.bs.modal', function (event) {
  var card = $(event.relatedTarget) 
  var imagenUrl = card.data("img") 
  var likesUrl= card.data("likes")
  var userUrl= card.data("user")
  var modal = $(this)
  modal.find(".modal-imagen").attr("src", imagenUrl)
  modal.find(".modal-likes").text("Likes: " + likesUrl)
  modal.find(".modal-user").text("Usuario: " + userUrl)
})


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
    listaImagenes.innerHTML += `<div class="imagenes" data-toggle="modal" data-target="#exampleModalCenter" data-img=${imagen.webformatURL} data-likes=${imagen.likes} data-user=${imagen.user}>
    <img src=${imagen.webformatURL} class="imagen">
    <h5>Título: Pixabay</h5>
    <h6 class="likes">Likes: ${imagen.likes}</h6>
    <p class="usuario">Usuario: ${imagen.user}</p>
    </div>`    
  })
} 
