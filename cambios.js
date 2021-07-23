
var nameData = '';
var lastName = '';
var statusData = true;
var longitud = 5;
var conta = 0;
var rHtml = "";
// Recivir el dato de HTML
// function sendData() {
//     nameData = document.getElementById('name').value
//     lastName = document.getElementById('lastName').value

//     if (nameData == '' && lastName == '') {
//         alert("llene los campos")
//     }
//     else {
//         alert(nameData + " " + " " + lastName);
//     }


// }

// Ocultar los elementos por el Id asignado a la vista en HTML
// function sendData() {

//     statusData = !statusData;
//     console.log(statusData);

//     if (statusData == false) {
//         document.getElementById('name').style.display = 'block';
//         document.getElementById('lastName').style.display = 'block';
//     }
//     else {
//         document.getElementById('name').style.display = 'none';
//         document.getElementById('lastName').style.display = 'none';
//     }

// }

// Rendereizar vista en top con interpola ion en javascript
// function sendData() {
//     for (i = 2; i <= longitud; i++) {
//         document.getElementById('id' + i + '').style.top = '' + conta + 'px';
//         conta = conta + 15;
//     }

// }

// contruir vista de html desde javascript
 function sendData() {
     for (i = 1; i <= longitud; i++) {
         rHtml += "<input class='input-custom input is-primary' id='id" + i + "'  type='text' placeholder='Primary input' style='top: " + conta + "px'> ";
         conta = conta + 15;
    }
     document.getElementById('renderHtml').innerHTML = rHtml;
     document.getElementById('boton1').style.top = '' + conta + 'px';
 }

var contar=0;
var longitud1= 10+5;
var aHtml = "";
function SendData() {
    
       for (i = 6; i <= longitud1; i++) {
             aHtml += "<input class='input-custom input is-primary' id='id" + i + "' type='text' placeholder='Primary input' style='top: " + contar + "px'> ";
             contar = contar+ 15;
        }
         document.getElementById('renderHtml1').innerHTML = aHtml;
         document.getElementById('boton2').style.top = '' + contar + 'px';
    
 }
var contara=0;
var longitud2= 15+15;
var bHtml = "";
function Data() {
    
    for (i = 16; i <= longitud2; i++) {
          bHtml += "<input class='input-custom input is-primary' id='id" + i + "' type='text' placeholder='Primary input' style='top: " + contara + "px'> ";
          contara = contara+ 15;
     }
      document.getElementById('renderHtml2').innerHTML = bHtml;
      document.getElementById('boton3').style.top = '' + contara + 'px';
 
}  
var con=0;
var longitud3= 20+30;
var cHtml = "";
function Data2() {
    
    for (i = 31; i <= longitud3; i++) {
          cHtml += "<input class='input-custom input is-primary' id='id" + i + "' type='text' placeholder='Primary input' style='top: " + con + "px'> ";
          con = con+ 15;
     }
      document.getElementById('renderHtml3').innerHTML = cHtml;
      document.getElementById('boton4').style.top = '' + con + 'px';
 
}  
