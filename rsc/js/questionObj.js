let questionObject = [
    {
        scenario: {
            passage: `<div role="region" aria-label="passage">
                        <div class="passage_holder">
                        <h2 class="h2Color">Reading and Language Arts — Applied CKT Sample Test Questions</h2>

                        <p class="italic">The sample questions that follow are examples of the kinds of questions that are on the test. They are not, however, 
                        representative of the entire scope of the test in either content or difficulty. Answers with rationales follow the questions,
                         along with information about the content topic, subtopic, and task of teaching targeted in each question.
                        </p>
                        <span id="hideMe">
                        <input type="checkbox" id="show-all">
                        <label for="show-all">Show all Answers and Rationales</label>
                        </span>

                        <p><strong>Directions:</strong>
                        Select the best answer or answers for each question below. Questions in formats that may be unfamiliar are followed by a note titled “How to Answer the Question Above.”
                        </p>
                  

                        </div>
                     </div>
                    <div class="question-holder"></div>`
        },

        questionBlock: [{
            id: 1,
            a11y: `<p>How to Answer the Question Below</p>
                    <p>
                        How to Answer the Question Above This is a “select all that apply” question. You should select one, two, 
                        or all three of the answer choices—however many are correct. You earn credit for the question only if you
                        select all of the choices that are correct answers. In the actual test, the answer choices appear next to 
                        empty check boxes. Click on a box to select the choice next to it; this causes an “x” to appear in the box.
                        If you change your mind, click the box again to remove the “x.”
                    </p>
                `,
            question: `<p>A teacher is administering an informal reading assessment that includes the following sentences.</p>
                         <div class="questionWpassage">
                            <p>Monkeys like to play together. They wrestle and roll.</p>
                            <p>When reading the sentences, one student says the word “wiggle” instead of “wrestle.” The student is
                             likely using which of the following cuing systems?</p>
                            <p>Select <u>all</u> that apply</p>
                         </div>`,
            answers: ['Semantic', 'Syntactic', 'Graphophonemic'],
            correct: ['A', 'B', 'C'],
            rationale: `<p> The correct answers are (A), (B), and (C). “Wiggle” makes sense in the sentence, suggesting 
                            that the student may be using semantic cuing (A). Because “wiggle” is a verb, it fits the sentence
                            syntactically (B), so the student may also be using syntactic cuing. Finally, “wiggle” looks similar
                            to “wrestle,” since it shares the first letter and the last two letters and is approximately the same
                            length, suggesting that the student may also be using graphophonemic cuing (C).</p>`
        },
        {
            id: 2,
            a11y: `<p>How to Answer the Question Below</p>
                    <p>
                    This is a multiple-choice question with two correct answers. You must select both correct answers—and 
                    no incorrect answers—to earn credit for the question. In the actual test, the answer choices appear next
                     to empty check boxes. Click on a box to select the answer choice next to it; this causes an “x” to appear
                      in the box. If you change your mind, click the box again to remove the “x.  
                    </p>`,

            question: `<p>Which two of the following words are appropriate to include in a lesson on the different phonemes created by r-controlled vowels? </p>`,
            answers: ['Angry', 'Bridge', 'Bird', 'Real', 'Silver'],
            correct: ['C', 'E'],
            rationale: `<p> The correct answers are (C) and (E).  The /ir/ sound in “bird” (C), similar to the same sound in 
                            “stir,” “third,” and “sir,” is an r-controlled sound. ”Silver” (E), also contains an r-controlled
                             /er/ sound, similar to the same sound as in “winter,” “her,” and “fern.” Answer choices (A) “angry,”
                             (B) “bridge,” and (D) “real” have vowels following the r sound, not before it, which means they are 
                             not r-controlled sounds. 
            </p>`
        },
        {
            id: 3,
            a11y: `<p>How to Answer the Question Below</p>
                    <p>
                    This is a “select all that apply” question. You should select one, two, or all three of the answer choices—however
                    many are correct. You earn credit for the question only if you select all of the choices that are correct answers.
                    In the actual test, the answer choices appear next to empty check boxes. Click on a box to select the choice next
                    to it; this causes an “x” to appear in the box. If you change your mind, click the box again to remove the “x.”  
                    </p>
                `,
            question: `<p>A student uses a “W” to represent the initial sound in the word “doughnut.” In this scenario, which of the following patterns of thinking is the student demonstrating?
            </p><p>Select <u>all</u> that apply</p>`,
            answers: [' Believing that each sound can be represented by only one letter', ' Thinking that the position of a letter within a word does not affect the sound it makes ', ' Confusing a sound in a letter name with a sound represented by the letter'],
            correct: ['C'],
            rationale: `<p> The correct answer is (C) only. The student’s use of “w” to represent the /d/ in “doughnut” suggests 
                            that the student has concluded that because the letter name for “w” starts with the sound /d/ 
                            (as in “double-u”), the correct letter to represent /d/ is “w.” The substitution does not suggest a 
                            misunderstanding about the impact of position on sound (B) or about how many letters can represent a 
                            single sound (A).  
            </p>`
        },
        {
            id: 4,
            a11y: `<p>How to Answer the Question Below</p>
                    <p>
                    This is a “select all that apply” question. You should select one, two, or all three of the answer choices—however
                    many are correct. You earn credit for the question only if you select all of the choices that are correct answers.
                    In the actual test, the answer choices appear next to empty check boxes. Click on a box to select the choice next
                    to it; this causes an “x” to appear in the box. If you change your mind, click the box again to remove the “x.”  
                    </p>
                `,
            question: `<p>A student uses a “W” to represent the initial sound in the word “doughnut.” In this scenario, which of the following patterns of thinking is the student demonstrating?
            </p><p>Select <u>all</u> that apply</p>`,
            answers: [' Believing that each sound can be represented by only one letter', ' Thinking that the position of a letter within a word does not affect the sound it makes ', ' Confusing a sound in a letter name with a sound represented by the letter'],
            correct: ['C'],
            rationale: `<p> The correct answer is (C) only. The student’s use of “w” to represent the /d/ in “doughnut” suggests 
                            that the student has concluded that because the letter name for “w” starts with the sound /d/ 
                            (as in “double-u”), the correct letter to represent /d/ is “w.” The substitution does not suggest a 
                            misunderstanding about the impact of position on sound (B) or about how many letters can represent a 
                            single sound (A).  
            </p>`
        },
        {
            id: 5,
            a11y: `<p>How to Answer the Question Below</p>
                    <p>
                    This is a “select all that apply” question. You should select one, two, or all three of the answer choices—however
                    many are correct. You earn credit for the question only if you select all of the choices that are correct answers.
                    In the actual test, the answer choices appear next to empty check boxes. Click on a box to select the choice next
                    to it; this causes an “x” to appear in the box. If you change your mind, click the box again to remove the “x.”  
                    </p>
                `,
            question: `<p>A student uses a “W” to represent the initial sound in the word “doughnut.” In this scenario, which of the following patterns of thinking is the student demonstrating?
            </p><p>Select <u>all</u> that apply</p>`,
            answers: [' Believing that each sound can be represented by only one letter', ' Thinking that the position of a letter within a word does not affect the sound it makes ', ' Confusing a sound in a letter name with a sound represented by the letter'],
            correct: ['C'],
            rationale: `<p> The correct answer is (C) only. The student’s use of “w” to represent the /d/ in “doughnut” suggests 
                            that the student has concluded that because the letter name for “w” starts with the sound /d/ 
                            (as in “double-u”), the correct letter to represent /d/ is “w.” The substitution does not suggest a 
                            misunderstanding about the impact of position on sound (B) or about how many letters can represent a 
                            single sound (A).  
            </p>`
        },
        {
            id: 6,
            a11y: `<p>How to Answer the Question Below</p>
                    <p>
                    This is a “select all that apply” question. You should select one, two, or all three of the answer choices—however
                    many are correct. You earn credit for the question only if you select all of the choices that are correct answers.
                    In the actual test, the answer choices appear next to empty check boxes. Click on a box to select the choice next
                    to it; this causes an “x” to appear in the box. If you change your mind, click the box again to remove the “x.”  
                    </p>
                `,
            question: `<p>A student uses a “W” to represent the initial sound in the word “doughnut.” In this scenario, which of the following patterns of thinking is the student demonstrating?
            </p><p>Select <u>all</u> that apply</p>`,
            answers: [' Believing that each sound can be represented by only one letter', ' Thinking that the position of a letter within a word does not affect the sound it makes ', ' Confusing a sound in a letter name with a sound represented by the letter'],
            correct: ['C'],
            rationale: `<p> The correct answer is (C) only. The student’s use of “w” to represent the /d/ in “doughnut” suggests 
                            that the student has concluded that because the letter name for “w” starts with the sound /d/ 
                            (as in “double-u”), the correct letter to represent /d/ is “w.” The substitution does not suggest a 
                            misunderstanding about the impact of position on sound (B) or about how many letters can represent a 
                            single sound (A).  
            </p>`
        },
        {
            id: 7,
            a11y: `<p>How to Answer the Question Below</p>
                    <p>
                    This is a “select all that apply” question. You should select one, two, or all three of the answer choices—however
                    many are correct. You earn credit for the question only if you select all of the choices that are correct answers.
                    In the actual test, the answer choices appear next to empty check boxes. Click on a box to select the choice next
                    to it; this causes an “x” to appear in the box. If you change your mind, click the box again to remove the “x.”  
                    </p>
                `,
            question: `<p>A student uses a “W” to represent the initial sound in the word “doughnut.” In this scenario, which of the following patterns of thinking is the student demonstrating?
            </p><p>Select <u>all</u> that apply</p>`,
            answers: [' Believing that each sound can be represented by only one letter', ' Thinking that the position of a letter within a word does not affect the sound it makes ', ' Confusing a sound in a letter name with a sound represented by the letter'],
            correct: ['C'],
            rationale: `<p> The correct answer is (C) only. The student’s use of “w” to represent the /d/ in “doughnut” suggests 
                            that the student has concluded that because the letter name for “w” starts with the sound /d/ 
                            (as in “double-u”), the correct letter to represent /d/ is “w.” The substitution does not suggest a 
                            misunderstanding about the impact of position on sound (B) or about how many letters can represent a 
                            single sound (A).  
            </p>`
        }
        ],
    },
    {
        scenario: {
            passage: `<div role="region" aria-label="passage">
                        <div class="passage_holder">
                        <h2 class="h2Color">Reading and Language Arts — Applied CKT Sample Test Questions</h2>

                        <p class="italic">The sample questions that follow are examples of the kinds of questions that are on the test. They are not, however, 
                        representative of the entire scope of the test in either content or difficulty. Answers with rationales follow the questions,
                         along with information about the content topic, subtopic, and task of teaching targeted in each question.
                        </p>
                        <span id="hideMe">
                        <input type="checkbox" id="show-all">
                        <label for="show-all">Show all Answers and Rationales</label>
                        </span>

                        <p><strong>Directions:</strong>
                        Select the best answer or answers for each question below. Questions in formats that may be unfamiliar are followed by a note titled “How to Answer the Question Above.”
                        </p>
                  

                        </div>
                     </div>
                    <div class="question-holder"></div>`
        },

        questionBlock: [{
            id: 8,
            a11y: `<p>How to Answer the Question Below</p>
                    <p>
                        How to Answer the Question Above This is a “select all that apply” question. You should select one, two, 
                        or all three of the answer choices—however many are correct. You earn credit for the question only if you
                        select all of the choices that are correct answers. In the actual test, the answer choices appear next to 
                        empty check boxes. Click on a box to select the choice next to it; this causes an “x” to appear in the box.
                        If you change your mind, click the box again to remove the “x.”
                    </p>
                `,
            question: `<p>A teacher is administering an informal reading assessment that includes the following sentences.</p>
                         <div class="questionWpassage">
                            <p>Monkeys like to play together. They wrestle and roll.</p>
                            <p>When reading the sentences, one student says the word “wiggle” instead of “wrestle.” The student is
                             likely using which of the following cuing systems?</p>
                            <p>Select <u>all</u> that apply</p>
                         </div>`,
            answers: ['Semantic', 'Syntactic', 'Graphophonemic'],
            correct: ['A', 'B', 'C'],
            rationale: `<p> The correct answers are (A), (B), and (C). “Wiggle” makes sense in the sentence, suggesting 
                            that the student may be using semantic cuing (A). Because “wiggle” is a verb, it fits the sentence
                            syntactically (B), so the student may also be using syntactic cuing. Finally, “wiggle” looks similar
                            to “wrestle,” since it shares the first letter and the last two letters and is approximately the same
                            length, suggesting that the student may also be using graphophonemic cuing (C).</p>`
        },
        {
            id: 9,
            a11y: `<p>How to Answer the Question Below</p>
                    <p>
                    This is a multiple-choice question with two correct answers. You must select both correct answers—and 
                    no incorrect answers—to earn credit for the question. In the actual test, the answer choices appear next
                     to empty check boxes. Click on a box to select the answer choice next to it; this causes an “x” to appear
                      in the box. If you change your mind, click the box again to remove the “x.  
                    </p>`,

            question: `<p>Which two of the following words are appropriate to include in a lesson on the different phonemes created by r-controlled vowels? </p>`,
            answers: ['Angry', 'Bridge', 'Bird', 'Real', 'Silver'],
            correct: ['C', 'E'],
            rationale: `<p> The correct answers are (C) and (E).  The /ir/ sound in “bird” (C), similar to the same sound in 
                            “stir,” “third,” and “sir,” is an r-controlled sound. ”Silver” (E), also contains an r-controlled
                             /er/ sound, similar to the same sound as in “winter,” “her,” and “fern.” Answer choices (A) “angry,”
                             (B) “bridge,” and (D) “real” have vowels following the r sound, not before it, which means they are 
                             not r-controlled sounds. 
            </p>`
        },
        {
            id: 10,
            a11y: `<p>How to Answer the Question Below</p>
                    <p>
                    This is a “select all that apply” question. You should select one, two, or all three of the answer choices—however
                    many are correct. You earn credit for the question only if you select all of the choices that are correct answers.
                    In the actual test, the answer choices appear next to empty check boxes. Click on a box to select the choice next
                    to it; this causes an “x” to appear in the box. If you change your mind, click the box again to remove the “x.”  
                    </p>
                `,
            question: `<p>A student uses a “W” to represent the initial sound in the word “doughnut.” In this scenario, which of the following patterns of thinking is the student demonstrating?
            </p><p>Select <u>all</u> that apply</p>`,
            answers: [' Believing that each sound can be represented by only one letter', ' Thinking that the position of a letter within a word does not affect the sound it makes ', ' Confusing a sound in a letter name with a sound represented by the letter'],
            correct: ['C'],
            rationale: `<p> The correct answer is (C) only. The student’s use of “w” to represent the /d/ in “doughnut” suggests 
                            that the student has concluded that because the letter name for “w” starts with the sound /d/ 
                            (as in “double-u”), the correct letter to represent /d/ is “w.” The substitution does not suggest a 
                            misunderstanding about the impact of position on sound (B) or about how many letters can represent a 
                            single sound (A).  
            </p>`
        },
        {
            id: 11,
            a11y: `<p>How to Answer the Question Below</p>
                    <p>
                    This is a “select all that apply” question. You should select one, two, or all three of the answer choices—however
                    many are correct. You earn credit for the question only if you select all of the choices that are correct answers.
                    In the actual test, the answer choices appear next to empty check boxes. Click on a box to select the choice next
                    to it; this causes an “x” to appear in the box. If you change your mind, click the box again to remove the “x.”  
                    </p>
                `,
            question: `<p>A student uses a “W” to represent the initial sound in the word “doughnut.” In this scenario, which of the following patterns of thinking is the student demonstrating?
            </p><p>Select <u>all</u> that apply</p>`,
            answers: [' Believing that each sound can be represented by only one letter', ' Thinking that the position of a letter within a word does not affect the sound it makes ', ' Confusing a sound in a letter name with a sound represented by the letter'],
            correct: ['C'],
            rationale: `<p> The correct answer is (C) only. The student’s use of “w” to represent the /d/ in “doughnut” suggests 
                            that the student has concluded that because the letter name for “w” starts with the sound /d/ 
                            (as in “double-u”), the correct letter to represent /d/ is “w.” The substitution does not suggest a 
                            misunderstanding about the impact of position on sound (B) or about how many letters can represent a 
                            single sound (A).  
            </p>`
        },
        {
            id: 12,
            a11y: `<p>How to Answer the Question Below</p>
                    <p>
                    This is a “select all that apply” question. You should select one, two, or all three of the answer choices—however
                    many are correct. You earn credit for the question only if you select all of the choices that are correct answers.
                    In the actual test, the answer choices appear next to empty check boxes. Click on a box to select the choice next
                    to it; this causes an “x” to appear in the box. If you change your mind, click the box again to remove the “x.”  
                    </p>
                `,
            question: `<p>A student uses a “W” to represent the initial sound in the word “doughnut.” In this scenario, which of the following patterns of thinking is the student demonstrating?
            </p><p>Select <u>all</u> that apply</p>`,
            answers: [' Believing that each sound can be represented by only one letter', ' Thinking that the position of a letter within a word does not affect the sound it makes ', ' Confusing a sound in a letter name with a sound represented by the letter'],
            correct: ['C'],
            rationale: `<p> The correct answer is (C) only. The student’s use of “w” to represent the /d/ in “doughnut” suggests 
                            that the student has concluded that because the letter name for “w” starts with the sound /d/ 
                            (as in “double-u”), the correct letter to represent /d/ is “w.” The substitution does not suggest a 
                            misunderstanding about the impact of position on sound (B) or about how many letters can represent a 
                            single sound (A).  
            </p>`
        }
        ],
    },
    {
        scenario: {
            passage: `<div role="region" aria-label="passage">
                        <div class="passage_holder">
                        <h2 class="h2Color">Mathematics—Applied CKT  Sample Test Questions</h2>

                        <p class="italic">
                        The sample questions that follow are examples of the kinds of questions that are on the test. They are not, however, representative of the entire scope of the test in either content or difficulty. Answers with rationales follow the questions, along with information about the content topic, subtopic, and task of teaching targeted in each question.
                        </p>
                        <span id="hideMe">
                        <input type="checkbox" id="show-all">
                        <label for="show-all">Show all Rationales</label>
                        </span>
                        <p><strong>Directions:</strong>
                        Select the best answer or answers for each question below. Questions in formats that may be unfamiliar are followed by a note entitled “How to Answer the Question Above.”
                        </p>
                        </div>
                        
                     </div>
                    <div class="question-holder"></div>`
        },

        questionBlock: [{
            id: 13,
            a11y: `<p>How to Answer the Question Below</p>
                    <p> This is a multiple-choice question with three correct answers.
                        You must select all three correct answers—and no incorrect
                        answers—to earn credit for the question. In the actual test,
                        the answer choices appear next to empty check boxes. Click
                        on a box to select the answer choice next to it; this causes
                        an “x” to appear in the box. If you change your mind, click
                        the box again to remove the ‘x.”
                    </p>
                `,
            question: `<p>Which three of the following expressions are
            equivalent to 3,956 × 4 ?</p>`,
            answers: [' 3000 x 4 + 900 x 4 + 50 x 4 + 6 x 4', '(4000 x 4 - 100 x 4) + (60 x 4 - 4 x 4)', ' 4 x 3 + 4 x 9 + 4 x 5 + 4 x 6', ' 4,000 x 4 - 40 x 4 - 4 x 4', '3 x 1,000 x 4 + 95 x 100 x 4 + 6 x 1 x 4'],
            correct: ['A', 'B', 'D'],
            rationale: `<p>The correct answers are (A), (B), and (D). Since 3,956
            can be written as 3,000 + 900 + 50 + 6 , the given
            expression is equivalent to (3,000 + 900 + 50 + 6)× 4 .
            Applying the distributive property yields
            3,000 × 4 + 900 × 4 + 50 × 4 + 6 × 4 , which is the
            expression in (A). Since 3,956 can be written as
            3,900 + 56 , the given expression is equivalent to
            (3,900 + 56)× 4 . Applying the distributive property
            yields 3,900 × 4 + 56 × 4 . One can rewrite 3,900 as
            4,000 −100 and 56 as 60 − 4 , which yields the
            equivalent expression (4,000 −100)× 4 + (60 − 4)× 4 .
            Applying the distributive property again yields
            (4,000 −100)× 4 + (60 − 4)× 4 , which is the expression
            in (B). Since 3,956 can be written as 4,000 − 40 − 4 , the
            given expression is equivalent to (4,000 − 40 − 4)× 4 .
            Applying the distributive property yields
            4,000 × 4 − 40 × 4 − 4 × 4 , which is the expression in
            (D). Applying the distributive property to the
            expression in (C) yields 4 × (3 + 9 + 5+ 6) , which is
            equivalent to 4 × 23 , but this expression is not
            equivalent to the given expression. Since 6 ×1= 6 ,
            applying the distributive property to the expression in
            (E) yields (3 ×1,000 + 95×100 + 6)× 4 , which is
            equivalent to (3,000 + 9,500 + 6)× 4 . The sum of the
            numbers in the parentheses is 12,506; therefore, the
            expression in (E) is not equivalent to the given
            expression.</p>`
        },
        {
            id: 14,
            a11y: `<p>How to Answer the Question Below</p>
                    <p>
                    This is a multiple-choice question with two correct answers. You must select both correct answers—and 
                    no incorrect answers—to earn credit for the question. In the actual test, the answer choices appear next
                     to empty check boxes. Click on a box to select the answer choice next to it; this causes an “x” to appear
                      in the box. If you change your mind, click the box again to remove the “x.  
                    </p>`,

            question: `<p>Dora made a pile of 5 counters. Then Mr. Levy
                         asked her to add counters to her pile of 5 so
                         that the pile would have 7 counters. Dora
                         counted out 7 more counters and added them
                         to the pile of 5 counters.</p>

                        <p>Which of the following most likely explains the
                        reason behind Dora’s error?</p>`,
            answers: ['Dora does not fully understand one-toone correspondence between numbers and objects.',
                      'Dora does not yet have a concept of the quantity 7.',
                      'Dora does not yet understand that one quantity can be composed of two smaller quantities.',
                      'Dora does not yet know her number facts for sums greater than 10.'],
            correct: ['B'],
            rationale: `<p> The correct answer is (B). In the first solution, 4x and
            2 are added to get 6x , but the 4x term contains a
            variable, whereas the 2 is a constant term; it is incorrect
            to add 4x and 2 because they are not like terms.
            Similarly, in the second solution, 2x and 3 are added to
            get 5x , but 2x and 3 are not like terms, so this strategy
            is not valid. Therefore, understanding the importance of
            combining like terms is the answer choice that is most
            clearly highlighted by asking students to critique the
            two invalid strategies. 
            </p>`
        },
        ]
    },
    {
        questionBlock: [{
            id: 15,
            a11y: `
                    <p>How to Answer the Question Below</p>
                    <p>
                    This is a multiple-choice question with three correct answers.
                    You must select all three correct answers—and no incorrect
                    answers—to earn credit for the question. In the actual test,
                    the answer choices appear next to empty check boxes. Click
                    on a box to select the answer choice next to it; this causes
                    an “x” to appear in the box. If you change your mind, click
                    the box again to remove the “x.”
                    </p>
                `,
            question: `<p>Ms. Dale wants her students to develop
                    mental strategies that can be used to find the
                    answer to addition and subtraction problems,
                    including composing and decomposing
                    numbers based on place value.</p>
                    <p>In one lesson, she asks her students to find
                    numbers whose sum or difference is 28. She
                    then has seven students share their answers
                    as she writes them on the board.</p>
                    <p>Which three of the following student answers
                    are most closely related to Ms. Dale’s goal
                    that students will be able to compose and
                    decompose numbers based on place value?
                    </p>`,
            answers: ['7 + 7 + 7 + 7',
            '8 + 10 + 10',
            '14 + 14',
            '20 + 8',
            '20 + 10 − 2',
            '25 + 3',
            '39 − 11'],
            correct: ['B', 'D','E'],
            rationale: `<p> The correct answers are (B), (D), and (E). A
            decomposition of numbers based on place value
            means that the number is written as the sum or
            difference of tens and ones. In (B), the number 28 is
            decomposed as the sum of 2 tens, 10 +10 , and 8 ones.
            In (D), the number 28 is decomposed as the sum of 2
            tens, 20, and 8 ones. In (E), the number 28 is
            decomposed as the difference of 3 tens, written as the
            sum of 2 tens and 1 ten, and 2 ones. (A) is incorrect
            because the number 28 is decomposed as a repeated
            addition of the number 7, so this decomposition is
            related to skip counting. (C) is incorrect because the
            number 28 is decomposed as the sum of 14 and itself,
            so this decomposition is related to doubles. (F) and (G)
            are incorrect because although both answers are
            decompositions of 28, neither of the numbers in either
            decomposition is a multiple of 10.</p>`
        }]

    },
    
    {
        questionBlock: [{
            id: "DONT RENDER",

            a11y: ``,
            question: ``,
            answers: [''],
            correct: [''],
            rationale: ``
        }]

    }
]


module.exports = {
    questionObject
}