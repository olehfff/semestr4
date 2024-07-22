document.getElementById('myButton').addEventListener('click', function() {
    var textInputValue = document.getElementById('textInput').value;
    this.textContent = textInputValue;
});