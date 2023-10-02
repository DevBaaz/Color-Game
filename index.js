const easyArray = 
[['purple', 'fuchsia', 'deeppink','purple'], ['blue', 'darkblue', 'dodgerblue', 'blue'], ['green', 'darkseagreen', 'green', 'forestgreen'], ['yellow', 'goldenrod', 'greenyellow', 'yellow'], 
['red', 'maroon', 'red', 'darkred',], ['gray','gray', 'dimgray', 'gainsboro'], ['silver', 'silver', 'gray', 'gainsboro'],  ['greenyellow', 'greenyellow', 'yellow', 'lightgreen'], 
['brown', 'lightsalmon', 'lightcoral', 'brown'], ['white', 'white', 'cornsilk', 'azure'], ['maroon', 'crimson', 'maroon', 'brown'], ['olive', 'lime', 'olive', 'darkseagreen'],  ['teal', 'darkcyan', 'cyan', 'teal'], 
['lime','darkolivegrreen', 'lime', 'aqua'], ['aqua', 'aqua', 'cornflowerblue', 'darkturquoise'], ['navy', 'blue', 'darkblue','navy'], ['cyan', 'cyan', 'teal', 'aqua'], ['crimson', 'red', 'crimson', 'maroon'], 
['blueviolet', 'blueviolet','purple', 'darkslateblue'], ['darkblue', 'darkslateblue', 'blue', 'darkblue']];
const hardArray = 
[['purple', 'fuchsia', 'darkslateblue', 'deeppink', 'blue', 'purple', 'green'], ['blue', 'darkblue', 'dodgerblue', 'darkslateblue', 'blue', 'purple', 'green'], 
['green', 'olive', 'darkseagreen', 'green', 'blue', 'purple', 'forestgreen'], ['yellow', 'lawngreen', 'goldenrod', 'greenyellow', 'yellow', 'gray', 'red'], 
['red', 'maroon', 'darkred', 'firebrick', 'red', 'gray', 'blue'], ['gray', 'red', 'darkslategray','gray', 'dimgray', 'gainsboro', 'yellow'], ['silver', 'gainsboro', 'lavender', 'gray', 'red', 'silver', 'yellow'], 
['greenyellow', 'green', 'lawngreen', 'gray', 'greenyellow', 'yellow', 'lightgreen'], ['brown', 'red', 'maroon', 'lightsalmon', 'lightcoral', 'gray', 'brown'], 
['white', 'floralwhite', 'cornsilk', 'azure', 'red', 'white', 'brown'], ['maroon', 'lime', 'olive', 'red', 'brown', 'crimson', 'maroon'], ['olive', 'lime', 'green', 'olive', 'darkseagreen', 'forestgreen', 'maroon'], 
['teal', 'cadetblue', 'lime', 'olive', 'darkcyan', 'cyan', 'teal'], ['lime', 'green', 'darkolivegrreen', 'olive', 'lime', 'navy', 'aqua'], ['aqua', 'aqua', 'cornflowerblue', 'darkturquoise', 'lime', 'navy', 'cyan'],
['navy', 'blue', 'darkblue', 'darkslateblue', 'lime', 'navy', 'aqua'], ['cyan', 'teal', 'cadetblue', 'deepskyblue', 'cyan', 'navy', 'aqua'], ['crimson', 'darkolivegrreen', 'olive', 'crimson', 'lime', 'navy', 'aqua'], 
['blueviolet', 'lime', 'blueviolet', 'aqua', 'purple',  'fuchsia', 'darkslateblue'], ['darkblue','dodgerblue', 'darkslateblue', 'blue', 'darkblue', 'navy', 'aqua']];

let guessColor = document.getElementById('guess-color');  [option1, option2, option3, option4, option5, option6] = document.getElementsByClassName('options'); spur = document.getElementById('spur');
let statusReset = document.getElementById('status-reset');easyLevel = document.getElementById('easy'); hardLevel = document.getElementById('hard');
pickOne = 'PICK ONE...'; correct = 'CORRECT'; tryAgain = 'TRY AGAIN'; playAnother = "PLAY AGAIN"; newColors = 'NEW COLORS';

const nextEasyTest = (array) => {
    [guessColor.textContent, option1.style.backgroundColor, option2.style.backgroundColor, option3.style.backgroundColor] = array;
    [option4.style.backgroundColor, option5.style.backgroundColor, option6.style.backgroundColor] = ['black', 'black', 'black'];
}

const nextHardTest = (array) => {
    [guessColor.textContent, option1.style.backgroundColor, option2.style.backgroundColor, option3.style.backgroundColor, option4.style.backgroundColor, option5.style.backgroundColor, option6.style.backgroundColor] 
    = array;
}

function* nextArray(array) {
    yield array[0]; yield array[1]; yield array[2]; yield array[3]; yield array[4]; yield array[5]; yield array[6]; yield array[7]; yield array[8]; yield array[9]; yield array[10]; yield array[11]; yield array[12]; 
    yield array[13]; yield array[14]; yield array[15]; yield array[16]; yield array[17]; yield array[18]; yield array[19];
}

const check = (button) => {
    statusReset.style.backgroundColor = 'white'; statusReset.style.color = 'teal';
    if (button.style.backgroundColor === guessColor.textContent) {
        spur.textContent = correct;
        statusReset.textContent = playAnother;
    } else {
        spur.textContent = tryAgain;
    }
}

const levelSwitch = (level, array) => {
    if (level == easyLevel) {
        let generate = nextArray(array); statusReset.style.backgroundColor = 'white'; statusReset.style.color = 'teal'; spur.textContent = '';
        easyLevel.style.backgroundColor = 'teal'; easyLevel.style.color = 'white'; hardLevel.style.backgroundColor = 'white'; hardLevel.style.color = 'teal'; nextEasyTest(generate.next().value);
        statusReset.addEventListener('click', () => {
            if (statusReset.textContent == newColors) {
                spur.textContent = '';
                statusReset.style.backgroundColor = 'teal'; statusReset.style.color = 'white';
                nextEasyTest(generate.next().value);
            }
            else if (statusReset.textContent == playAnother) {
                spur.textContent = '';
                statusReset.textContent = newColors;
                nextEasyTest(generate.next().value);
            }
        });
    }
    else if (level == hardLevel) {
        let generate = nextArray(array);  statusReset.style.backgroundColor = 'white'; statusReset.style.color = 'teal'; spur.textContent = '';
        hardLevel.style.backgroundColor = 'teal'; hardLevel.style.color = 'white'; easyLevel.style.backgroundColor = 'white'; easyLevel.style.color = 'teal'; nextHardTest(generate.next().value);
        statusReset.addEventListener('click', () => {
            if (statusReset.textContent == newColors) {
                spur.textContent = '';
                statusReset.style.backgroundColor = 'teal'; statusReset.style.color = 'white';
                nextHardTest(generate.next().value);
            }
            else if (statusReset.textContent == playAnother) {
                spur.textContent = '';
                statusReset.textContent = newColors;
                nextHardTest(generate.next().value);
            }
        });
    }
}

window.addEventListener('load', () => {
    levelSwitch(easyLevel, easyArray); 
});