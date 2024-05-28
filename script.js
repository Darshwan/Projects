const btn = document.getElementById('tg')
const container = document.querySelector('.container')
console.log(btn);

btn.addEventListener('click', () =>{
    container.classList.toggle('active');
    btn.classList.toggle('move');
})


// JS FOR FAQs
const questions = document.querySelectorAll('.question')
if (questions.length > 0) {

questions.forEach(question => {
    question.addEventListener('click', ()=> {
        const answer = question.nextElementSibling;
        answer.classList.toggle('check');
        questions.forEach(otherQuestions => {
            if (otherQuestions !== question) {
                const otherAnswer = otherQuestions.nextElementSibling;
                otherAnswer.classList.remove('active');
            }
        })
    })
} )} else {
    document.write("No quesions found")
}

// JS FOR color flipper
const color_flipper_section = document.querySelector('.color-flipper');
const backgroundColor = document.getElementById('backgroundColor');
const color_flipper_btn = document.getElementById('color-flipper-btn');
   const num = Math.floor(Math.random() * 1000000) + 100;
    backgroundColor.innerHTML = "#"+num;
    console.log(backgroundColor.innerHTML);
    color_flipper_section.style.backgroundColor  = backgroundColor.innerHTML 
color_flipper_btn.addEventListener("click", () => {
    const num1 = Math.floor(Math.random() * 1000000) + 100;
    backgroundColor.innerHTML = "#"+num1;
    console.log(backgroundColor.innerHTML);
    color_flipper_section.style.backgroundColor  = backgroundColor.innerHTML 
})

// JS FOR COUNTER
const number = document.getElementById("number");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
let int_num = number.innerHTML;
plus.addEventListener("click", () => {
    int_num = int_num + 1;
    if (int_num > 0) {
        number.style.color = "green";
    }
    if (int_num == 0) {
        number.style.color = "black";
    }
    number.innerHTML = int_num;

})

minus.addEventListener("click", () => {
    int_num--
    number.innerHTML = int_num
    if (int_num < 0) {
        number.style.color = "red";
    }
    if (int_num == 0) {
        number.style.color = "black";
    }
})
