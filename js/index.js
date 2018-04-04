document.getElementById('seven').addEventListener('click', (function(e) {
    document.getElementById('display').value += '7';
e.preventDefault();
}));

document.getElementById('eight').addEventListener('click', (function(e) {
    document.getElementById('display').value += '8';
e.preventDefault();
}));

document.getElementById('nine').addEventListener('click', (function(e) {
    document.getElementById('display').value += '9';
e.preventDefault();
}));

document.getElementById('reset').addEventListener('click', (function(e) {
    document.getElementById('display').value = '';
e.preventDefault();
}));

document.getElementById('divide').addEventListener('click', (function(e) {
    document.getElementById('display').value += '/';
e.preventDefault();
}));

document.getElementById('four').addEventListener('click', (function(e) {
    document.getElementById('display').value += '4';
e.preventDefault();
}));

document.getElementById('five').addEventListener('click', (function(e) {
    document.getElementById('display').value += '5';
e.preventDefault();
}));

document.getElementById('six').addEventListener('click', (function(e) {
    document.getElementById('display').value += '6';
e.preventDefault();
}));

document.getElementById('plus').addEventListener('click', (function(e) {
    document.getElementById('display').value += '+';
e.preventDefault();
}));

document.getElementById('minus').addEventListener('click', (function(e) {
    document.getElementById('display').value += '-';
e.preventDefault();
}));

document.getElementById('one').addEventListener('click', (function(e) {
    document.getElementById('display').value += '1';
e.preventDefault();
}));

document.getElementById('two').addEventListener('click', (function(e) {
    document.getElementById('display').value += '2';
e.preventDefault();
}));

document.getElementById('three').addEventListener('click', (function(e) {
    document.getElementById('display').value += '3';
e.preventDefault();
}));

document.getElementById('zero').addEventListener('click', (function(e) {
    document.getElementById('display').value += '0';
e.preventDefault();
}));

document.getElementById('multiply').addEventListener('click', (function(e) {
    document.getElementById('display').value += '*';
e.preventDefault();
}));

document.getElementById('dot').addEventListener('click', (function(e) {
    document.getElementById('display').value += '.';
e.preventDefault();
}));

document.getElementById('doubleZero').addEventListener('click', (function(e) {
    document.getElementById('display').value += '00';
e.preventDefault();
}));

document.getElementById('equals').addEventListener('click', (function(e) {
    document.getElementById('display').value = eval(document.getElementById('display').value);
e.preventDefault();
}));