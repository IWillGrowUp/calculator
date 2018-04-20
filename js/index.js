function makeCalc (num, writeNum) {
    document.getElementById(num).addEventListener('click', (function(e) {
        document.getElementById('display').value += writeNum;
        e.preventDefault();
    }));
}

makeCalc('doubleZero', '00');
makeCalc('zero', '0');
makeCalc('one', '1');
makeCalc('two', '2');
makeCalc('three', '3');
makeCalc('four', '4');
makeCalc('five', '5');
makeCalc('six', '6');
makeCalc('seven', '7');
makeCalc('eight', '8');
makeCalc('nine', '9');
makeCalc('plus', '+');
makeCalc('minus', '-');
makeCalc('divide', '/');
makeCalc('multiply', '*');
makeCalc('dot', '.');

document.getElementById('reset').addEventListener('click', (function(e) {
        document.getElementById('display').value = '';
        e.preventDefault();
    }));

document.getElementById('equals').addEventListener('click', (function(e) {
    document.getElementById('display').value = eval(document.getElementById('display').value);
e.preventDefault();
}));

function makeSound (forButton, forSound) {
    document.getElementById(forButton).addEventListener('click', (function(e) {
            document.getElementById(forSound).play();
    }));
}

makeSound('doubleZero', 'button_sound');
makeSound('zero', 'button_sound');
makeSound('one', 'button_sound');
makeSound('two', 'button_sound');
makeSound('three', 'button_sound');
makeSound('four', 'button_sound');
makeSound('five', 'button_sound');
makeSound('six', 'button_sound');
makeSound('seven', 'button_sound');
makeSound('eight', 'button_sound');
makeSound('nine', 'button_sound');
makeSound('plus', 'action_sound');
makeSound('minus', 'action_sound');
makeSound('divide', 'action_sound');
makeSound('multiply', 'action_sound');
makeSound('dot', 'dot_sound');
makeSound('reset', 'reset_sound');
makeSound('equals', 'equal_sound');