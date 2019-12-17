const {questionObject} = require('./questionObj')
// global HTML elements variables
const review = document.querySelectorAll('nav > button:nth-child(2)');
const body = document.getElementsByTagName('BODY')[0];
const next = document.getElementsByClassName('$next'); // returns a fake array of buttons
const previous = document.getElementsByClassName('$previous'); // returns a fake array of buttons

// const mathML = '<script type="text/javascript" src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>';

let numArr = [];

// checks the property of local storage object if found - don't do anything if not set qNum to local storage
// our counter to keep track where we are in the study guide and also from where to pull the data from in the questionObj
function setLocalStorage() {
    if (localStorage.hasOwnProperty('qNum')) {
        // console.log('we have a local set already ');
    } else {
        let questionNum = 0;
        localStorage.setItem('qNum', questionNum);
    }
}
setLocalStorage();

/*loop through the array of button and add a click event that gets that local storage qNum 
  - increments questionNum by 1 
  - saves the current qNum to local storage
  - resets review and hides rationale
  - insert that data store in answersObj base on questionNum

*/
[...next].forEach(el => {
    
    el.addEventListener('click', function () {
        let questionNum = Number(localStorage.getItem('qNum'));
        questionNum++;
        // console.log(questionNum)
        localStorage.setItem('qNum', questionNum);
        
        reset();
        insertData();

    });
});

/*loop through the array of button and add a click event that gets that local storage qNum 
  - increments questionNum by 1 
  - saves the current qNum to local storage
  - resets review and hides rationale
  - insert that data store in answersObj base on questionNum
*/
[...previous].forEach(el => {

    el.addEventListener('click', function () {
        let questionNum = Number(localStorage.getItem('qNum'));
        if (questionNum === 0) {

            // console.log('less than zero');

        } else {
            questionNum--;
            // console.log(questionNum)
            localStorage.setItem('qNum', questionNum);
            reset();
            insertData();
    
        }
    });
});


/*
getQuestionData() parses through the object and based on the Qnum it will return a question object
*/
function getQuestionData(data) {
    let questionNum = Number(localStorage.getItem('qNum'));
    return data[questionNum];
}

/* 
setHTML does the following...
    takes two arguments 
    questionBlock = holds the question, rational, question num and rationale 
    q = is the index in which we loop through the questionBlock object

*/
function setHTML(questionBlock, q) {
    // console.log(q)
 
    return `
    <section id='parent_${q}'>
<div role="region" aria-label="Orientation Information" class="offscreen a11y">${questionBlock.questionBlock[q].a11y}</div>
<div class="test-question question_holder" role="region" aria-label="Question">
<div class="displayQuestion">
    <span class="questionNumber">
        <span class="offscreen">Question </span>
        <span class="$questionNum">${questionBlock.questionBlock[q].id}.</span>
    </span>

    <div class="flex_right">${questionBlock.questionBlock[q].question}</div>
</div>

    <div  class="answers_holder">

    <ol id='_${q}' data-group='group_${q}' data-correct="${questionBlock.questionBlock[q].correct.map(el => parseInt(el, 36) - 9)}" class="answers" role="region" aria-label="Response">
    ${questionBlock.questionBlock[q].answers.map(el => `<li><span class="selectionType">${el}</span></li>`).join('')}
    </ol >

</div>
</div>
<section class="rationale display" role="region" aria-label="rationale">${questionBlock.questionBlock[q].rationale}</section>
<div class="controller-holder">
<label class="controller" for='score_${q}'> 
<input type="checkbox" id='score_${q}' data-group='group_${q}'">
Show Answer and Rationale
</label>
<div>
</section>
`;
}


/* on load do the following
  - get qNum from local storage
  - get the root element to insert and clear data on reset() 
  - insert the  questionNum Object data into the html elements variables local to the insertData function 

*/
window.addEventListener('load', insertData);
// load follow these simple steps to construct the DOM based on the questionNum we get back from local storage.

function insertData() {
 
    // this function simply checks to see if quesionNum === 0 so 
    let questionNum = Number(localStorage.getItem('qNum'));
    disabledNavButton(questionNum, questionObject.length);
    // console.log('line 135', questionNum)
    // let questionNum = Number(localStorage.getItem('qNum')); // i'm here - for testing only
    // console.log('line 137', questionObject.length)
    let updateText = document.getElementsByClassName('_updateText')[0];

    let arrayQuestions = questionObject[questionNum].questionBlock;
    let arrNum = arrayQuestions.length - 1
    let lastPageNum = questionObject[questionObject.length - 2].questionBlock[questionObject[questionObject.length - 2].questionBlock.length-1].id;
    // console.log(lastPageNum)
    if( typeof questionObject[questionNum].questionBlock[arrNum].id === 'number') {
    if(updateText !== 'undefined') updateText.innerHTML = `Questions ${questionObject[questionNum].questionBlock[0].id } - ${questionObject[questionNum].questionBlock[arrNum].id} of ${lastPageNum}`;
    // console.log('questionNum: ',  questionNum)
    }
    
    let questionBlock = getQuestionData(questionObject);
    // checks to see if we have a passage in the questionblock object - insert the passage
    for (let key in questionBlock) {
        if (questionBlock[key].hasOwnProperty('passage')) {
            document.getElementsByClassName('root')[0].innerHTML = questionBlock[key].passage;
            break;
        }
    }
    /*
     if passage has a class of passage_holder do the following...
        add setHTML function
    if does not do the following...
        find the root div and add setHTML function
    */
    for (let q in questionBlock.questionBlock) {
        // console.log('line 158', q , questionBlock.questionBlock)

        if (document.getElementsByClassName('passage_holder')[0] !== undefined) {
            // console.log('here', questionBlock.questionBlock[q])
            // console.log('insert questions without a passage');
            document.getElementsByClassName('question-holder')[0].innerHTML += setHTML(questionBlock, q);

        } else {
            // console.log('insert questions without a passage');
            document.getElementsByClassName('root')[0].innerHTML += setHTML(questionBlock, q);
        }

        if(questionNum + 1 === questionObject.length ) {
            document.getElementsByClassName('root')[0].innerHTML = setEndHtml();
        }
    }
    
    showScores();
    
}

function setEndHtml() {
    return ` <div>
    <h2 class="h2Color"> Would You Like More Practice? </h2>
    <div class="alert b2b callout boring">
    <div class="wrap-alert-icon"></div>
    <div class="wrap-alert-text">
    <p>Build the skills and confidence to succeed on test day with these free online resources.</p> 
    <p><a class="btn" href="https://www.khanacademy.org/prep/praxis-core?utm_source=praxispreparekhan&amp;utm_medium=link&amp;utm_campaign=ETS&amp;utm_content=getstarted" aria-describedby="msgOpensInNewWindow" target="_blank">Get started with Khan Academy<sup>®</sup> Official <i>Praxis</i><sup>®</sup> Core Prep</a></p>
    </div>
</div>
<div class="alert b2b callout boring">
		<div class="wrap-alert-icon"></div>
		<div class="wrap-alert-text">
            <p>Answer a set of authentic test questions in an environment that simulates the computer-delivered test.</p>
            <p><a  class="btn" href="https://store.ets.org/store/ets/DisplayProductDetailsPage/productID.5089674600/CategoryID.3552300" aria-describedby="msgOpensInNewWindow">Purchase the Interactive Practice Test</a></p>

		</div>
    </div>

    <a class="" href="http://etstmd.org/dhj/praxis/dist" alt="">Back to [Study Companion] page</a>
    </div>`
}


/*
reset helps bring back the test to test mode
*/
function reset() {
    window.location.reload(true);
    // document.getElementsByTagName('body')[0].style.disp = "none";
    document.getElementsByTagName('body')[0].style.display = "none";
    document.getElementById('loader').classList.add('loader');
    // document.getElementsByClassName('root')[0].innerHTML = '';
    // [...review].forEach(el => {
    //     el.classList.remove('disabled')
    // });
}


/* 
cool feature to have since on question one the user cant go to question -1 - we can delete if client does not like 
*/
function disabledNavButton(button, last) {
    // console.log('line 222', button + 1)
    // console.log('line 223', last);
    if (button + 1 === 1) {
        document.querySelector('nav > button:first-child').classList.add('disabled')
    } else {
        document.querySelector('nav > button:first-child').classList.remove('disabled')
    }

    if(button + 1 === last) {

        document.querySelector('nav > button:last-child').classList.add('disabled')
    } else {
        document.querySelector('nav > button:last-child').classList.remove('disabled')
    }   
}
    


function showScores() {
 
    const showRationale = document.querySelectorAll('[id^="score"]');   
    const showAll = document.getElementById('show-all');

    // console.log(showAll)
    // console.log(showRationale)

    findIt=(id)=>{
       let pos = id.indexOf('_');
       let res = id.slice(pos + 1, id.length);
       findTheCorrectAnswer(res);
       res = 'parent_' + res;
       let ids = document.getElementById(res);
       return ids
    }

    showData = (e) => {
        // console.log('line 213', e)
        let id = findIt(e.target.id);
        if(e.target.checked && id.childNodes[5].classList.contains('display')) {
            id.childNodes[5].classList.remove('display');
            e.target.setAttribute('disabled', true);
    
        }
    }

    showRationale.forEach(checkbox => checkbox.addEventListener('change', showData))
    
    
    showAllCh = (e) => {
        e.target.setAttribute('disabled', true)
        if (e.target.checked) {
            let controller = document.querySelectorAll('.controller > input');
            controller.forEach(el => {
                console.dir(el.checked = true)
                el.setAttribute('disabled', true)
                let ols = [...document.getElementsByTagName('ol')];
                ols.forEach(ol => {
                    let lis = ol.children;
                    console.dir(lis)
                    let value = ol.getAttribute('data-correct');
                    console.log('u are value', value);
                    
                    [...lis].forEach( (item, i) => {

                        i = i + 1
                        console.log('wwwww-', i)
                        console.log('item innterText', item.innerText)
                         if(value.includes(i)) item.innerHTML = `<span><i class="fas fa-check-circle"></i></span><span class="correct" aria-label="Correct Answer">${item.innerText}</span>`;
                        // <span><i class="fas fa-check-circle"></i></span><span class="correct"><span class="offscreen"> Correct Answer</span>${item.innerText}</span>
                    })
                });
           
            });
            console.log('show rationale')
            let rationale = document.getElementsByClassName('rationale');
            [...rationale].forEach(section => {
                console.log(section)
                if(section.classList.contains('display')){
                    section.classList.remove('display')
                }
            })
        }
    }
    if(showAll !== null) showAll.addEventListener('change', showAllCh);

    findTheCorrectAnswer = (id) => {
        console.log(`_${id}`)
        let ol = document.getElementById(`_${id}`);
        let dataCorrect = ol.getAttribute('data-correct');
        ol.style.pointerEvents = 'none';
        let getCheckboxHideMe = document.getElementById('hideMe');
        if(getCheckboxHideMe !== null) document.getElementById('hideMe').style.display = 'none';
        [...ol.children].forEach((item,i) => {
            i  = i + 1;
            if(dataCorrect.includes(i)) item.innerHTML = `<span><i class="fas fa-check-circle"></i></span><span class="correct" aria-label="Correct Answer">${item.innerText}</span>`;
            
        });
    };
}

