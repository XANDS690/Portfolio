function enviarbut(event){
        if (event.key === 'Enter') {
        enviar();
    }
}

function enviar(){


    var email = document.getElementById('email')
    var senha = document.getElementById('senha')

    if(email.value !== "" && senha.value !== ""){

        window.alert('Seja Bem-Vindo')
        window.location.replace("../pagina inicial/index.html")

    }else{

        window.alert("todos os campos devem ser preenchidos!!")

    }


 }
