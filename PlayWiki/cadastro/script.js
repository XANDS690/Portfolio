// funcionamento do botão "eye"(mostrar/esconder senha)
function enviarbut(event){
        if (event.key === 'Enter') {
        enviar();
    }
}


function mostrar(){

    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('eye')

    if(inputPass.type === 'password'){

        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }
    else if(inputPass.type === 'text'){

        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill')


    }

}

//funcionamento do botão "enviar"


function enviar(){

    var email = document.getElementById('email')
    var senha = document.getElementById('senha')


    if(senha.value !== "" && email.value !== ""){

        window.alert('cadastrado')
        window.location.replace("../pagina inicial/index.html");


    }else{

        window.alert('todos os campos devem ser preenchidos')

    }
    
}