const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
    
    checkChancesToWin(defenderObject) {

        const totalArmyTypes = Object.keys(defenderObject).length;
        let totalArmyCount = 0;

        Object.entries(this).forEach(([armyType, armyCount]) => {
            if (typeof this[armyType] !== 'function' && 
                defenderObject[armyType] !== undefined) {
                if (defenderObject[armyType] < armyCount) {
                    totalArmyCount += 1;
                }
            }
        });

        return [totalArmyCount, totalArmyTypes];
    },

    improveArmy() {
        Object.keys(this).forEach(armyType => {
            if (typeof this[armyType] !== 'function') {
                this[armyType] += 5;
            }
        });
    },

    attack(defenderObject) {
        const [ourArmyChances, maximumChances] = this.checkChancesToWin(defenderObject);
        const winProbability = ourArmyChances / maximumChances;

        if (winProbability < 0.7) {
            console.log(`Наши шансы равны ${ourArmyChances}/${maximumChances}. Необходимо укрепление!`);
            this.improveArmy();
        } else {
            console.log('Мы усилились! Мы несомненно победим! Наши шансы высоки!');
        }
    }
};

const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10
};

attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление!
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление!
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!