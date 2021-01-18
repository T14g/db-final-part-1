//Input Masks
$('#cpf').inputmask('999.999.999-99');
$('#celular').inputmask('(99) 99999-9999');
$('#cep').inputmask('99999-999', {"placeholder": ""});

$(document).ready(function(){

    $('#send-form').click(function(e){
        e.preventDefault();

        if(runValidations()){
            toastr.success("Formulário validado com sucesso!");
        }

    });

    //Event Handler ao digitar um CEP
    $('#cep').keyup(function(){

        var cepFormated = $(this).val().replace('-','');

        if(cepFormated.length === 8){
            getCepData(cepFormated);
        }

    });


});

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

//Executa todas as validações mostrando erros com o Toastr e retorna o resultado
function runValidations() {
    var validated = true;

    if(!validateName()){
        validated = false;
        toastr.error('Nome inválido');
    }

    if(!validateDate()){
        validated = false;
        toastr.error('Data inválida');
    }

    if(!validateCPF()){
        validated = false;
        toastr.error('CPF inválido');
    }

    if(!validateEmail()){
        validated = false;
        toastr.error('Email inválido');
    }
    
    if(!validateCellphone()){
        validated = false;
        toastr.error('Celular inválido');
    }

    if(!validateCEP()){
        validated = false;
        toastr.error('CEP inválido');
    }

    if(!validateLogradouro()){
        validated = false;
        toastr.error('Logradouro inválido');
    }

    if(!validateNumero()){
        validated = false;
        toastr.error('Número da casa/apto inválido');
    }

    if(!validateCity()){
        validated = false;
        toastr.error('Cidade inválida');
    }

    if(!validateBairro()){
        validated = false;
        toastr.error('Bairro inválido');
    }

    if(!validateUF()){
        validated = false;
        toastr.error('UF inválida');
    }

    if(!validateBio()){
        validated = false;
        toastr.error('Bio inválida');
    }

    return validated;
}

//Exibe mensagem de successo no console.log
function showSuccess() {
    console.log("Formulário validado com sucesso");
}

//Valida o nome que precisa ter pelo menos 3 letras
function validateName(){

    var nome = $('#nome-completo').val();
    
    if(nome.length < 3){
        return false
    }else{
        return true;
    }

}

//Valida a  data de nascimento
function validateDate(){

    var nascimento = $('#nascimento').val();

    if(nascimento){
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

    var email       = $('#email').val();
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(regex.test(email.toLowerCase())){
        return true;
    }else{
        return false;
    }

}

//Valida o celular
function validateCellphone() {

    var celular     = $('#celular').val();
    var regex = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;

    if(regex.test(celular)){
        return true;
    }else{
        return false;
    }
}

//Valida CEP
function validateCEP(){

    var cep = $('#cep').val();

    if(cep.length >= 8){
        return true;
    }else{
        return false;
    }

}


//Valida Logradouro
function validateLogradouro(){

    var logradouro  = $('#logradouro').val();

    if(logradouro.length > 0){
        return true;
    }else{
        return false;
    }

}

//Valida número da casa/prédio
function validateNumero(){

    var numero = $('#numero').val();

    if(numero.length > 0){
        return true;
    }else{
        return false;
    }
}

//Valida cidade
function validateCity(){

    var city = $('#cidade').val();

    if(city.length > 0){
        return true;
    }else{
        return false;
    }

}

//Valida bairro
function validateBairro(){

    var bairro      = $('#bairro').val();

    if(bairro.length > 0){
        return true;
    }else{
        return false;
    }

}

//Valida UF
function validateUF(){

    var uf = $('#uf').val();

    if(uf.length > 0){
        return true;
    }else{
        return false;
    }

}

//Valida Bio
function validateBio(){

    var bio = $('#bio').val();

    if(bio.length > 0){
        return true;
    }else{
        return false;
    }

}
