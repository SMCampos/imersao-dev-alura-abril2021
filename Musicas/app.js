var campoMusica;
var link; 
var mensagem = document.querySelector('.mensagem');

  function adicionarMusica(){
    var musica = document.querySelector("#musica");
    campoMusica = musica.value;
    campoMusica.value = "";
    
    function validaMusica(){

        if (campoMusica == ""){
            (mensagem.innerHTML = "Vida longa ao Rock'n Roll"); {link = ""}
        }else if(campoMusica == "Back in Black"){(mensagem.innerHTML = "Boa escolha!")
            return link = "https://www.youtube.com/embed/pAgnJDJN4VA"
        } else if(campoMusica == "Highway to Hell") {(mensagem.innerHTML = "Boa escolha!")
            return link = "https://www.youtube.com/embed/gEPmA3USJdI"
        } else if(campoMusica == "Thunderstruck") {(mensagem.innerHTML = "Boa escolha!")
           
        }
    }  
        validaMusica ();
        listarMusicaNaTela(link);
  }


function listarMusicaNaTela(musica){
    var elementoMusica = `<iframe width="727" height="409" src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    listaMusica.innerHTML = elementoMusica 
  }
    
 
  function catalago(){
   modal.style.display = "block"; 
  } 
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
  modal.style.display = "none";
  }


  window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  }