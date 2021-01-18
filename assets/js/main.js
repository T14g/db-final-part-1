//Input Masks
$('#cpf').inputmask('999.999.999-99');
$('#celular').inputmask('(99) 99999-9999');
$('#cep').inputmask('99999-999', {"placeholder": ""});

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

    //Event Handler ao digitar um CEP
    $('#cep').keyup(function(){

        var cepFormated = $(this).val().replace('-','');

        if(cepFormated.length === 8){
            getCepData(cepFormated);
        }

    });


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
function getCepData(cep){

    var url = 'https://api.postmon.com.br/v1/cep/' + cep;
    console.log("Pesquisando cep");

    axios.get(url)
        .then(function(response) {

            var data = response.data;
            updateAddress(data);

    })
        .catch(function(error) {
            console.log(error)
    })

}

//Atualiza informações de logradouro, cidade, estado
function updateAddress(data) {

    $('#logradouro').val(data.logradouro);
    $('#cidade').val(data.cidade);
    $('#bairro').val(data.bairro);
    $('#uf').val(data.estado);

}

//Valida número

//Valida Bio