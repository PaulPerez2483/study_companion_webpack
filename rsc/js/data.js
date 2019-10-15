// global HTML elements variables
const review = document.querySelectorAll('nav > button:nth-child(2)');
const body = document.getElementsByTagName('BODY')[0];
const next = document.getElementsByClassName('$next'); // returns a fake array of buttons
const previous = document.getElementsByClassName('$previous'); // returns a fake array of buttons
let numArr = [];

// checks the property of local storage object if found - don't do anything if not set qNum to local storage
// our counter to keep track where we are in the study guide and also from where to pull the data from in the questionObj
function setLocalStorage() {
    if (localStorage.hasOwnProperty('qNum')) {
        console.log('we have a local set already ');
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
        insertData()
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

            console.log('less than zero');

        } else {
            questionNum--;
            // console.log(questionNum)
            localStorage.setItem('qNum', questionNum);
            reset();
            insertData()
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
    return `
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
    <ol id=_${q} data-correct="${questionBlock.questionBlock[q].correct.map(el => parseInt(el, 36) - 9)}" class="answers" role="region" aria-label="Response">
    ${questionBlock.questionBlock[q].answers.map(el => `<li><span>${el}</span></li>`).join('')}
    </ol >
</div >
</div >
<section class="rationale display" role="region" aria-label="rationale">${questionBlock.questionBlock[q].rationale}</section>`;
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
    disabledNavButton(questionNum);

    // let questionNum = Number(localStorage.getItem('qNum')); // i'm here - for testing only
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

        if (document.getElementsByClassName('passage_holder')[0] !== undefined) {
            // console.log('here', questionBlock.questionBlock[q])
            console.log('insert questions without a passage');
            document.getElementsByClassName('question-holder')[0].innerHTML += setHTML(questionBlock, q);

        } else {
            console.log('insert questions without a passage');
            document.getElementsByClassName('root')[0].innerHTML += setHTML(questionBlock, q);
        }
    }
}

/*
reset helps bring back the test to test mode
*/
function reset() {
    document.getElementsByClassName('root')[0].innerHTML = '';
    [...review].forEach(el => {
        el.classList.remove('disabled')
    });
}


/* 
cool feature to have since on question one the user cant go to question -1 - we can delete if client does not like 
*/
function disabledNavButton(button) {
    if (button === 0) {
        document.querySelector('nav > button:first-child').classList.add('disabled')
    } else {
        document.querySelector('nav > button:first-child').classList.remove('disabled')
    }
}

/*
loop through the array of buttons and on click show me answers and disabled the button from being click again.
*/
[...review].forEach(el => {
    el.addEventListener('click', function (ev) {
        let rationale = document.getElementsByClassName('rationale');
        [...rationale].forEach(el => {
            if (el.classList.contains('display')) {
                el.classList.remove('display');
                ev.target.classList.add('disabled')
            }
        });
        correct()
    })
})

/*
correct function does the following... 
    note: correct runs on the review click event on line 177
    returns the ids inside each ol tag
    inside the for loop we do the following...
         we extract the data-correct attribute value
         we extract the ol children (li) based on the question(id) we are on
    for each loop does the following...
        increment i by 1 since our li starts at 0
        we check each time if the answ string includes any of the li indexes 
            if yes ?
                add some accessibility functions that lets the user know these are correct
            if no ?
                add some accessibility functions that lets the user know these are incorrect
                
*/
function correct() {
    // console.log('inside correct', questionBlock.questionBlock)
    const question = document.querySelectorAll('[id^="_"]');
    for (let i = 0; i < question.length; i++) {
        let currentQuestion = question[i];
        let answ = currentQuestion.attributes['data-correct'].value;
        let li = currentQuestion.children;
        [...li].forEach((el, i) => {
            i = i + 1;
            if (answ.includes(i)) {
                el.innerHTML = `<span><i class="fas fa-square"></i></span><span class="correct"><span class="offscreen"> Correct Answer</span>${el.children[0].innerHTML}</span>`;
            } else {
                el.innerHTML = `<span><span class="offscreen"> Incorrect Answer</span>${el.children[0].innerHTML}</span>`;
            }
        });

    }
}


