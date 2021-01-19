# Validação de formulário de contato usando Javascript / Jquery

Este projeto consiste na validação de um formulário de contato. O foco foi diagramar utilizando Bootstrap, por isso foi utilizado pouco CSS e nenhum Sass já que não haveria grandes quantidades de css para organizar.

# Requisitos
O projeto roda diretamente no Google Chrome ou Firefox abrindo o index.html

## Tecnologias utilizadas:

-Javascript
-Jquery
-Jquery Input Mask
-Toastr
-Bootstrap 4
-HTML 5
-CSS3
-Regex
-API Postmon para buscar informações de um CEP

## O que é validado

- O Nome completo precisa ter mais de 3 letras;
- A data de nascimento precisa ser escolhida;
- O CPF precisa estar no formato correto e passar por um Regex;
- O email precisa ser preenchido e passar por um Regex;
- O celular precisa ser preenchido e passar por um Regex;
- O CEP precisa ser preenchido tendo no mínimo 8 dígitos;
- O logradouro não pode ficar em branco;
- O número da casa/apto não pode ficar em branco;
- A cidade não pode ficar em branco;
- A UF não pode ficar em branco;
- O bairro não pode ficar em branco;
- A descrição não pode ficar em branco.

## O que não precisa validar

- O complemento não é validado já que algumas pessoas não possuem em seu endereço.

## O que acontece

O usuário irá preencher o formulário caso alguma informação não passe na validação será exibida uma mensagem com o Toastr informando o que está errado.
Ao preencher um CEP válido as informações sobre o CEP são pesquisadas no Postmon e são preenchidos automaticamente o logradouro, a cidade , o bairro e a UF.
Lembrando que complemento não é obrigatório então não foi validado.

Se tudo estiver validado será exibida uma mensagem no console com : Nome do dado + dado.


