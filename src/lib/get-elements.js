
function getElements(ids) {
    return ids.reduce(function (acc, id) {
        acc[id] = document.querySelector('input#'+id);
        return acc;
    }, {});
}

module.exports = { getElements };