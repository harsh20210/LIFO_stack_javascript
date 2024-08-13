(
    function() {
        const insertArr = document.getElementsByClassName("insertArrContainer")[0];
        const insertInQue = document.getElementsByClassName("container-stack")[0];
        const getImageTag = document.getElementsByTagName('img')[0];
        const getSpanTag = document.getElementsByTagName('span');
        
        const arr = [1,2,3,4,5,6];
        const arrInQue = [];
        let getId = "";
        let getIdForRemove = ''
        let inc = 0;
        let dec = null;
        
        for( let i = 0; i < arr.length ; i++ ) {
            const newDiv = document.createElement('div')
            newDiv.textContent = arr[i];
            insertArr.appendChild(newDiv);
        }   

        function funcToRemoveEle() {
            
            if(dec >= 0 ) {
                insertInQue.lastElementChild.remove();
                const createElementDiv = document.createElement('div');
                createElementDiv.innerHTML = `<strong>${arrInQue[dec]}</strong>`;
                insertArr.appendChild(createElementDiv);
                dec -= 1; 
            } else {
                clearInterval(getIdForRemove);
                getImageTag.classList.remove('ending');
                getImageTag.style.display = "none";
                getSpanTag[1].style.display = "none"

            }
        }

        function insertInQueArr() {            
            if(arrInQue.length === arr.length) {
                clearInterval(getId);
                getImageTag.classList.replace('starting' , 'ending');
                getSpanTag[0].style.display = "none"
                getSpanTag[1].style.display = "block"
                dec = arrInQue.length - 1;
                getIdForRemove = setInterval(() => {
                    funcToRemoveEle();
                } , 2000)
            } else {
                arrInQue.push(arr[inc]);
                const createDiv = document.createElement('div');
                createDiv.innerHTML = `<strong>${arr[inc]}</strong>`;
                insertInQue.appendChild(createDiv);
                inc +=1;
                insertArr.firstElementChild.remove();
            }
        }
        
        function funtoInsertInQue() {
            getImageTag.style.display = "block";
            getImageTag.classList.add('starting');
            getSpanTag[1].style.display = "none"
            getId = setInterval(() => {
                insertInQueArr();
            } , 2000)
        }

        funtoInsertInQue()
    }
)()