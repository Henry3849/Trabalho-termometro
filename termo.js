function select() {
  var termoUser = document.getElementById("termoUser").value;
  var termoS = document.getElementById("termoS").value;
  var TempUser = document.getElementById("TempUser").value;

  var Ponto11 = document.getElementById("Ponto11").value;
  var Ponto12 = document.getElementById("Ponto12").value;
  var Ponto21 = document.getElementById("Ponto21").value;
  var Ponto22 = document.getElementById("Ponto22").value;

  //Definição para os pontos pre-cetados
  if (termoUser == 'Celsius') {
      var Ponto11 = 100;
      var Ponto12 = 0;
  }
  if (termoUser == 'Kelvin') {
      var Ponto11 = 373.15;
      var Ponto12 = 273.15;
  }
  if (termoUser == 'Fahrenheit') {
      var Ponto11 = 212;
      var Ponto12 = 32;
  }
  
  if (termoS == 'Celsius') {
      var Ponto21 = 100;
      var Ponto22 = 0;
  }
  if (termoS == 'Kelvin') {
      var Ponto21 = 373.15;
      var Ponto22 = 273.15;
  }
  if (termoS == 'Fahrenheit') {
      var Ponto21 = 212;
      var Ponto22 = 32;
  }
  document.getElementById("Ponto11").value = Ponto11;
  document.getElementById("Ponto12").value = Ponto12;
  document.getElementById("Ponto21").value = Ponto21;
  document.getElementById("Ponto22").value = Ponto22;
}

function contatop() {
  var termoUser = document.getElementById("termoUser").value;
  var termoS = document.getElementById("termoS").value;
  var TempUser = document.getElementById("TempUser").value;

  var Ponto11 = document.getElementById("Ponto11").value;
  var Ponto12 = document.getElementById("Ponto12").value;
  
  var Ponto21 = document.getElementById("Ponto21").value;
  var Ponto22 = document.getElementById("Ponto22").value;

  //Definição de ...
  var LetraU = 'X'
  var LetraS = 'Y'
  
  if (termoUser == 'Celsius') {
      var Ponto11 = 100;
      var Ponto12 = 0;
      var LetraU = 'C'
  }
  if (termoUser == 'Kelvin') {
      var Ponto11 = 373.15;
      var Ponto12 = 273.15;
      var LetraU = 'K'
  }
  if (termoUser == 'Fahrenheit') {
      var Ponto11 = 212;
      var Ponto12 = 32;
      var LetraU = 'F'
  }
  if (termoUser == 'Outras') {
    if(!Ponto11){
      var Ponto11 = 100;
    }
    if(!Ponto12){
      var Ponto12 = 0;
    }
  }

  //Definição para os pontos pre-cetados
  if (termoS == 'Celsius') {
      var Ponto21 = 100;
      var Ponto22 = 0;
      var LetraS = 'C'
  }
  if (termoS == 'Kelvin') {
      var Ponto21 = 373.15;
      var Ponto22 = 273.15;
      var LetraS = 'K'
  }
  if (termoS == 'Fahrenheit') {
      var Ponto21 = 212;
      var Ponto22 = 32;
      var LetraS = 'F'
  }
  if (termoS == 'Outras') {
    if(!Ponto21){
      var Ponto21 = 100;
    }
    if(!Ponto22){
      var Ponto22 = 0;
    }
  }

  //Correção de ambiguidade 
  if(TempUser) {
    if(Ponto11 == Ponto21 && Ponto12 == Ponto22){
      document.getElementById("calculointeiro").style.display = "none";
    } else {
      document.getElementById("calculointeiro").style.display = "block";
    }
  } else {
    document.getElementById("calculointeiro").style.display = "none";
  }

  //Calculos humanos
  document.getElementById("calc-sec1-1-1").innerHTML = LetraU + ' - ' + Ponto12;
  document.getElementById("calc-sec1-1-2").innerHTML = Ponto11 + ' - ' + Ponto12;

  document.getElementById("calc-sec1-2-1").innerHTML = LetraS + ' - ' + Ponto22;
  document.getElementById("calc-sec1-2-2").innerHTML = Ponto21 + ' - ' + Ponto22;

 
  if(Ponto12 > 0){
    var symbol1 = ' + ';
  } else {
    var symbol1 = ' - ';
  }

  if(symbol1 == ' + '){
    var result1 = Ponto11 - Ponto12;
    var symbol1 = ' - ';
  } else {
    var Ponto12 = Ponto12 * -1;
    var result1 = (Ponto11 * 1) + (Ponto12 * 1);
    var symbol1 = ' + ';
  }
  
  document.getElementById("calc-sec2-1-1").innerHTML = LetraU + symbol1 + Ponto12;
  document.getElementById("calc-sec2-1-2").innerHTML = result1;

  if(Ponto22 > 0){
    var symbol2 = ' + ';
  } else {
    var symbol2 = ' - ';
  }

  if(symbol2 == ' + '){
    var result2 = Ponto21 - Ponto22;
    var symbol2 = ' - ';
  } else {
    var result2 = (Ponto21 * 1) + (Ponto22 * 1);
    var symbol2 = ' + ';
  }


  document.getElementById("calc-sec2-2-1").innerHTML = LetraS + symbol2 + Ponto22;
  var result2 = Ponto21 - Ponto22;
  document.getElementById("calc-sec2-2-2").innerHTML = result2;

  //Arredandamento de valores
  var test3 = (result2 * TempUser);
  var test4 = (Ponto22 * result1);  
  var test5 = (Ponto12 * result2);

  var test3 = Math.round(test3 * 100000) / 100000;
  var test4 = Math.round(test4 * 100000) / 100000;
  var test5 = Math.round(test5 * 100000) / 100000;

  var test1 = result1 + '' + LetraS + ' - ' + test4;
  
  document.getElementById("calc-sec3-1").innerHTML = result2 + ' (' + LetraU + symbol1 + Ponto12 + ')';
  document.getElementById("calc-sec3-2").innerHTML = result1 + ' (' + LetraS + ' - ' + Ponto22 + ')';
  
  document.getElementById("calc-sec4-1").innerHTML = result2 + '' + LetraU + symbol1 + test5;
  document.getElementById("calc-sec4-2").innerHTML = test1;

  document.getElementById("calc-sec5-1").innerHTML = result2 + ' × ' + TempUser + symbol1 + test5;
  document.getElementById("calc-sec5-2").innerHTML = test1;
  
  document.getElementById("calc-sec6-1").innerHTML = test3 + symbol1 + test5;
  document.getElementById("calc-sec6-2").innerHTML = test1;

  if (symbol1 == ' - '){
    var test9 = test3 - test5;
    document.getElementById("calc-sec7-1").innerHTML = test9;
  } else {
    var test9 = test3 + test5;
    document.getElementById("calc-sec7-1").innerHTML = test9;
  }
  document.getElementById("calc-sec7-2").innerHTML = test1;

  document.getElementById("calc-sec8-1").innerHTML = test9 + symbol1 + test4;
  document.getElementById("calc-sec8-2").innerHTML = result1 + '' + LetraS;

  if (symbol1 == ' - '){
    document.getElementById("calc-sec9-1").innerHTML = test9 - test4;}
    else {document.getElementById("calc-sec9-1").innerHTML = test9 + test4;}
  document.getElementById("calc-sec9-2").innerHTML = result1 + '' + LetraS;
  
  document.getElementById("calc-sec10-0").innerHTML = LetraS;
  document.getElementById("calc-sec11-0").innerHTML = LetraS;
  
  var finalresult = test9 + test4;
  document.getElementById("calc-sec10-1").innerHTML = finalresult;
  document.getElementById("calc-sec10-2").innerHTML = result1;

  var finalresult = finalresult / result1;
  var finalresult = Math.round(finalresult * 100000) / 100000;
  document.getElementById("calc-sec11-1").innerHTML = finalresult;
}


function section1() {
  var termoUser = document.getElementById("termoUser").value;

  var Ponto11 = document.getElementById("Ponto11").value;
  var Ponto12 = document.getElementById("Ponto12").value;
  
  if (termoUser == 'Outras') {
      var Ponto11 = "";
      var Ponto12 = "";
  }

  document.getElementById("Ponto11").value = Ponto11;
  document.getElementById("Ponto12").value = Ponto12;
}

function section2() {
  var termoS = document.getElementById("termoS").value;
  var Ponto21 = document.getElementById("Ponto21").value;
  var Ponto22 = document.getElementById("Ponto22").value;

  if (termoS == 'Outras') {
      var Ponto21 = "";
      var Ponto22 = "";
  }

  document.getElementById("Ponto21").value = Ponto21;
  document.getElementById("Ponto22").value = Ponto22;
}

// Função de calcular direto.
function calc() {  
  // Variaveis.
  var termoUser = document.getElementById("termoUser").value;
  var termoS = document.getElementById("termoS").value;
        
  var TempUser = document.getElementById("TempUser").value;
        
  var amount = TempUser;
  var amount = parseFloat(amount, 10);

  //Celsius para ...
  //para Kelvin:
    if (termoUser == 'Celsius' && termoS == 'Kelvin') {
      var total = amount + 273.15;
    }
  //para Fahrenheit:
    if (termoUser == 'Celsius' && termoS == 'Fahrenheit') {
      var total = ((amount * 9) /5) + 32;
    }
  
  //Kelvin para ...
  //para Celsius:
    if (termoUser == 'Kelvin' && termoS == 'Celsius') {
      var total = amount - 273.15;
    }
  //para Fahrenheit:
    if (termoUser == 'Kelvin' && termoS == 'Fahrenheit') {
      var total = (((amount - 273.15) * 9) /5) + 32;
    }

  //Fahrenheit para ...
  //para Celsius:
    if (termoUser == 'Fahrenheit' && termoS == 'Celsius') {
      var total = ((amount - 32) * 5/9).toFixed(5);
    }
  //para Kelvin:
    if (termoUser == 'Fahrenheit' && termoS == 'Kelvin') {
      var total = ((amount - 32 ) * 5/9) + 273.15;
    }


    //Se opções foram a mesma.
    if (termoUser == termoS && termoUser != "Outras"){
      var total = TempUser;
    }
  
    // escrever total -v
    var total = Math.round(total * 100000) / 100000;
    document.getElementById("result").value = total;

    if (termoUser == "Outras" || termoS == "Outras"){
    var display = "block";
    }
    if (termoUser != "Outras" && termoS != "Outras"){
      var display = "none";
    }
    document.getElementById("Ponto1").style.display = display;
    document.getElementById("Ponto2").style.display = display;
}


// Função trocar areas do formulario.
function swap() {
  var termoUser = document.getElementById("termoUser").value;
  var termoS = document.getElementById("termoS").value;
        
  var TempUser = document.getElementById("TempUser").value;
  var result = document.getElementById("result").value;

  document.getElementById("TempUser").value = result;
  document.getElementById("result").value = TempUser;
  document.querySelector('#termoUser').value = termoS;
  document.querySelector('#termoS').value = termoUser;
  

  if (termoUser == 'Outras' || termoS == 'Outras') {
    var Ponto11 = document.getElementById("Ponto11").value;
    var Ponto12 = document.getElementById("Ponto12").value;
    var Ponto21 = document.getElementById("Ponto21").value;
    var Ponto22 = document.getElementById("Ponto22").value;

    document.getElementById("Ponto11").value = Ponto21;
    document.getElementById("Ponto12").value = Ponto22;

    document.getElementById("Ponto21").value = Ponto11;
    document.getElementById("Ponto22").value = Ponto12;

    Logger.log(body);
     Ponto();
  }
}

// Função de limpar formulario.
function lixeira() {
  var total = "";

  document.querySelector('#termoUser').value = "Celsius";
  document.querySelector('#termoS').value = "Kelvin";
  
  document.getElementById("TempUser").value = total;
  document.getElementById("result").value = total;
}

function Ponto(){
  var termoUser = document.getElementById("termoUser").value;
  var termoS = document.getElementById("termoS").value;

  //Outras para qualquer um:
  if (termoUser == 'Outras' || termoS == 'Outras') {
    var TempUser = document.getElementById("TempUser").value;
        
    var amount = TempUser;
    var amount = parseFloat(amount, 10);
    
    var Ponto11 = Number(document.getElementById("Ponto11").value);
    var Ponto12 = Number(document.getElementById("Ponto12").value);
    var Ponto21 = Number(document.getElementById("Ponto21").value);
    var Ponto22 = Number(document.getElementById("Ponto22").value);
    
    //var total = Ponto11 + Ponto12;
      var total2 = (TempUser - Ponto12) * (Ponto21 - Ponto22);
      var total3 = total2/(Ponto11 - Ponto12);
      var total = total3;
      var total = total + Ponto22;
    
    var total = Math.round(total * 100000) / 100000;
    document.getElementById("result").value = total;
  }
}

// Funções para mudar de modos.
function mode1() {
  localStorage.setItem('mode', 'light');
  userMode();
}
function mode2() {
  localStorage.setItem('mode', 'night');
  userMode();
}

function userMode() {
  var root = document.documentElement;
  var userMode = localStorage.getItem('mode');

  if(userMode != 'night' || userMode == 'light'){
    localStorage.setItem('mode', 'light');
    var userMode = localStorage.getItem('mode');
  }
  
  if(userMode ==  'light'){
    document.getElementById("mode1").style.display = "none";
    document.getElementById("mode2").style.display = "flex";
    // Se modo claro colocar:
    root.style.cssText = "--text: black; --background-color: #ededed; --table-txt-color: black; --select-color: #cfcfcf; --input-color: #fff; --button-color: #3f51b5; --button-txt: #fff;";
  }

  if(userMode == 'night'){
    document.getElementById("mode1").style.display = "flex";
    document.getElementById("mode2").style.display = "none";
    // Se modo escuro colocar:
    root.style.cssText = "--text: #fff; --background-color: #202124; --table-txt-color: #fff; --select-color: #141517; --input-color: #303134; --button-color: #513eaf; --button-txt: #fff;"; 
  }
}
