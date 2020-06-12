window.addEventListener("load", initEvents);

var name1;
var email;
var pass;
var conf;
function initEvents() {
    name1 = document.querySelector('#name');
    name1.addEventListener('blur', checkBlank);

    email = document.querySelector('#email');
    pass = document.querySelector('#pass');
    conf = document.querySelector('#conf-pass');
}

function checkBlank() {
    // console.log(event.target.value);
    // alert("Blur Event Called...");
    var nam = event.target.value;
    // Truthy and Falsy
    // if(!num) {
    //     document.querySelector('#err_1').innerHTML = 'Please Enter a number...';
    //     f_num.style.border = '1px solid red';
    // }
    // else {
    //     document.querySelector('#err_1').innerHTML = '';
    //     f_num.style.border = '1px solid green';
    // }

    if (isEmpty(nam)) {
        document.querySelector('#err_1').innerHTML = 'Please Enter a Name...';
        event.srcElement.className = 'error';
    }
    else {
        document.querySelector('#err_1').innerHTML = '';
        event.srcElement.className = 'success';
    }
}