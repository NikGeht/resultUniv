const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
       return 'Гав-Гав';
    }
 }
 
 const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
       return 'Чик-чирик';
    }
 }

 function makeDomestic(isDomestic) {
    this.isDomestic = isDomestic;
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
 }

 makeDomestic.call(dog, true);
 makeDomestic.apply(bird, [false]);
 
 