const answersObj = [
  {
    id: 1,
    type: `multi`,
    y11: `
    <p>How to Answer the Question Below</p>
      <p>
        This is a multiple-choice question with three correct answers. You
        must select all three correct answers—and no incorrect answers—to
        earn credit for the question. In the actual test, the answer choices
        appear next to empty check boxes.
      </p>
      `,
    title: `Practice with Sample Test Questions`,
    question: `
    <p>
      Ms. Dale wants her students to develop mental strategies that can
      be used to find the answer to addition and subtraction problems,
      including composing and decomposing numbers based on place value.
    </p>
    <p>
      In one lesson, she asks her students to find numbers whose sum or
      difference is 28. She then has seven students share their answers
      as she writes them on the board.
    </p>
    <p>
      Which <u>three</u> of the following student answers are most
      closely related to Ms. Dale’s goal that students will be able to
      compose and decompose numbers based on place value
    </p>
    `,
    answers: [
      `
    <ol class="answers" role="region" aria-label="Response">
        <li><span>7 + 7 + 7 + 7</span></li>
        <li><span>8 + 10 + 10</span></li>
        <li><span>14 + 14</span></li>
        <li><span>20 + 8</span></li>
        <li><span>20 + 10 − 2</span></li>
        <li><span>25 + 3</span></li>
        <li><span>39 − 11</span></li>
    </ol>`
    ],
    correct: ['B', 'D', 'E'],
    rationale: `
    <p>
      The correct answers are (B), (D), and (E). A decomposition of numbers
      based on place value means that the number is written as the sum or
      difference of tens and ones. In (B), the number 28 is decomposed as
      the sum of 2 tens, 10 +10 , and 8 ones. In (D), the number 28 is
      decomposed as the sum of 2 tens, 20, and 8 ones. In (E), the number 28
      is decomposed as the difference of 3 tens, written as the sum of 2
      tens and 1 ten, and 2 ones. (A) is incorrect because the number 28 is
      decomposed as a repeated addition of the number 7, so this
      decomposition is related to skip counting. (C) is incorrect because
      the number 28 is decomposed as the sum of 14 and itself, so this
      decomposition is related to doubles. (F) and (G) are incorrect because
      although both answers are decompositions of 28, neither of the numbers
      in either decomposition is a multiple of 10.
    </p>`
  },
  {
    id: 2,
    type: `multi`,
    y11: `
    <p>How to Answer the Question Below</p>
    <p>
      This is a multiple-choice question with three correct answers. You
      must select all three correct answers—and no incorrect answers—to
      earn credit for the question. In the actual test, the answer choices
      appear next to empty check boxes.
      </p>
      `,
    title: `Practice with Sample Test Questions`,
    question: `
    <p>
      Ms. Dale wants her students to develop mental strategies that can
      be used to find the answer to addition and subtraction problems,
      including composing and decomposing numbers based on place value.
    </p>
    <p>
      In one lesson, she asks her students to find numbers whose sum or
      difference is 28. She then has seven students share their answers
      as she writes them on the board.
    </p>
    <p>
      Which <u>three</u> of the following student answers are most
      closely related to Ms. Dale’s goal that students will be able to
      compose and decompose numbers based on place value
    </p>
    `,
    answers: `
    <ol class="answers" role="region" aria-label="Response">
      <li><span>7 + 7 + 7 + 7</span></li>
      <li><span>8 + 10 + 10</span></li>
      <li><span>14 + 14</span></li>
      <li><span>20 + 8</span></li>
    </ol>`,
    correct: ['B'],
    rationale: `
    <p>
      The correct answers are (B), (D), and (E).
    </p>
    `
  },
  {
    id: 3,
    type: `multi`,
    Interstitial: {
      question: `<p class="bold">Questions 10–13 refer to the following scenario.</p>`,
      passage: `
      <p> An upper-elementary school teacher is having students read and discuss the following text and table.</p>
      <p class="bold">How Old Would You Be on Mars?</p>
      <p>You know that a year on Earth is 365 days long, which is the amount of time it takes for Earth to orbit once around the Sun. But a year on Mars is 687 Earth days long. That’s how long it takes Mars to orbit the Sun.</p>
      <p>Imagine that people lived on Mars. A typical fifth grader would be only six Mars years old because a Mars year is almost twice as long as an Earth year. If you lived on Mars, you would have a Mars birthday only once every 687 Earth days.</p>
      <p>Each planet takes a different amount of time to orbit the Sun. A year on another planet depends on how long it takes that planet to orbit. The table below shows the number of Earth days each planet takes to orbit the Sun. It also shows how far from the Sun each planet orbits.
      </p>
      <table summary="">
      <thead>
  <tr>
   <th scope="col">Planet</th>
   <th scope="col">Distance from the Sun</th>
   <th scope="col">Time the planet takes to make orbit</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Mercury</td>
   <td>About 58 million kilometers</td>
   <td>88 Earth days </td>
  </tr>
  <tr>
   <td>Venus</td>
   <td>About 108 million kilometers</td>
   <td>225 Earth days</td>
  </tr>
  <tr>
   <td>Earth</td>
   <td>About 150 million kilometers</td>
   <td>365 Earth days</td>
  </tr>
  <tr>
   <td>Mars</td>
   <td>About 228 million kilometers</td>
   <td>687 Earth days </td>
  </tr>
  <tr>
   <td>Jupiter</td>
   <td>About 778 million kilometers</td>
   <td>4,330 Earth days</td>
  </tr>
  <tr>
   <td>Saturn</td>
   <td>About 1,429 million kilometers</td>
   <td>10,756 Earth days</td>
  </tr>
  <tr>
   <td>Uranus</td>
   <td>About 2,871 million kilometers</td>
   <td>30,687 Earth days</td>
  </tr>
  <tr>
   <td>Neptune</td>
   <td>About 4,504 million kilometers</td>
   <td>60,190 Earth days</td>
  </tr>
 </tbody>
</table>`
    },
    y11: `
    <p>How to Answer the Question Below</p>
    <p>
    This is a standard multiple-choice question with four answer choices. However, the choices are in the form of graphics. On the actual test, most graphics can be magnified for easier viewing. 
      </p>
      `,
    title: `Practice with Sample Test Questions`,
    question: `
    <p>
    During a discussion of the table, a student states, “It would take 687 days to get from Mars to the Sun.” Which of the following visual representations best helps address the student’s confusion by illustrating a topic that is critical to understanding the text and table but is not fully explained in them?
    </p>

    `,
    answers: `
    <ol class="answers" role="region" aria-label="Response">
      <li><span>image A</span></li>
      <li><span>image B</span></li>
      <li><span>image C</span></li>
      <li><span>image D</span></li>
    </ol>`,
    correct: ['A'],
    rationale: `
    <p>
    The correct answer is (A). The student’s statement demonstrates a misunderstanding of what it means to “orbit”; the student seems to be confusing Mars’s orbit around the Sun with a trip from Mars to the Sun. The diagram in (A) is the only one that demonstrates the path the planets take around the Sun, which helps to illustrate the meaning of “orbit” for the student. The diagrams in the other answer choices do not provide a visual for the student that illustrates the idea of “orbit.” Rather, the diagram in (B) shows the relative size of the planets. The diagram in (C) shows the order of the planets in the solar system, and the one in (D) shows the distance of each planet from the Sun in millions of miles.
    </p>
    <table border="1" class="rationale_table">
 <tbody class="left_col">
  <tr>
   <th scope="row" class="bold">Content Knowledge Type</th>
   <td>Specialized Content Knowledge</td>
  </tr>
  <tr>
   <th scope="row" class="bold">Task of Teaching ELA</th>
   <td> 9. Analyzing student reading, writing, speaking, or listening to identify patterns of thinking, cuing systems, misconceptions, and partial conceptions</td>
  </tr>
  <tr>
   <th scope="row" class="bold">Topic</th>
   <td>III. Constructing Meaning</td>
  </tr>
  <tr>
   <th scope="row" class="bold">Subtopic</th>
   <td> A. Key Ideas and Details</td>
  </tr>
 </tbody>
</table>

    `
  }
];

// global HTML elements variables
const review = document.querySelectorAll('nav > button:nth-child(2)');
const body = document.getElementsByTagName('BODY')[0];
const next = document.getElementsByClassName('$next'); // returns a fake array of buttons
const previous = document.getElementsByClassName('$previous'); // returns a fake array of buttons
// console.log(next);
// console.log(previous);

// checks the property of local storage object if found - don't do anything if not set qNum to local storage
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
  el.addEventListener('click', function() {
    let questionNum = localStorage.getItem('qNum');
    questionNum++;
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
  el.addEventListener('click', function() {
    let questionNum = localStorage.getItem('qNum');
    if (questionNum <= 0) {
      console.log('less than zero');
    } else {
      questionNum--;
      localStorage.setItem('qNum', questionNum);
      reset();
      insertData();
    }
  });
});

/* when the pages load do the following
  - get qNum from local storage and convert that string to a number
  - get all the html elements we need to insert the data 
  - insert the answerObj's data into the html elements variables local to the insertData function 

*/
window.addEventListener('load', insertData);

function insertData() {
  let questionNum = Number(localStorage.getItem('qNum'));
  // console.log(questionNum);
  const x = document.getElementById('$x');
  const y = document.getElementById('$y');
  const xNum = document.getElementById('$questionNum');
  const ay11 = document.querySelector(
    '[ aria-label="Orientation Information"]'
  );
  const title = document.querySelector('[class="h2Color"]');
  const question = document.querySelector('[class="flex_right"]');
  const answers = document.querySelector('[aria-label="Response"]');
  const rational = document.querySelector('[aria-label="rationale"]');
  const answers_holder = document.querySelector('[class="answers_holder"]');

  x.innerHTML = answersObj[questionNum].id;
  y.innerHTML = answersObj.length;
  xNum.innerHTML = `${answersObj[questionNum].id}.`;
  ay11.innerHTML = answersObj[questionNum].y11;
  title.innerHTML = answersObj[questionNum].title;
  question.innerHTML = answersObj[questionNum].question;
  answers_holder.innerHTML = answersObj[questionNum].answers;
  rational.innerHTML = answersObj[questionNum].rationale;
}

// loop trough the array of buttons and add an event listener that invokes the correctAnswers function
[...review].forEach(el => {
  el.addEventListener('click', correctAnswers);
});
[...review].forEach(el => {
  el.addEventListener('keypress', correctAnswers);
});

function correctAnswers(ev) {
  // console.dir(ev.target);
  // console.log(ev.which, ev.keyCode);
  let key = ev.which || ev.keyCode;
  // console.log(key);
  if (key === '13') {
    ev.target.classList.add('disabled');
  } else {
    ev.target.classList.add('disabled');
  }

  ev.stopPropagation();

  const answers = document.querySelectorAll('.answers > li');
  const showRationale = document.querySelector('.rationale').classList; // returns a fake array of classes

  let numArr = [];
  // convert letters into NUmbers
  let questionNum = Number(localStorage.getItem('qNum'));

  answersObj[questionNum].correct.filter(el => {
    numArr.push(parseInt(el, 36) - 9); // returns each letter into a number
  });
  //   console.log(numArr, numArr);
  //   removes and add rationale on review click
  if (showRationale.contains('display')) {
    correct(answers, numArr);
    showRationale.remove('display');
  }
  //   console.log(showRationale);
  //   console.log(answers);
  //   console.dir(ev);
}

function correct(objAns, objNumArr) {
  const ol = document.querySelectorAll('ol.answers > li');
  console.log('li : ', ol);
  const span = '<span class="offscreen"> Correct Answer</span>';
  [...objAns].forEach((el, i) => {
    if (objNumArr.includes(i + 1)) {
      console.log(el.children[0].innerHTML);
      el.innerHTML = `<span><i class="fas fa-square"></i></span><span class="correct"><span class="offscreen"> Correct Answer</span>${el.children[0].innerHTML}</span>`;
      // el.setAttribute('aria-label', 'correct answer');
    } else {
      el.innerHTML = `<span><span class="offscreen"> Incorrect Answer</span>${el.children[0].innerHTML}</span>`;
    }
  });
}

// reset - hide rationale - active review link
function reset() {
  document.querySelector('[aria-label="rationale"]').classList.add('display');

  document
    .querySelectorAll('nav > button:nth-child(2)')[0]
    .classList.remove('disabled');
}

/* checks to see if an item type has an interstitial 
  - if yes, return the obj base on the questionNum in local storage and the obj's id 
*/
function interstitial(obj) {
  let questionNum = Number(localStorage.getItem('qNum'));
  console.log('current question num ', questionNum);
  let int = [];
  obj.forEach(el => {
    console.log(el.id, questionNum);
    if (el.Interstitial !== undefined && questionNum === el.id - 1) {
      // console.log(el.Interstitial.question);
      // console.log(el.Interstitial.passage);
      int.push(el.Interstitial.question);
      int.push(el.Interstitial.passage);
    }
  });
  if (int.length > 0) {
    let passageDiv = document.createElement('div');
    let [question, passage] = int;
    passageDiv.setAttribute('role', 'region');
    passageDiv.setAttribute('aria-label', 'Passage');
    passageDiv.className = 'passage_content';
    passageDiv.append((innerHTML = question));
    passageDiv.append((innerHTML = passage));
    console.log(passageDiv);
  }
  console.log('dont panic i dont have an interstial page');
}

interstitial(answersObj);
