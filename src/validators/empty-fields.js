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
 * @param value Valor para comparação com uma string vazia ou null
 * @returns {boolean} retorna true se a string está vazia
 */
function isEmptyValue(value) {
    if (value === "" || value == null) {
        return true;
    }
}

export default validateEmptyFields;