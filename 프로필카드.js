// let src1 = "sourse/js.jpg";     // 경로 설정 확인
// let src2 = "sourse/js_han.jpg"; // 경로 설정 확인
// const img = document.querySelector('.js1');

// img.addEventListener('click', () => {
//     if (img.src.includes(src1)) {
//         img.src = src2;
//     } else {
//         img.src = src1;
//     }
// });


// JavaScript 코드를 작성합니다.
// const imageElement = document.querySelector(".js1");

// imageElement.addEventListener("click", function() {
//     // 클릭 이벤트가 발생했을 때 실행할 코드
//     imageElement.src = "../sourse/js_han.jpg";
// });
// 한번만 사진이 바뀌는 코드

const imageElement = document.querySelector(".js1");

imageElement.addEventListener("click", function() {
    // 클릭 이벤트가 발생했을 때 실행할 코드
    if (imageElement.src.includes("js.jpg")) {
        imageElement.src = "./js_han.jpg";
    } else {
        imageElement.src = "./js.jpg";
    }
});


// 방명록 구간

const inputElement = document.querySelector(".today input");
const addButton = document.querySelector(".today button");
const pageElement = document.querySelector(".today .page");

addButton.addEventListener("click", function() {
    const inputValue = inputElement.value.trim(); // 입력값 가져오기

    if (inputValue !== "") {
        const newItem = document.createElement("div");
        newItem.textContent = inputValue;

        pageElement.appendChild(newItem);

        inputElement.value = ""; // 입력 필드 비우기
    }
});
//  오른쪽 상단 구간 자기소개/Keyword/앞으로의 각오

const tabs = document.querySelectorAll('.btn_tap');
const contents = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach(content => {
            content.classList.remove('show');
        });
        contents[index].classList.add('show');
    });
});





