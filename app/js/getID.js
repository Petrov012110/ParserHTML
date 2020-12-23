document.querySelector('.btn').onclick = clickFunction;
function clickFunction() {
    let elements = document.querySelectorAll('ul>li');
    let newArr = [];
    for (let elem of elements) {

        if(elem.className == 'brand-product__li active__li'){
            newArr.push(elem.id);
        }
        
    }
    console.log(newArr);
}
