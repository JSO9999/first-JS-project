//변수지정
let wordDisplay = document.querySelector('.word-display');
const wordInput = document.querySelector('.word-input');
const timeSpan = document.querySelector('.time');
const scoreSpan = document.querySelector('.score');
const btn = document.querySelector('.button');
console.log(btn);
const timeset = 10;
let timerInterval;
let checkInterval;
let time = timeset;
let isplaying = false;
let words = [];
let score = 0;

init();
function init(){
    changeBtn('게임로딩중');
    getWords();
    wordInput.addEventListener('input', wordMatch);
}
//단어불러오기
function getWords(){


axios.get('https://random-word-api.herokuapp.com/word?number=100')
  .then(function (response) {
        response.data.forEach((word) => {
            if(word.length < 10){
                words.push(word);
            }
        });
        changeBtn('게임시작');
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
 
   
}
//게임시작 버튼을 눌렀을때
function run(){
    if(isplaying){
        return;
    }
    time = timeset;
    scoreSpan.innerText = 0;
    isplaying = true;
    changeBtn('게임중');
    timerInterval = setInterval(timer,1000);
    checkInterval = setInterval(checkStatus,50);
    
}

//게임중인지 확인 
function checkStatus(){
    if(!isplaying && time === 0){
        clearInterval(checkInterval);
    }
}
//시간변경
function timer() {

    time > 0 ? time-- : isplaying = false;
    if(!isplaying){
        changeBtn('게임종료');
        clearInterval(timerInterval); 
    }
    timeSpan.innerText = time;    
}
//인풋과 단어를 비교
function wordMatch(){
    if(!isplaying) {
        return;
    }
    if(wordInput.value == wordDisplay.innerText){
      
        const randomNum = Math.floor(Math.random() * words.length);
        wordDisplay.innerText = words[randomNum];
        wordInput.value = "";
        score++;
        scoreSpan.innerText = score;
    }
}
//버튼변경 
function changeBtn(text){
    text == '게임시작' ? btn.classList.remove('loading') : btn.classList.add('loading');
    btn.innerText = text;
    if(text == '게임종료'){
        scoreSpan.innerText = 0;
    }
}
wordInput.addEvnetListerner('keyup',function(){
	if(window.event.keyCode === 13){
		if(wordDisplay.innerText == wordInput.value){
			console.log('일치');
		}else {
			console.log('불일치');
		}
	}
})



