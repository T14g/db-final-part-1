//Input Masks
$('#cpf').inputmask('999.999.999-99');
$('#celular').inputmask('(99) 99999-9999');

$(document).ready(function(){

    $('#send-form').click(function(e){
        e.preventDefault();

        // Testes
        // validateName();
        // validateDate();
        // validateCPF();
        // console.log(validateEmail());
        // console.log(validateCellphone());
    })


});

//Valida o nome que precisa ter pelo menos 3 letras
function validateName(){
    var name = $('#nome-completo').val();

    if(name.length < 3){
        return false
    }else{
        return true;
    }

}

//Valida se há data de nascimento
function validateDate(){

    var date = $('#nascimento').val();

    if(date){
        return true;
    }else{
        return false;
    }

}

//Valida o formato do CPF
function validateCPF() {
    
    var cpf = $('#cpf').val();
    var regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    if(regex.test(cpf)){
        return true;
    }else{
        return false;
    }

}


//Valida o email
function validateEmail() {
    var email = $('#email').val();
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(regex.test(email.toLowerCase())){
        return true;
    }else{
        return false;
    }
}

//Valida o celular
function validateCellphone() {
    var celular = $('#celular').val();
    var regex = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;

    if(regex.test(celular)){
        return true;
    }else{
        return false;
    }
}

//Valida CEP

//Busca informações relativas ao CEP

//Valida número

//Valida Bio