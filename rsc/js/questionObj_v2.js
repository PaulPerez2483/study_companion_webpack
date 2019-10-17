let questionObject = [
    {
        scenario: {
            passage: `<div role="region" aria-label="passage">
                        <div class="passage_holder">
                            <p><strong>Questions 1<span aria-hidden="true">‐</span>
            <span class="offscreen"> of </span>2</span> refer to the following scenario.</strong></p>
            <p>
                An upper-elementary school teacher is having students read and discuss the following text
                and
                table.
            </p>
            <p class="center"><strong>How Old Would You Be on Mars?</strong></p>
            <p>
                You know that a year on Earth is 365 days long, which is the amount of time it takes for
                Earth
                to orbit once around the Sun. But a year on Mars is 687 Earth days long. That’s how long it
                takes Mars to orbit the Sun.
            </p>
            <p>
                Imagine that people lived on Mars. A typical fifth grader would be only six Mars years old
                because a Mars year is almost twice as long as an Earth year. If you lived on Mars, you
                would have a Mars birthday only once every 687 Earth days.
            </p>
            </div></div>
            <div class="question-holder"></div>`
        },

        questionBlock: [{
            id: 1,
            a11y: `<p>How to Answer the Question Below</p>
                    <p>
                        This is a multiple-choice question with three correct answers. You
                        must select all three correct answers—and no incorrect answers—to
                        earn credit for the question. In the actual test, the answer choices
                        appear next to empty check boxes.
                    </p>
                `,
            question: `<p>During a discussion of the table, a student states, “It would take 687 days to get from Mars to the Sun.” Which of the following visual representations best helps address the student’s confusion by illustrating a topic that is critical to understanding the text and table but is not fully explained in them?</p>`,
            answers: ['7 + 7 + 7 + 7', '8 + 10 + 10', '14 + 14', '20 + 8'],
            correct: ['B', 'C', 'D'],
            rationale: `<p>The correct answers are (B), (C), and (D).</p>`
        },
        {
            id: 2,
            a11y: `
                    <p>How to Answer the Question Below</p>
                    <p>
                        This is a “select all that apply” question. You should select one, two, or
                        all three of the answer choices—however many are correct. You earn credit for 
                        the question only if you select all of the choices that are correct answers. 
                        In the actual test, the answer choices appear next to empty check boxes. 
                        Click on a box to select the choice next to it; this causes an “x” to appear 
                        in the box. If you change your mind, click the box again to remove the “x.
                    </p>
                `,
            question: `<p>Which of the following questions requires students to integrate information from both the text and the table when responding?</p>`,
            answers: ['Is Earth closer to the Sun than Jupiter is?', 'Is a year on Saturn longer than a year on Earth?', 'How is a planet’s orbit connected to the length of the year on the planet?', 'If you are 10 years old in Earth years, how old are you in Mars years?'],
            correct: ['A'],
            rationale: `<p>The correct answers is (A).</p>`
        }
        ],
    },
    {
        questionBlock: [{
            id: 3,
            a11y: `
                    <p>How to Answer the Question Below</p>
                    <p>
                        This is a multiple-choice question with three correct answers. You
                        must select all three correct answers—and no incorrect answers—to
                        earn credit for the question. In the actual test, the answer choices
                        appear next to empty check boxes.
                    </p>
                `,
            question: `<p>Which question type best matches the question “What holds the planets in their orbits?” </p>`,
            answers: ['Right There', 'Think and Search', 'Author and You', 'On My Own'],
            correct: ['B'],
            rationale: `<p>The correct answers is (B).</p>`
        }]

    }
]