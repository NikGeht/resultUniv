class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {};
    }

    add(word, description) {
        if (!this.words[word]) {
            this.words[word] = {
                word,
                description,
            }
        } else {
            throw new Error('Данное слово уже существует в словаре')
        }
    }

    remove(word) {
        if (this.words[word]) {
            delete this.words[word];
        } else {
            throw new Error('Данного слова нет в словаре')
        }
    }

    showAllWords() {
        Object.values(this.words).forEach(word => console.log(`${word.word} - ${word.description}`))
    }
}


const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');

dictionary.remove('JavaScript');
dictionary.showAllWords();