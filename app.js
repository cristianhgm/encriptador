function criptado() {
    const vowels = {
        "a" : "ai",
        "e" : "enter",
        "i" : "imes",
        "o" : "ober",
        "u" : "ufat",
    };

    var textuser = document.getElementById("usertext").value;

    function replace(texto, vowels) {
        return texto.replace(/[aeiou]/g, function(letra) {
            return vowels[letra];
        });
    };
    document.getElementById("result").value = replace(textuser,vowels);
    console.log(textuser);
};

function desencriptadox() {
    const vowels = {
        "ai" : "a",
        "enter" : "e",
        "imes" : "i",
        "ober" : "o",
        "ufat" : "u",
    };

    var textuser = document.getElementById("usertext").value;

    for (const key in vowels) {
        if (vowels.hasOwnProperty(key)) {
            var regex = new RegExp(key, "gi"); 
            textuser = textuser.replace(regex, vowels[key]);
        }
    }

    document.getElementById("result").value = textuser;
}

function limpiar() {
    document.getElementById("result").value = "";
};

function copiar() {
    var textarea = document.getElementById("result");
    textarea.select();
    document.execCommand("copy");
    textarea.blur();
};

function limitacionesDeCaracteres() {
    var textarea = document.getElementById("usertext");
    var texto = textarea.value;
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    texto = texto.toLowerCase();
    texto = texto.replace(/[^a-z\s]/g, "");
    textarea.value = texto;
};
