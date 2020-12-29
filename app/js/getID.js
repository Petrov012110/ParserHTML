

document.querySelector('.btn').onclick = addDataFrom;

export function addDataFrom(){
    let arrFrontData = [];

    const checkKeyWords = () => {
        let dataKeyWords = clickFunction();
        if (dataKeyWords.length) {
            arrFrontData.push({"Ключевые слова": dataKeyWords});
            document.querySelector('#resultKeyWords').classList.remove('active');
        }
        else{
            document.querySelector('#resultKeyWords').classList.add('active');
            return null
        }
    }
    const checkCheckBox = () => {
        let dataCheckBox = clickFunctionCheckbox();;
        if (dataCheckBox.length !== 0){
            arrFrontData.push({"Группы": dataCheckBox});
            document.querySelector('#resultCheckBox').classList.remove('active');
        }
        else{
            document.querySelector('#resultCheckBox').classList.add('active');
            return null
        }
    }
    const checkEmail = () => {
        let dataEmail = getEmail();
        if (dataEmail.length !== 0){
            arrFrontData.push({"email": dataEmail});
        }
        else{
            return null
        }
    }
    checkCheckBox();
    checkKeyWords();
    checkEmail();
    console.log(JSON.stringify(arrFrontData));
}



function clickFunction() {
    let elements = document.querySelectorAll('ul>li');
    let newArrId = [];
    
    for (let elem of elements) {
        if(elem.className == 'brand-product__li active__li'){
            newArrId.push(elem.id);
        }
    }
    // console.log(newArrId);
    return newArrId;
}
function clickFunctionCheckbox() {
    let checks = document.querySelectorAll('.content-box__filter>label>input:checked');
    let newArr = [];
    
    for (let el of checks) {
            newArr.push(el.id);
    }
    // console.log(newArr);
    return newArr;
}
function getEmail() {
    let newArrEmail = [];
    newArrEmail.push(document.getElementById('email').value);
    // console.log(newArrEmail);
    return newArrEmail;
}
