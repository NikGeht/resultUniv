let showSuccessMessage = (message) => console.log(message)
let showErrorMessage = (message) => console.log(message)

function checkTextOnErrorSymbol(text, errorSymbol, showSuccessMessage, showErrorMessage) {
    if (text.length === 0 || typeof(text) !== 'string') {
        console.log('Error: пустой текст или неправильный формат сообщения')
        return;
    }
    let textArr = text.split('');
    let errorCounter = 0;
    textArr.map((symbol, index) => {
        if (symbol === errorSymbol) {
            showErrorMessage(`Найден запрещенный символ "${symbol}" под индексом ${index}`)
            errorCounter++;
        }
        if (index === text.length - 1 && errorCounter === 0) {
            showSuccessMessage(`В данном тексте нет запрещенных символов`)
        }
    })
}


const text = 'Привет! Как дела! Давно мы с тобой не виделись.'; 
checkTextOnErrorSymbol(text, 'a', showSuccessMessage, showErrorMessage);