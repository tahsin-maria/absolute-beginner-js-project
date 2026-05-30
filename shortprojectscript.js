const btn1 = document.getElementById('happy');
const heading = document.getElementById('curr-mood');

btn1.addEventListener('click',()=>{
    document.body.style.backgroundColor = "#fefeaa";
    heading.innerText="Current Mood : Happy😍";
})

const btn2 = document.getElementById('sad');
btn2.addEventListener('click',()=>{
    document.body.style.backgroundColor = "#d4ebfc";
    heading.innerText="Current Mood : Sad😔";
})


const btn3 = document.getElementById('angry');
btn3.addEventListener('click',()=>{
    document.body.style.backgroundColor = "#ef7878";
    heading.innerText="Current Mood : Angry😠";
})


const btn4 = document.getElementById('reset');
btn4.addEventListener('click',()=>{
    document.body.style.backgroundColor = "#a6f0b2";
    heading.innerText="Current Mood : Normal😎";
})

// for IDs -> use getElementById , for classes use querySelect()