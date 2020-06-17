
function getLastDayOfMonth(year, month) {
    return new Date(year,month+1,0).getDate();
}


console.log( getLastDayOfMonth(2012, 0) ); // 31
console.log( getLastDayOfMonth(2012, 1) ); // 29


console.log( getLastDayOfMonth(2013, 1) );