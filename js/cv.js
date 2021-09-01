function validateForm(){
    const name = document.getElementById("name").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje= document.getElementById("mensaje").value;

    if(name===""){
        document.getElementById("p-name-message").style.display="block";
    }
    else{
        document.getElementById("p-name-message").style.display="none";
    }
    if(apellido===""){
        document.getElementById("p-apellido-message").style.display="block";
    }
    else{
        document.getElementById("p-apellido-message").style.display="none";
    }
    if(correo===""){
        document.getElementById("p-correo-message").style.display="block";
    }
    else{
        document.getElementById("p-correo-message").style.display="none";
    }
    if(telefono===""){
        document.getElementById("p-telefono-message").style.display="block";
    }
    else{
        document.getElementById("p-telefono-message").style.display="none";
    }
    if(mensaje===""){
        document.getElementById("p-mensaje-message").style.display="block";
    }
    else{
        document.getElementById("p-mensaje-message").style.display="none";
    }
}

function validateInput(element){
    const inputValue = document.getElementById(element.id).value;
    if(inputValue!=""){
        document.getElementById(`p-${element.id}-message`).style.display="none";
    }

}