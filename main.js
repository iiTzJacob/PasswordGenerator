const btn = document.getElementById("generate");
const output = document.getElementById("output");
const clear = document.getElementById("copy");

function getLength() {
    let length = document.getElementById('length').value;
    return length;
}

function generatePassword(length) {
    let keyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let passwordArray = "";

    for (i = 0; i < length; i++) {
        passwordArray += keyArray[Math.floor(Math.random() * keyArray.length)];
    }
    
    return passwordArray; 
}

function finalResult() {
    let maxLength = getLength();
    let password = generatePassword(maxLength)
    document.getElementById('output').value = `${password}`;
}

function copyClipboard() {
    let pass = document.getElementById('output');
    pass.select();
    pass.setSelectionRange(0, 999999);

    navigator.clipboard.writeText(pass.value);
    alert("Copied!")
}

btn.addEventListener('click', function() {
    finalResult();
});

btn.addEventListener('keydown', function (e) {
    if (e.code === "Enter") {
        finalResult(e);
    }
})
