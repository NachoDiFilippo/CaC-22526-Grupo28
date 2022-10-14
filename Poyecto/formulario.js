//selecciono el formulario.
var formulario = document.forms[0];

//funcion que se ejecuta

window.onload = iniciar;

//constructor de clase 
class datosconsulta{
    constructor (nombre, apellido, telefono, mail){ 
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.mail = mail;
        console.log("Constructor: " + '\n' + nombre + '\n' +apellido +'\n' + telefono +'\n' + mail );

    }
}

//instancia de la clase que llama al constructor con los valores ingresados en el formulario.
const cliente = new datosconsulta((document.getElementById("IDNombre")),(document.getElementById('IDApellido')),(document.getElementById('IDTelefono')),(document.getElementById('IDEmail')) ) 


//cuando se realiza click en enviar. 
function iniciar(){
    document.getElementById("Enviar").addEventListener("click",validar ,false);
}



//------------validar cada campo.

function names(){
   var eleme = document.getElementById("IDNombre"); 
   if(eleme.value != ""){
     cliente.nombre=eleme.value;
     return true;
    }
    else {
        alert("nombre incompleto");
        return false;
    }
}

function apell(){
    var eleme = document.getElementById("IDApellido"); 
    if(eleme.value != ""){
      cliente.apellido=eleme.value;
      return true;
    }
      else {
         alert("apellido incompleto");
         return false;
     }
 }


 function telef(){
    var eleme = document.getElementById("IDTelefono"); 
    if(eleme.value != "" && !(isNaN(eleme.value))){
      cliente.telefono=eleme.value; 
      return true;
    }
      else {
         alert("ingresar telefono valido");
         return false;
     }
 }

 function mail(){
    var eleme = document.getElementById("IDEmail"); 
    if(eleme.value != "" ){
      cliente.mail=eleme.value; 
      return true;
    }
      else {
         alert("ingresar correo valido");
         return false;
     }
 }

//----------------------------------


//  console.log("nope: " + '\n' + cliente.nombre + '\n' +cliente.apellido +'\n' + cliente.telefono +'\n' + cliente.mail );


// funcion q se comprueba cada campo. 

function validar(e){
 if(names() && apell() && telef() && mail() && confirm ("desea enviar?")){
    return true;
    }
    else {
    alert("Compruebe los datos ingresados!");
    e.preventDefault();
    
    return false;
    }

}




