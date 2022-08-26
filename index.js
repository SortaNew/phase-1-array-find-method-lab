// code your solution here
function superbowlWin(record){
    let won = record.find(array => array.result === "W")
    if (won === undefined)
        return won
    else
        return won.year
}


