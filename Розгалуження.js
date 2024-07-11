function checkDay() {
    const dayInput = document.getElementById('dayInput').value.trim().toLowerCase();
    const workDays = ['понеділок', 'вівторок', 'середа', 'четвер', 'п\'ятниця'];
    const weekendDays = ['субота', 'неділя'];
    let resultMessage = '';

    if (workDays.includes(dayInput)) {
        resultMessage = 'Це робочий день.';
    } else if (weekendDays.includes(dayInput)) {
        resultMessage = 'Це вихідний день.';
    } else {
        resultMessage = 'Будь ласка, введіть коректний день тижня.';
    }

    document.getElementById('result').textContent = resultMessage;
}