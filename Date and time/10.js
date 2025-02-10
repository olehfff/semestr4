const date = new Date()
console.log(date);

function getYear() {
    const year = date.getFullYear();
    console.log(year)
}
getYear()

function getMonth() {
    const month = date.getMonth();
    console.log(month)
}
getMonth()

function getDateOfMonth() {
    const dateOfMonth = date.getDate();
    console.log(dateOfMonth)
}
getDateOfMonth()

function getHours() {
    const hours = date.getHours();
    console.log(hours)
}
getHours()

function getMinutes() {
    const minutes = date.getMinutes();
    console.log(minutes)
}
getMinutes()

function getSeconds() {
    const seconds = date.getSeconds();
    console.log(seconds)
}
getSeconds()

function isDateDayOfWeekend() {
    if(date == 6 || date == 7) {
        console.log('it is the weekend')
    } else {
        console.log('it is weekday');
    }
}
isDateDayOfWeekend()