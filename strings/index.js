const myName = 'Никита'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Владилен Минин'
const numberOfMonth = '2'
const reasonText = 'захотелось переквалифицировать в фронтенд-разработчика'
console.log(`Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`)

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`

let myInfoTextLowerJS = myInfoText.replaceAll('JavaScript', 'javascript')
let myInfoTextLowerJSUpperCourse = myInfoTextLowerJS.replaceAll('курс', 'КУРС')

myInfoText = myInfoTextLowerJSUpperCourse
console.log(`${myInfoText} Длина - ${myInfoText.length}, Первый символ - ${myInfoText[0]}, Последний символ - ${myInfoText[myInfoText.length - 1]}`)
