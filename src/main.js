const form = document.getElementById("formulario_teste");

/**
 * Adicionado EventListener para capturar o envio do form com enter
 */
if (form.addEventListener) {
    form.addEventListener("submit", validateForm(form));
} else if (form.attachEvent) {
    /*
     * O addEventListener não é suportado em versões mais antigas do IE,
     * por isso estou verificando o attachEvent também.
     * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Browser_compatibility
     */
    form.attachEvent("onsubmit", validateForm(form));
}


/**
 *
 * @param form Recebe o formulário que será validado
 */
function validateForm (form) {
    /**
     *
     * @type {*[]} Array com os objetos dos campos do formulário
     */
    const form_fields = [].slice.call(form.querySelectorAll('select, input:not([type=radio]):not([type=checkbox])') || []);

    validateEmptyFields(form_fields);

    validateFieldsFormat(form_fields);
}

/**
 *
 * @param fields Os campos que serão checados
 */
function validateEmptyFields(fields) {
    for (field of fields) {
        if (isEmptyValue(field.value)) {
            field.offsetParent.lastElementChild.innerHTML = "Campo Obrigatório!";
        }
    }
}

/**
 *
 * @param fields Os campos que serão validados
 */
function validateFieldsFormat(fields) {
    for (field of fields) {
        switch (field.name) {
            case "cpf":
                (!isCpfFormat(field.value))
                    ? field.offsetParent.lastElementChild.innerHTML = "Formato de CPF Inválido"
                    : console.log("campo CPF Validado");
                break;
            case "name":
                (!isFullName(field.value))
                    ? field.offsetParent.lastElementChild.innerHTML = "Digite o Nome Completo"
                    : console.log("campo Nome Validado");
                break;
            case "obs":
                (!isLengthSixthy(field.value))
                    ? field.offsetParent.lastElementChild.innerHTML = "Máximo de caracteres excedido: " + field.value.length
                    : console.log("campo Obs Validado");
                break;
            case "email":
                (!isValidEmail(field.value))
                    ? field.offsetParent.lastElementChild.innerHTML = "Digite um email válido"
                    : console.log("campo Email Validado");
                break;
        }
    } 
}

/**
 *
 * @param obs valor que será validado
 * @returns {boolean} Retorna se o número de caracteres do campo é menor ou igual à 600
 * e não nulo ou vazio
 */
function isLengthSixthy(obs) {
    return (obs.length <= 600) && (obs !== "" || obs != null);
}

/**
 *
 * @param name O valor do nome que será validado
 * @returns {boolean} Retorna o test do RegEx do nome deve ser um nome completo
 * entre 10 e 50 caracteres com espaço entre primeiro e segundo nome.
 */
function isFullName(name) {
    const RegExp =/^((?![ .]+$)[a-záàâãéèêíïóôõöúçñ A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ .]{10,50})$/;

    return RegExp.test(name);
}

/**
 *
 * @param email O valor do email que será validado
 * @returns {boolean} Retorna o test do RegEx do email
 */
function isValidEmail(email) {
    /* Verificando se o texto recebido é iniciado por caracteres
     * alfanumericos e alguns especiais (usuário) (^[A-Z0-9._%+-]);
     * seguido de (@)
     * seguido de caracteres alfanumericos pontos ou hifens (domínio) ([A-Z0-9.-]);
     * seguido de ponto (\.);
     * seguido (e finalizado por no mínimo duas letras (extensão do dominio).
     */
    const RegExp = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/;

    return RegExp.test(email);
}

/**
 *
 * @param cpf O valor do cpf que será validado
 * @returns {boolean} Retorna o test do RegEx do cpf que deve começar
 * com 3 digitos seguido de 1 ponto, seguido de 3 digitos, seguido de 1 ponto,
 * seguido de 3 digitos, seguido de hifen, seguido de 2 digitos
 * Ex: 123.456.789-10
 */
function isCpfFormat(cpf) {
    /* Verificando se o texto recebido é iniciado por três números (^[\d]{3});
     * seguidos de ponto (\.);
     * seguido de três números ([\d]{3});
     * seguidos de ponto (\.);
     * seguido de três números ([\d]{3});
     * seguidos de hífen (\-);
     * seguido (e finalizado) por dois números ([\d]{2}$);
    */
    const RegExp = /^[\d]{3}\.[\d]{3}\.[\d]{3}\-[\d]{2}$/;

    return RegExp.test(cpf);
}

/**
 *
 * @param value Valor para comparação com uma string vazia ou null
 * @returns {boolean} retorna true se a string está vazia
 */
function isEmptyValue(value) {
    if (value === "" || value == null) {
        return true;
    }
}