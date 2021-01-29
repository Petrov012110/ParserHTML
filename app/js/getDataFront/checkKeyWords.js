const checkKeyWords = (arr) => {
    
        let dataKeyWords = getKeyWords();
        if (dataKeyWords.length) {
            arr.push({"keyWords": dataKeyWords});
            // document.querySelector('#resultKeyWords').classList.remove('active');
        }
        else{
            // document.querySelector('#resultKeyWords').classList.add('active');
            return null
        }

        function getKeyWords() {
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

    }

    

export {checkKeyWords};