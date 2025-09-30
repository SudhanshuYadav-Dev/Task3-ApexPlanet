//Quiz Questions
const quizData=[
    {
        question:"1.What does HTML stands for?",
        options:[
            "Hypertext Machine Language",
            "Hyper Transfer Markup Language",
            "Hypertext Markup Language",
            "Hyperlink Text Markup Language"
        ],
        correct:2,
    },
    {
        question:"2.Which part of the computer is responsible for executing instructions?",
        options:[
            "CPU (Central Processing Unit)",
            "Memory",
            "Input Devices",
            "Output Devices"
        ],
        correct:0,
    },
    {
        question:"3.Which of the following is NOT a programming language?",
        options:[
            "C++",
            "Java",
            "Python",
            "CSS"
        ],
        correct:3,
    },
    {
        question:"4.What is the full form of RAM? ",
        options:[
            "Random Access Memory",
            "Read Access Memory",
            "Random Application Memory",
            "Read Application Memory"
        ],
        correct:0,
    },
    {
        question:"5.In C++, what symbol is used to declare preprocessor directives?",
        options:[
            "&",
            "#",
            "@",
            "*"
        ],
        correct:1,
    },
]
let currentQuiz=0;
let score=0;

const quiz_box=document.querySelector('.quiz_content');
const answerEle=document.querySelectorAll(".answer");
const [questionEle, option_1, option_2, option_3, option_4]=document.querySelectorAll(".q_title,#option_1,#option_2,#option_3,#option_4");
const submitBtn=document.getElementById("submit");

const loadQuiz=()=>{
    const {question,options}=quizData[currentQuiz];
    questionEle.innerHTML=question;
    options.forEach((currOp,index)=>{
        (window[`option_${index+1}`].innerHTML=currOp);
    })
}
loadQuiz();

const getSelectedOption=()=>{
    let ans_index;
    answerEle.forEach((currOp,index)=>{
        if(currOp.checked){
            ans_index=index;
        }
    })
    return ans_index;
};

const deselectedAnswers=()=>{
    return answerEle.forEach((currEle)=> currEle.checked=false)

}

submitBtn.addEventListener('click',()=>{
    const selectedOptionIndex=getSelectedOption();
    console.log(selectedOptionIndex);
    if(selectedOptionIndex!==undefined && selectedOptionIndex===quizData[currentQuiz].correct){
        score++;
    }
    currentQuiz++;
    if(currentQuiz<quizData.length){
        deselectedAnswers();
        loadQuiz();
    }else{
        quiz_box.innerHTML=`
        <h2 class="q_title">🏆Your Score: ${score}/${quizData.length} Correct Answers</h2>
        <p>Congratulations on completing the quiz! 🎉</p>
        <button id="submit" onclick="location.reload()">Play Again ⟳</button>
        `;
    }
})

