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

class HardWordsDictionary extends Dictionary {

    add(word, description) {
        if (!this.words[word]) {
            this.words[word] = {
                word,
                description,
                isDifficult: true,
            }
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