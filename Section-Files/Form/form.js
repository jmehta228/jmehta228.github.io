const scriptURL = 'https://script.google.com/macros/s/AKfycbwXfzGBuuUnXZFRNXB4-i0VgDqT1eELtQeomNjI4jRWM8tMtsvzQPiXAC5SyKeEqUHDiw/exec'
const form = document.forms['contact-form']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Form submitted"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
});
