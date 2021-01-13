const checkEmail = (arr) => {
    let dataEmail = getEmail();
    if (dataEmail.length !== 0){
        arr.push({"email": dataEmail});
    }
    else{
        return null
    }
    function getEmail() {
        let newArrEmail = [];
        newArrEmail.push(document.getElementById('email').value);
        // console.log(newArrEmail);
        return newArrEmail;
    }
}

export {checkEmail};