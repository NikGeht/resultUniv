let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'
let char = javaScriptDescription[Math.floor(javaScriptDescription.length / 2) - 1]
javaScriptDescription = javaScriptDescription.substring(0, Math.floor(javaScriptDescription.length / 2)).replaceAll('a', 'A').replaceAll('а', 'А').replaceAll(' ', '').repeat(3)

console.log(`Символ посередине строки - ${char}, строка - ${javaScriptDescription}`)
