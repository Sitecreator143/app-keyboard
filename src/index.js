import "./style.scss";

const letterBtns = document.querySelectorAll('[data-letter]');
const backspaceBtn = document.querySelector('[data-backspace]');
const capslockBtn = document.querySelector('[data-capslock]');
const enterBtn = document.querySelector('[data-enter]');
const doneBtn = document.querySelector('[data-done]');
const spaceBtn = document.querySelector('[data-space]');
const outPut = document.querySelector('[data-output]');
const keyBoard = document.querySelector('[data-keyboard]');
const languageBtn = document.querySelector('[data-language]');
const shiftBtn = document.querySelector('[data-shift]');

let languageEn = true;
let capsLock = false;
let shift = false;

let englishLetters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 
'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 
'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', '\\', 
'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
let englishLettersShift = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 
'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 
'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|', 
'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'];
let englishLettersShiftCapslock = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 
'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', 
'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', '|', 
'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?'];
let englishLettersCapslock = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 
'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 
'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', '\\', 
'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'];
let russianLetters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ',
'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 
'\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'];
let russianLettersShift = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+',
'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ',
'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '/', 
'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ','];
let russianLettersShiftCapslock = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+',
'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ',
'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '/', 
'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ','];
let russianLettersCapslock = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ',
'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '\\', 
'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.'];

const leftBtn = document.querySelector('[data-left]');
const rightBtn = document.querySelector('[data-right]');
let cursorFunction = () => {
    leftBtn.addEventListener('click', () => {
        outPut.selectionStart = outPut.selectionStart - 1;
        outPut.selectionEnd = outPut.selectionStart;
        outPut.focus();
    });
    rightBtn.addEventListener('click', () => {
        outPut.selectionStart = outPut.selectionStart + 1;
        outPut.selectionEnd = outPut.selectionStart;
        outPut.focus();
    });
}
cursorFunction();

const audioBtn = document.querySelector('[data-audio]');
let audio = {};
let audioOn = true;
audioBtn.addEventListener('click', () => { 
    if (audioOn) {
        audioOn = false;
        audioBtn.classList.remove('keyboard__key--active');
    } else {
        audioOn = true;
        audioBtn.classList.add('keyboard__key--active');
    }
});
function playSound(url) {
    if (audioOn) {
        if("pause" in audio) {
            audio.pause();
        }
        audio = new Audio(url);
        audio.play();
    }
}

const speechBtn = document.querySelector('[data-speech]');
const speechHelper = document.querySelector('[data-speech-helper]');
let speechFunction = () => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        let speech = false;
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
        let speechObject = new SpeechRecognition();
        speechObject.interimResults = true;
        speechObject.lang = 'en';

        let pushLanguageSpeech = () => { 
            languageBtn.addEventListener('click', () => {
                if (languageEn) {
                    speechObject.lang = 'ru';
                } else {
                    speechObject.lang = 'en';
                }
            })
        }
        pushLanguageSpeech()

        const pushSpeech = () => {
            speechObject.addEventListener("result", function(e) {
                let text = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');
                speechHelper.innerHTML = `${text}, язык распознавания: ${speechObject.lang}`;
                if (e.results[0].isFinal) {
                    outPut.value += text;
                    outPut.value += '\n';
                }
            });
            speechObject.addEventListener("end", () => {
                if (speech === true) {
                    speechObject.start();
                }
            });
        
            speechBtn.addEventListener('click', () => {
                if (speech === false) {
                    speech = true;
                    speechObject.start();
                    speechBtn.classList.add('keyboard__key--active');
                } else {
                    speech = false;
                    speechBtn.classList.remove('keyboard__key--active');
                    speechObject.stop();
                }
            });
        }
        pushSpeech()
    } else {
        speechHelper.innerHTML = 'Браузер не поддерживает функцию распознавания речи';
    }
}
speechFunction()

let letterChange = (languageEn, capsLock, shift) => {
    for (let i = 0; i < letterBtns.length; i++) {
        if (languageEn === true && capsLock === false && shift === false) {
            letterBtns[i].textContent = englishLetters[i];
        } else if (languageEn === true && capsLock === false && shift === true) {
            letterBtns[i].textContent = englishLettersShift[i];
        } else if (languageEn === true && capsLock === true && shift === true) {
            letterBtns[i].textContent = englishLettersShiftCapslock[i];
        } else if (languageEn === true && capsLock === true && shift === false) {
            letterBtns[i].textContent = englishLettersCapslock[i];
        } else if (languageEn === false && capsLock === false && shift === false) {
            letterBtns[i].textContent = russianLetters[i];
        } else if (languageEn === false && capsLock === false && shift === true) {
            letterBtns[i].textContent = russianLettersShift[i];
        } else if (languageEn === false && capsLock === true && shift === true) {
            letterBtns[i].textContent = russianLettersShiftCapslock[i];
        } else if (languageEn === false && capsLock === true && shift === false) {
            letterBtns[i].textContent = russianLettersCapslock[i];
        }
    }
}

let pushLanguage = () => { 
    languageBtn.addEventListener('click', () => {
        if (languageEn) {
            languageEn = false
            letterChange(languageEn, capsLock, shift);
            languageBtn.textContent = 'RU';
        } else {
            languageEn = true 
            letterChange(languageEn, capsLock, shift);
            languageBtn.textContent = 'EN';
        }
    })
}

let pushCapslock = () => {
    capslockBtn.addEventListener('click', () => {
        if (capsLock === true) {
            capsLock = false;
            letterChange(languageEn, capsLock, shift);
            capslockBtn.classList.remove('keyboard__key--active');
        } else {
            capsLock = true;
            letterChange(languageEn, capsLock, shift);
            capslockBtn.classList.add('keyboard__key--active');
        }
    })
}

let pushShift = () => {
    shiftBtn.addEventListener('click', () => {
        if (shift === true) {
            shift = false;
            letterChange(languageEn, capsLock, shift);
            shiftBtn.classList.remove('keyboard__key--active');
        } else {
            shift = true;
            letterChange(languageEn, capsLock, shift);
            shiftBtn.classList.add('keyboard__key--active');
        }
    })
}

let pushLetter = () => {
    for (let i = 0; i < letterBtns.length; i++) {
        letterBtns[i].addEventListener('click', () => {
            outPut.value += letterBtns[i].textContent;
            outPut.focus();
        })
    }
}

let pushBackspace = () => {
    backspaceBtn.addEventListener('click', () => {
        outPut.value = outPut.value.slice(0, -1);
        outPut.focus();
    })
}

let pushEnter = () => {
    enterBtn.addEventListener('click', () => {
        outPut.value += '\n';
        outPut.focus();
    })
}

let pushSpace = () => { 
    spaceBtn.addEventListener('click', () => {
        outPut.value += ' ';
        outPut.focus();
    })
}

let keyBoardInit = () => { 
    outPut.addEventListener('click', () => {
        keyBoard.classList.remove('keyboard--hidden');
    })
}

let keyboardHiddenFunction = () => { 
    doneBtn.addEventListener('click', () => {
        keyBoard.classList.add('keyboard--hidden');
    })
}

pushLanguage();
pushCapslock();
pushShift();
pushLetter();
pushBackspace();
pushEnter();
pushSpace();
keyBoardInit();
keyboardHiddenFunction();

for (let i = 0; i < letterBtns.length; i++) {
    letterBtns[i].addEventListener("click", () => {
        playSound('./static/sound/a.mp3');
    })
}
languageBtn.addEventListener("click", () => {
    playSound('./static/sound/a.mp3');
});
backspaceBtn.addEventListener("click", () => {
    playSound('./static/sound/backspace.mp3');
});
speechBtn.addEventListener("click", () => {
    playSound('./static/sound/a.mp3');
});
audioBtn.addEventListener("click", () => {
    playSound('./static/sound/a.mp3');
});
capslockBtn.addEventListener("click", () => {
    playSound('./static/sound/caps.mp3');
});
enterBtn.addEventListener("click", () => {
    playSound('./static/sound/enter.mp3');
});
shiftBtn.addEventListener("click", () => {
    playSound('./static/sound/shift.mp3');
});
doneBtn.addEventListener("click", () => {
    playSound('./static/sound/a.mp3');
});
spaceBtn.addEventListener("click", () => {
    playSound('./static/sound/space.mp3');
});
leftBtn.addEventListener("click", () => {
    playSound('./static/sound/space.mp3');
});
rightBtn.addEventListener("click", () => {
    playSound('./static/sound/space.mp3');
});
