document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    }
    console.log(formData);
    
    
})