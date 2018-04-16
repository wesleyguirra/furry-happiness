function validateForm () {

    // Inicia as váriaveis
    const name = document.getElementById("name").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const obs = document.getElementById("obs").value;


    // Checa função de validação do CPF
    if (!validateCPF(cpf)) {
        document.getElementById("msg_cpf")
            .innerHTML = "Campo Obrigatório: Digite um CPF no formato XXX.XXX.XXX-XX.";
        console.log(cpf);

    } else {
        document.getElementById("msg_cpf")
            .innerHTML = "";

    }

    // Checa função de validação do Nome
    if (!validateFullName(name)) {
        document.getElementById("msg_name")
            .innerHTML = "Campo Obrigatório: Digite seu nome completo!";

    }


    // Checa função de validação do Email
    if (!validateEmail(email)) {
        document.getElementById("msg_email")
            .innerHTML = "Campo Obrigatório: Digite um email válido!";

    }

    // Checa função de validação Observações
    if (validateObs(obs)) {
        document.getElementById("msg_obs")
            .innerHTML = "Campo Obrigatório: Máximo de 600 caracteres!";
    }


    // Funções
    function validateObs(obs) {
        return (obs.length <= 600) && (obs !== "" || obs !== null);
    }

    function validateFullName(name) {
        const RegExp =/^((?![ .]+$)[a-záàâãéèêíïóôõöúçñ A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ .]{10,50})$/;

        if (name === null || name === "") {
            return false;
        }

        return RegExp.test(name);
    }

    function validateEmail(email) {
        const RegExp = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/;

        if (name === null || name === "") {
            return false;
        }

        return RegExp.test(email);
    }

    function validateCPF(cpf) {
        /* Verificando se o texto recebido é iniciado por três números (^[\d]{3});
        seguidos de ponto (\.);
        seguido de três números ([\d]{3});
        seguidos de ponto (\.);
        seguido de três números ([\d]{3});
        seguidos de hífen (\-);
        seguido (e finalizado) por dois números ([\d]{2}$);
        */
        const RegExp = /^[\d]{3}\.[\d]{3}\.[\d]{3}\-[\d]{2}$/;

        if (name === null || name === "") {
            return false;
        }
        return RegExp.test(cpf);
    }

}