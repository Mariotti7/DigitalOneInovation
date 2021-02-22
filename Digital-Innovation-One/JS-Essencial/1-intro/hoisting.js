// hoisting de variaveis - BOA PRATICA É DECLARAR ANTES

function fn() {
  console.log(text); // variavel existe mas ainda nao foi definida == undefined / não retorna referencial error

  var text = "Leprechal";

  console.log(text);
}

fn()

// Hoisting de função é possível içar a função antes de declarar

function fuc(){
    log('Hoisting de função') // função içada

    function log(value){ // função declarada
        console.log(value)
    }
}

fuc()