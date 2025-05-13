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


