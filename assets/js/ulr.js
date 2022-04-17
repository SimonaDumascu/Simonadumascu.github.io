const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('graphic_design')) {
    console.log('graphic_design');
    document.getElementById('graphic_design').checked = true;
}
else if (urlParams.has('ux_ui')) {
    console.log('ux_ui');
    document.getElementById('ux_ui').checked = true;
}
else if (urlParams.has('concept_art')) {
    console.log('concept_art');
    document.getElementById('concept_art').checked = true;
}
else {
    document.getElementById('all').checked = true
}
