import "babel-polyfill";
import { EmptyFields, FieldsFormat } from './lib/validate';
import { getElements } from './lib/get-elements';

const form = document.querySelector("form#formulario_teste");

/*
 * Adicionado EventListener para capturar o envio do form com enter
 */
document.querySelector('#form_button').onclick = function () {
    validateForm(form);
};

/*
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
function validateForm(form) {
    /**
     *
     * @type {*[]} Array com os objetos dos campos do formulário
     */
    const form_fields = [].slice.call(form.querySelectorAll('select, input:not([type=radio]):not([type=checkbox])') || []);

    const elementIds = ['nome', 'cpf'];

    const fields = getElements(elementIds);

    EmptyFields(form_fields);

    FieldsFormat(form_fields);
}
