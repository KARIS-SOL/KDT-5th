// JS 구현 
const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const input = document.querySelector("#content");

// 클릭 된 요소를 저장하기 위한 전역 변수
let targetEl;
// --------------------------------------------------------------
// 날짜 넣기
function calendarTask(e) {
  if (e.target.tagName === "P") { //Tag Name 일경우에는 대문자로 표현해야한다
    date.value = `2023년 2월 ${e.target.textContent}일`;  //Type 이 Text 일경우에는 Value 값을 필요로한다
    targetEl = e.target.parentNode;  
  } else if (e.target.tagName === "TD") {
    const day = e.target.children[0].textContent;
    date.value = `2023년 2월 ${day} 일`;
    targetEl = e.target;
  } else if (e.target.tagName === "DIV") {
    e.target.remove();
  }
}

// 내용을 입력하고 버튼을 누르면 '일' 밑으로 표시
function writeSchedule() {
  if (input.value === "" && date.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요");
    date.setAttribute("placeholder", "내용을 입력하세요");
    return;  //함수내부에서 외부로 나갈때 return 값 
  } else if (input.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요");
    return;
  } else if (date.value === "") {
    date.setAttribute("placeholder", "날짜를 선택하세요");
    return;
  } 

  const addDiv = document.createElement("div"); 
  addDiv.textContent = input.value;

  targetEl.append(addDiv)
  input.value = "";

}


calendar.addEventListener("click", calendarTask); //클릭을 했을때 calendar 에 서 일어나는일 