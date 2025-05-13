// Task 1
console.log(`Task 1`)

function getDateFormat(date, separator = '.') {
    
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    
    let dateArr = [day, month + 1, year].map((value) => {
        if ((value / 10) < 1) {
            return `0${value}`;
        } else {
            return value;
        }
    })

    console.log(dateArr.join(separator))
    
    

}

const currDate = new Date()
getDateFormat(currDate);
const pastDate = new Date(2001, 11, 1, 13, 25, 30);
getDateFormat(pastDate)


// Task 2
console.log(`Task 2`)

function getDaysBeforeBirthday(nextBirthdayDate) {
    const birthDayYear = new Date().getFullYear();
    nextBirthdayDate.setYear(birthDayYear);
    let currDateMS = new Date().getTime();
    let predictNextBirthdayDateMs = nextBirthdayDate.getTime();
    if (predictNextBirthdayDateMs - currDateMS < 0) {
        nextBirthdayDate.setYear(birthDayYear + 1);
    }
    

    return convertMsToDays(nextBirthdayDate.getTime() - currDateMS)
    
}

function convertMsToDays(ms) {
    return Math.floor(ms / 1000 / 60 / 60 / 24);
}

const myBirthDay = new Date(2001, 11, 17);
console.log(`До ближайшего дня рождения осталось: ${getDaysBeforeBirthday(myBirthDay)} дня/дней`)

// Task 3
console.log(`Task 3`)

function addDays(numberDays, timestamp) {
    return new Date(timestamp + numberDays * 24 * 60 * 60 * 1000);
}

const daysToAdd = 15
const currentDate = new Date().getTime();
const changedDate = addDays(daysToAdd, currentDate)

console.log(`Вы добавили ${daysToAdd} дней к дате и получили -  ${changedDate}`)