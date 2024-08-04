document.getElementById('googleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();
    const degree = document.getElementById('degree').value;
    const resume = document.getElementById('resume').files[0];

    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    if (email === '') {
        alert('Please enter your email.');
        return;
    }

    if (age === '' || isNaN(age) || age <= 0) {
        alert('Please enter a valid age.');
        return;
    }

    if (degree === '') {
        alert('Please select your gender.');
        return;
    }

    if (!resume) {
        alert('Please upload your resume.');
        return;
    }

    alert('Form submitted successfully!');
    document.getElementById('googleForm').reset();
});
