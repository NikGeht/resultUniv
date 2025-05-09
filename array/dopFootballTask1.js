const goals = [8, 1, 1, 3, 2, -1, 5];

let mostResultGames = goals.map((goal, index) => {
    if (goal === Math.max(goals)){
        console.log(`Самый результативный матч был под номером ${index + 1}. В нем было ${goal} голов`)
    }
})

function getInfoMostGoodResultGames(arr) {
    let maxGoals = Math.max(...arr);
    let matchIndex = goals.indexOf(maxGoals)

    console.log(`Самый результативный матч был под номером ${matchIndex + 1}. В нем было ${maxGoals} голов`);
}

function getInfoMostBadResultGames(arr) {

    let mostBadResultGoals = Math.min(...arr.filter((goal) => goal > 0))
    let mostBadResultGamesIndex = arr.map((goal, index) => {
        if (goal === mostBadResultGoals) {
            return index + 1;
        } else {
            return null;
        }
    }).filter((value) => value !== null)
    
    let infoIndex = mostBadResultGamesIndex.join(', ')
    console.log(`Самые нерезультативные матчи были под номерами ${infoIndex}. В каждом из них было забито по ${mostBadResultGoals} мячу(а).`)
}

function getInfoTotalOfGoals(arr) {
    let filteredMatch = arr.filter((goal) => goal > 0);
    let totalOfGoals = filteredMatch.reduce((acc, goal) => {
        return acc + goal
    })
    console.log(`Общее количество голов за сезон равно ${totalOfGoals}`)
}

function getInfoAutoDefeats(arr) {
    let checkAutoDefeats = arr.every((goal) => goal > 0) ? 'нет' : 'да'
    console.log(`Были автоматические поражения: ${checkAutoDefeats}`)
}

function getInfoAverageOfGoals(arr) {
    let filteredMatch = arr.filter((goal) => goal > 0);
    let sumOfGoals = filteredMatch.reduce((acc, goal) => acc + goal)
    console.log(`Среднее количество голов за матч равно ${(sumOfGoals/filteredMatch.length).toFixed(0)}`)
}

function getInfoSortMatch(arr) {
    let ascSortedMatch = arr.slice().sort((a, b) => a - b);
    console.log(`${ascSortedMatch.join(', ')}`)
}

getInfoMostGoodResultGames(goals);
getInfoMostBadResultGames(goals);
getInfoTotalOfGoals(goals);
getInfoAutoDefeats(goals);
getInfoAverageOfGoals(goals);
getInfoSortMatch(goals);



