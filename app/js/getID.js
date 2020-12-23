document.querySelector('.btn').onclick = addDataFrom;
function addDataFrom(){
    clickFunction();
    clickFunctionCheckbox();
}
function clickFunction() {
    let elements = document.querySelectorAll('ul>li');
    let newArrId = [];
    
    // for (let elem of elements) {
    //     if(elem.className == 'brand-product__li active__li'){
    //         newArrId.push(elem.id);
    //     }
    // }
    console.log(elements);
    return newArrId;
}
function clickFunctionCheckbox() {
    let checks = document.querySelectorAll('.content-box__filter>label>input:checked');
    let newArr = [];
    
    for (let el of checks) {
            newArr.push(el.id);
    }
    console.log(newArr);
    return newArr;
}
