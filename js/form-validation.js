const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const contactUsMsg = document.getElementById('contactUsMsg');
const commentMsg = document.getElementById('commentMsg');
const errors = document.querySelectorAll('.error');
const fnameError = document.getElementById('fnameError');
const lnameError = document.getElementById('lnameError');
const emailError = document.getElementById('emailError');
const contactUsMsgError = document.getElementById('contactUsMsgError');
const commentMsgError = document.getElementById('commentMsgError');
const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();

    resetForm();
    // for (let i = 0; i < errors.length; i++) {
    //     errors[i].innerText = "";
    // }

    if (fname.value === "") {
        fnameError.innerHTML = "First name is required";
        fnameError.style.color = "red";
    }
    if (lname.value === "") {
        lnameError.innerHTML = "Last name is required";
        lnameError.style.color = "red";
    }
    if (email.value === "") {
        emailError.innerHTML = "Email is required";
        emailError.style.color = "red";
    }
    if (contactUsMsg.value.length < 10) {
        contactUsMsgError.innerHTML = "Text must be longer than 10 characters";
        contactUsMsgError.style.color = "red";
    }
    if (commentMsg.value.length < 15) {
        commentMsgError.innerHTML = "Text must be longer than 15 characters";;
        commentMsgError.style.color = "red";
    }

})

const resetForm = () => {
    fnameError.innerHTML = "";
    lnameError.innerHTML = "";
    emailError.innerHTML = "";
    contactUsMsgError.innerHTML = "";
    commentMsgError.innerHTML = "";
};