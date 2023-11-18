// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    let zipCode = document.getElementById("zip-code").value;
    let status = document.getElementById("status").checked;

    return {name, email, city, zipCode, status
    };
}

const isNumber = (input) => !isNaN(input)

function checkboxIsChecked() {
    let checkbox = document.getElementById("status");
    if (checkbox.checked) {
        return true;
    } else {
        return false;
    };
}

function validateFormData(formData) {
    return (
        formData !== null &&
        isNumber(formData.zipCode) &&
        checkboxIsChecked()
    );
}

function submit() {
    const formData = handleGetFormData();
    const isValid = validateFormData(formData);
    const warningDiv = document.getElementById("warning");
    warningDiv.textContent = "";
    if (!isValid) {
        warningDiv.textContent = "Periksa form anda sekali lagi";
    } else {
        warningDiv.textContent = "";
    }
}
document.getElementById("submit-form").addEventListener("click", (event) => {
    event.preventDefault();
    submit();
})    