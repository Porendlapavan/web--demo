const scriptURL =
    'https://script.google.com/macros/s/AKfycbwcB0jh-EOoRCNaFolUtNu7mmfqb_x_wW8SJxMs64vGkdj9Ve3kT2_Nnk-uKEwi3IZa/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
})