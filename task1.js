const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel: function() {
        this.level++;
        switch(true){
            case this.level === 2:
                this.stack.push('CSS');
                break;
            case this.level === 3:
                this.stack.push('JavaScript');
                break;
            case this.level === 4:
                this.stack.push('React');
                break;
            case this.level === 5:
                this.stack.push('Node.js');
                break;
            case this.level > 5:
                console.log('Студент выучил все технологии!');
                break;
        }
        return this;
    }
}

student.improveLevel();
student.improveLevel();
student.improveLevel();
student.improveLevel();
student.improveLevel();

console.log(student);
