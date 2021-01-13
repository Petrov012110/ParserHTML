(async () => {

    let {checkCheckBox} = await import("./getDataFront/checkCheckBox.js");
    let {checkEmail} = await import("./getDataFront/checkEmail.js");
    let {checkKeyWords} = await import("./getDataFront/checkKeyWords.js");
    let {sendData} = await import("./sendData.js");
    
    document.querySelector('.btn').onclick = addDataFrom;

    

    function addDataFrom(){
        let arrFrontData = [];
        checkCheckBox(arrFrontData);
        checkKeyWords(arrFrontData);
        checkEmail(arrFrontData);
        console.log(JSON.stringify(arrFrontData));
        sendData(arrFrontData);
    }

    

    // function cleanArr(arrFrontData) {
    //     arrFrontData.splice(0,arrFrontData.length)
    // }
    


})();






// import пока что не работает - поэтому все функции в одном файле 

// const checkKeyWords = (arr) => {
//     let dataKeyWords = getKeyWords();
//     if (dataKeyWords.length) {
//         arr.push({"Ключевые слова": dataKeyWords});
//         document.querySelector('#resultKeyWords').classList.remove('active');
//     }
//     else{
//         document.querySelector('#resultKeyWords').classList.add('active');
//         return null
//     }
// }
// const checkCheckBox = (arr) => {
//     let dataCheckBox = clickFunctionCheckbox();;
//     if (dataCheckBox.length !== 0){
//         arr.push({"Группы": dataCheckBox});
//         document.querySelector('#resultCheckBox').classList.remove('active');
//     }
//     else{
//         document.querySelector('#resultCheckBox').classList.add('active');
//         return null
//     }
// }
// const checkEmail = (arr) => {
//     let dataEmail = getEmail();
//     if (dataEmail.length !== 0){
//         arr.push({"email": dataEmail});
//     }
//     else{
//         return null
//     }
// }








// function getKeyWords() {
//     let elements = document.querySelectorAll('ul>li');
//     let newArrId = [];
    
//     for (let elem of elements) {
//         if(elem.className == 'brand-product__li active__li'){
//             newArrId.push(elem.id);
//         }
//     }
//     // console.log(newArrId);
//     return newArrId;
// }
// function getCheckbox() {
//     let checks = document.querySelectorAll('.content-box__filter>label>input:checked');
//     let newArr = [];
    
//     for (let el of checks) {
//             newArr.push(el.id);
//     }
//     // console.log(newArr);
//     return newArr;
// }
// function getEmail() {
//     let newArrEmail = [];
//     newArrEmail.push(document.getElementById('email').value);
//     // console.log(newArrEmail);
//     return newArrEmail;
// }
