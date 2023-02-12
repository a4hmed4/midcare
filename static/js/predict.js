const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();

    const file = document.getElementById('fileInput').value;
    // const file = fileInput.files[0];
    let selectedOption = document.getElementById("pre_option").value


    const formData = new FormData();
    formData.append('file', file);
    formData.append('option', selectedOption);

    fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.prediction == 1) {
                document.getElementById("result").innerHTML = "Postive";
            }
            else if (data.prediction == 0) {
                document.getElementById("result").innerHTML = "Negative";
            }
            
        })
        .catch(error => {
            console.error(error);
        });
});