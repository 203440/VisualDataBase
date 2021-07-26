if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }
  require('dotenv').config();
 var con;
 function login(){
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    if(user== 'karla' && password== '1234'){
        if(process.env.host != null || process.env.host != ''){
            location.href="./index3.html";
        }else{
            location.href="./index2.html";
        }
        
    }
    else{
        alert ("Error en la autenticacion");   
    }
  }
function sendParams() {
    con = require('./connect');
    localStorage.setItem('con', con);
}
function addData() {
    //con= localStorage.getItem('con')
    con = require('./connect');
    // Crear query para INSERT, SELECT, UPDATE O DELETE
    const nombre = document.getElementById('nombre').value;
    const ap_pat = document.getElementById('ap_pat').value;
    const ap_mat = document.getElementById('ap_mat').value;
    const edad = document.getElementById('edad').value;

    $query = `INSERT INTO persona (nombre, ap_pat, ap_mat, edad) VALUES ("${nombre}","${ap_pat}","${ap_mat}","${edad}" )`;

    con.query($query, function (err, rows, fields) {

        if (err) {
            console.log('Error Query');
            console.log(err);
            alert(err);
            return;
        }
        console.log("Query exitoso", rows);
        alert(rows);
    });
    // Input data conection database
   
}

var Row = null

function procesos() {
    if (validar()) {
        var datos = leerdatos();
        if (Row == null)
              insertar(datos);
        else
            restablecer();
    }
}

function leerdatos() {
    var datos = {};
    datos["nombre"] = document.getElementById("nombre").value;
    datos["ap_pat"] = document.getElementById("ap_pat").value;
    datos["ap_mat"] = document.getElementById("ap_mat").value;
    datos["edad"] = document.getElementById("edad").value;
    return datos;
}

function insertar(dato) {
    var tabla = document.getElementById("persona").getElementsByTagName('tbody')[0];
    var newRow = tabla.insertRow(tabla.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = dato.nombre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = dato.ap_pat;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = dato.ap_mat;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = dato.edad;
    cell4 = newRow.insertCell(4);

}

function restablecer() {
    document.getElementById("nombre").value = "";
    document.getElementById("ap_pat").value = "";
    document.getElementById("ap_mat").value = "";
    document.getElementById("edad").value = "";
    Row = null;
}


function validar() {
    isValid = true;
    if (document.getElementById("nombre").value == "") {
        isValid = false;
      
    } else {
        isValid = true;

    }
    return isValid;  
}