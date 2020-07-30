
document.querySelector("#admission_submit").disabled = true;
document.querySelector('#fname').onkeyup = function () {
    let result = false;
    document.querySelector("#admission_submit").disabled = !result;
    const fname = event.target.value;
    result = /^[a-zA-Z]{1,20}$/.test(fname);
    console.log(result)
    document.querySelector("#admission_submit").disabled = !result;
}
document.querySelector('#lname').onkeyup = function () {
    let result = false;
    document.querySelector("#admission_submit").disabled = !result;
    const lname = event.target.value;
    result = /^[a-zA-Z]{1,20}$/.test(lname);
    console.log(result)
    document.querySelector("#admission_submit").disabled = !result;
}

document.querySelector('#classname').onkeyup = function () {
    let result = false;
    document.querySelector("#admission_submit").disabled = !result;
    const classname = event.target.value;
    result = /^[a-zA-Z0-9]+$/.test(classname);
    console.log(result)
    document.querySelector("#admission_submit").disabled = !result;
}
document.querySelector('#yearofpassing').onkeyup = function () {
    let result = false;
    document.querySelector("#admission_submit").disabled = !result;
    const yearofpassing = event.target.value;
    result = yearofpassing >= 2017 ? true : false;
    console.log(result)
    document.querySelector("#admission_submit").disabled = !result;
}
document.querySelector('#percentage').onkeyup = function () {
    let result = false;
    document.querySelector("#admission_submit").disabled = !result;
    const percentage = event.target.value;
    if (isNaN(percentage)){
        result=false;
    } else {
        if (percentage.indexOf(".") === -1) {
            result  = (percentage-0) >= 1 && (percentage-0) <= 100 ? true: false; 
        } else {
            result = /^[0-9]{1,2}\.[0-9]{1,2}$/.test(percentage);
        }
    }
    
    // result = /^[0-9]{1,3}$/.test(percentage);
    console.log(result)
    document.querySelector("#admission_submit").disabled = !result;
}
