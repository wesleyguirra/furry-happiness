import validateFormat from 'validators/format';
import validateEmpty from 'validators/empty-fields';
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

    validateEmpty(form_fields);

    validateFormat(form_fields);
}