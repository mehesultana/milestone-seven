const enterEmail = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    //console.log(inputText);
    inputField.value = '';
    validMessage.innerHTML = '';
    errorMessage.innerHTML = '';

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputText)) {
        validEmail();
        return true;
    } else {
        errorHandle();
        return false;
    }
};

const validMessage = document.getElementById('validMessage');
const validEmail = () => {
    validMessage.innerHTML = `
    <p class="text-success text-center fw-bold ">Valid email address!</p>`;
};

const errorMessage = document.getElementById('errorMessage');
const errorHandle = () => {
    errorMessage.innerHTML = `
    <p class="text-danger text-center fw-bold ">You have entered an invalid email address!</p>`;
};
