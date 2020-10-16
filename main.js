const letterBtns = document.querySelectorAll('[data-letter]')
const backspaceBtn = document.querySelector('[data-backspace]')
const capslockBtn = document.querySelector('[data-capslock]')
const enterBtn = document.querySelector('[data-enter]')
const doneBtn = document.querySelector('[data-done]')
const spaceBtn = document.querySelector('[data-space]')
const outPut = document.querySelector('[data-output]')
const keyBoard = document.querySelector('[data-keyboard]')
const languageBtn = document.querySelector('[data-language]')
const shiftBtn = document.querySelector('[data-shift]')

//По умолчанию английская раскладка, капс и шифт неактивны
let languageEn = true
let capsLock = false
let shift = false

//Создаем массивы букв для каждой ситуации (руская/английская раскладка, капс, шифт)
let englishLetters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 
'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 
'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', '\\', 
'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
let englishLettersShift = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 
'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 
'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|', 
'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?']
let englishLettersShiftCapslock = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 
'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', 
'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', '|', 
'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?']
let englishLettersCapslock = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 
'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 
'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', '\\', 
'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/']
let russianLetters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ',
'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 
'\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.']
let russianLettersShift = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+',
'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ',
'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '/', 
'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',']
let russianLettersShiftCapslock = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+',
'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ',
'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '/', 
'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',']
let russianLettersCapslock = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ',
'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '\\', 
'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.']

//Функция, которая каждой клавише вписывает значение из массивов, в зависимости от раскладки, шифта и капса. Она вызывается при переключении раскладки, шифта и капса
let letterChange = (languageEn, capsLock, shift) => {
    for (let i = 0; i < letterBtns.length; i++) {  //Для всех клавиш
        if (languageEn === true && capsLock === false && shift === false) {
            letterBtns[i].textContent = englishLetters[i] //Находим и записываем каждой клавише значение из массива
        } else if (languageEn === true && capsLock === false && shift === true) {
            letterBtns[i].textContent = englishLettersShift[i]
        } else if (languageEn === true && capsLock === true && shift === true) {
            letterBtns[i].textContent = englishLettersShiftCapslock[i]
        } else if (languageEn === true && capsLock === true && shift === false) {
            letterBtns[i].textContent = englishLettersCapslock[i]
        } else if (languageEn === false && capsLock === false && shift === false) {
            letterBtns[i].textContent = russianLetters[i]
        } else if (languageEn === false && capsLock === false && shift === true) {
            letterBtns[i].textContent = russianLettersShift[i]
        } else if (languageEn === false && capsLock === true && shift === true) {
            letterBtns[i].textContent = russianLettersShiftCapslock[i]
        } else if (languageEn === false && capsLock === true && shift === false) {
            letterBtns[i].textContent = russianLettersCapslock[i]
        }
    }
}

//Функция переключения языка клавиатуры
let pushLanguage = () => { 
    languageBtn.addEventListener('click', () => { //По нажатии клавиши языка
        if (languageEn) { //Если сейчас (до нажатия) английская раскладка
            languageEn = false //Переключаем на русскую
            letterChange(languageEn, capsLock, shift) //Вызываем функцию замены клавиш
            languageBtn.textContent = 'RU' //Меняем значение клавиши переключения языка
        } else { //Если русский, то наоборот
            languageEn = true 
            letterChange(languageEn, capsLock, shift)
            languageBtn.textContent = 'EN'
        }
    })
}

//Функция включения капса (аналогично переключению языка)
let pushCapslock = () => {
    capslockBtn.addEventListener('click', () => {
        if (capsLock === true) {
            capsLock = false
            letterChange(languageEn, capsLock, shift)
            capslockBtn.classList.remove('keyboard__key--active') //Меняем класс на неактивный
        } else {
            capsLock = true
            letterChange(languageEn, capsLock, shift)
            capslockBtn.classList.add('keyboard__key--active')
        }
    })
}

//Функция включения шифта (аналогично переключению языка)
let pushShift = () => {
    shiftBtn.addEventListener('click', () => {
        if (shift === true) {
            shift = false
            letterChange(languageEn, capsLock, shift)
            shiftBtn.classList.remove('keyboard__key--active') //Меняем класс на неактивный
        } else {
            shift = true
            letterChange(languageEn, capsLock, shift)
            shiftBtn.classList.add('keyboard__key--active')
        }
    })
}

//Функция нажатия на букву
let pushLetter = () => {
    for (let i = 0; i < letterBtns.length; i++) { //Каждой клавише из 46 подключаем обработчик событий
        letterBtns[i].addEventListener('click', () => {
            outPut.value += letterBtns[i].textContent //Добавляем в конце значения текстового поля букву из кнопки
        })
    }
}

//Функция backspace
let pushBackspace = () => {
    backspaceBtn.addEventListener('click', () => {
        outPut.value = outPut.value.slice(0, -1) //Убираем в конце текста одну букву
    })
}

//Функция enter
let pushEnter = () => {
    enterBtn.addEventListener('click', () => {
        outPut.value += '\n' //Добавляем в конце текста 
    })
}

//Функция пробел
let pushSpace = () => { 
    spaceBtn.addEventListener('click', () => {
        outPut.value += ' ' //Добавляем в конце значения текстового поля пробел
    })
}

//Две функции для отображения клавиатуры при активации текстового окна и для скрытии клавиатуры при нажатии на кнопку done
let keyBoardInit = () => { 
    outPut.addEventListener('click', () => { //Если нажал на outPut
        keyBoard.classList.remove('keyboard--hidden') //Убирается класс скрытия клавиатуры
    })
}

let keyboardHiddenFunction = () => { 
    doneBtn.addEventListener('click', () => { //Если нажал на кнопку Done
        keyBoard.classList.add('keyboard--hidden') //Добавляется класс скрытия клавиатуры
    })
}

pushLanguage()
pushCapslock()
pushShift()
pushLetter()
pushBackspace()
pushEnter()
pushSpace()
keyBoardInit()
keyboardHiddenFunction()





