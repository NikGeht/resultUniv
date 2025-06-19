class Dictionary {
    #name
    #words

    constructor(name) {
        this.#name = name;
        this.#words = {};
    }

    get mainName() {
        return this.#name;
    }

    get allWords() {
        return this.#words;
    }

    set mainName(newName) {
        this.#name = newName;
    }

    _addNewWord(wordKey, wordObj) {
        this.#words[wordKey] = wordObj;
    }

    add(word, description) {
        if (!this.#words[word]) {
            this._addNewWord(word, {
                word,
                description,
            })
        } else {
            throw new Error('Данное слово уже существует в словаре')
        }
    }

    remove(word) {
        if (this.#words[word]) {
            delete this.#words[word];
        } else {
            throw new Error('Данного слова нет в словаре')
        }
    }

    showAllWords() {
        Object.values(this.#words).forEach(word => console.log(`${word.word} - ${word.description}`))
    }
}

class HardWordsDictionary extends Dictionary {
    add(word, description) {
        if (!this.allWords[word]) {
            this._addNewWord(word, {
                word,
                description,
                isDifficult: true,
            })
        } else {
            throw new Error('Данное слово уже существует в словаре')
        }
    }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
    
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
    
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
    
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
    
hardWordsDictionary.remove('неологизм');
    
hardWordsDictionary.showAllWords();
    
console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.mainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова 
// дилетант и квант