let userString = prompt('Введите строку для обрезки')
let startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки')
let endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки')

userString = userString.trim()
startSliceIndex = Number(startSliceIndex.trim())
endSliceIndex = Number(endSliceIndex.trim())

let resultString = userString.substring(startSliceIndex, endSliceIndex)
alert(`Результат ${resultString}`)