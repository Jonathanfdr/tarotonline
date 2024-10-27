
let request = {
    "baralho": "",
    "tipoTiragem": "",
    "aspecto": "",
    "informaCartas": false,
    "cartasSelecionadas":[]
}

function showCardsSelect(prefix, cards) {
    for(var i in cards) {
        $("#"+prefix+cards[i]).fadeIn(0);
    }
}

function sorteiaCartas(quantidade) {
    var max = request.baralho=='waiteSmith'?waiteSmith.length:cigano.length;
    
    for(var i=0;i<quantidade;i++) {
      var sorteado = Math.floor(Math.random() * max);
      while (request.cartasSelecionadas.includes(sorteado)){
        sorteado = Math.floor(Math.random() * max);     
      }
      request.cartasSelecionadas.push(sorteado);
    }
    console.log(request.cartasSelecionadas);
}

$(document).ready(function() {
    let perguntaAtual = 1;
    let baralho = "";
  
    function mostrarProximaPergunta() {
      $(`#pergunta${perguntaAtual}`).fadeOut(400, function() {
        perguntaAtual++;
        if (perguntaAtual <= 4) {
          $(`#pergunta${perguntaAtual}`).fadeIn(400);
        } else {
          $("#perguntas").fadeOut(200, function() {

            if(request.informaCartas) {
                let prefix = request.baralho=='waiteSmith'?'ws':'ci';
                switch(request.tipoTiragem) {
                    case 'umaCarta':
                        showCardsSelect(prefix, ["01"]);
                        break;
                    case 'tresCartas':
                        showCardsSelect(prefix, ["00", "01", "02"]);
                        break;
                    case 'cincoCartas':
                        showCardsSelect(prefix, ["00", "01", "02", "10", "11"]);
                        break;
                    case 'noveCartas':
                        showCardsSelect(prefix, ["00", "01", "02", "10", "11", "12", "20","21","22"]);
                        break;
                }

                $("#tiragemManual").fadeIn(200);
            } else {
                switch(request.tipoTiragem) {
                    case 'umaCarta':
                        sorteiaCartas(1);
                        break;
                    case 'tresCartas':
                        sorteiaCartas(3);
                        break;
                    case 'cincoCartas':
                        sorteiaCartas(5);
                        break;
                    case 'noveCartas':
                        sorteiaCartas(9);
                        break;
                }
                mostraResultado();
            }

          });
        }
      });
    }
  
    $("#pergunta1 .opcoes button").click(function() {
      baralho = $(this).data("resposta");
      if (baralho === "Waite-Smith") {
        request.baralho="waiteSmith";
        $("#opcoesTiragem").html(`
          <button class="btn btn-outline-primary btn-lg m-2" onClick='request.tipoTiragem="umaCarta";'>Uma carta</button>
          <button class="btn btn-outline-primary btn-lg m-2" onClick='request.tipoTiragem="tresCartas";'>Três cartas</button>
        `);
      } else if (baralho === "Cigano") {
        request.baralho="cigano";
        $("#opcoesTiragem").html(`
          <button class="btn btn-outline-primary btn-lg m-2" onClick='request.tipoTiragem="umaCarta"'>Uma carta</button>
          <button class="btn btn-outline-primary btn-lg m-2" onClick='request.tipoTiragem="tresCartas"'>Três cartas</button>
          <button class="btn btn-outline-primary btn-lg m-2" onClick='request.tipoTiragem="cincoCartas"'>Cinco cartas</button>
          <button class="btn btn-outline-primary btn-lg m-2" onClick='request.tipoTiragem="noveCartas"'>Nove cartas/Quadrado Mágico</button>
        `);
      }
      mostrarProximaPergunta();
    });
  
    $(document).on("click", "#pergunta2 .opcoes button", function() {
      mostrarProximaPergunta();
    });
  
    $("#pergunta3 .opcoes button, #pergunta4 .opcoes button").click(function() {
      mostrarProximaPergunta();
    });
  });
  
  function enviar() {

    var values = request.baralho=='waiteSmith'?getSelectValues('waiteSmith'):getSelectValues('cigano');
    
    for (var i in values) {
        if(values[i]!=-1) {
            request.cartasSelecionadas.push(values[i]);
        }
    }

    $("#tiragemManual").fadeOut(200, function() {
        mostraResultado();
    });
  }

function mostraResultado() {
    switch(request.tipoTiragem) {
        case 'umaCarta':
            $("#t01").html(montaImagem(request.cartasSelecionadas[0]));
            break;
        case 'tresCartas':
            $("#t00").html(montaImagem(request.cartasSelecionadas[0]));
            $("#t01").html(montaImagem(request.cartasSelecionadas[1]));
            $("#t02").html(montaImagem(request.cartasSelecionadas[2]));
            break;
        case 'cincoCartas':
            $("#t00").html(montaImagem(request.cartasSelecionadas[0]));
            $("#t01").html(montaImagem(request.cartasSelecionadas[1]));
            $("#t02").html(montaImagem(request.cartasSelecionadas[2]));
            $("#t10").html(montaImagem(request.cartasSelecionadas[3]));
            $("#t11").html(montaImagem(request.cartasSelecionadas[4]));
            break;
        case 'noveCartas':
            $("#t00").html(montaImagem(request.cartasSelecionadas[0]));
            $("#t01").html(montaImagem(request.cartasSelecionadas[1]));
            $("#t02").html(montaImagem(request.cartasSelecionadas[2]));
            $("#t10").html(montaImagem(request.cartasSelecionadas[3]));
            $("#t11").html(montaImagem(request.cartasSelecionadas[4]));
            $("#t12").html(montaImagem(request.cartasSelecionadas[5]));
            $("#t20").html(montaImagem(request.cartasSelecionadas[6]));
            $("#t21").html(montaImagem(request.cartasSelecionadas[7]));
            $("#t22").html(montaImagem(request.cartasSelecionadas[8]));
            break;
    }
    
    var deck = request.baralho=='waiteSmith'? waiteSmith: cigano;
    var cartas = [];
    for (var i in request.cartasSelecionadas){
      cartas.push(deck[request.cartasSelecionadas[i]]);
    }

    fazerRequisicao(cartas);
    $("#resultado").fadeIn(200);
}

function fazerRequisicao(cartas) {
  $.ajax({
      url: 'https://boiling-plateau-06313-a27418c15e8f.herokuapp.com/executar',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
          baralho: request.baralho == 'waiteSmith' ? "WAITE_SMITH" : "CIGANO",
          aspecto: request.aspecto,
          cartasSelecionadas: cartas
      }),
      success: function(response) {
          $("#reenviar").fadeOut(0);
          $("#refazer").fadeIn(0);
          $("#interpretacao").html(response);
      },
      error: function(xhr, status, error) {
          console.error("Erro na requisição. Tentando novamente em 1 segundo.");
          setTimeout(fazerRequisicao, 1000); // Tenta novamente após 1 segundo
      }
  });
}

function getSelectValues(className) {
    var selects = document.querySelectorAll(`select.${className}`);
    var values = Array.from(selects).map(select => select.value);
    return values;
}

function montaImagem(valor) {
    var folder = request.baralho=='waiteSmith'?'waite':'cigano';
    var deck = request.baralho=='waiteSmith'? waiteSmith: cigano;
    return "<img src='"+folder+"/"+valor+".jpg' class='cardImage'><p class='cardDesc'>"+deck[valor]+"</p>";
}