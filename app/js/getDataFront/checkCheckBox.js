const checkCheckBox = (arr) => {
    let dataCheckBox = getCheckbox();
    if (dataCheckBox.length !== 0){
        arr.push({"groups": dataCheckBox});
        document.querySelector('#resultCheckBox').classList.remove('active');
    }
    else{
        document.querySelector('#resultCheckBox').classList.add('active');
        return null
    }

    function getCheckbox() {
        let checks = document.querySelectorAll('.content-box__filter>.wrapper-label>label>input:checked');
        let newArr = [];
        
        for (let el of checks) {
                newArr.push(el.id);
        }
        // console.log(newArr);
        return newArr;
    }

}

export {checkCheckBox};