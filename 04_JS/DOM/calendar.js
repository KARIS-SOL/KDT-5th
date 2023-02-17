// JS 구현
const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const input = document.querySelector("#content");

// 클릭 된 요소를 저장하기 위한 전역 변수

//내가 클릭한 td의 위치 , p 태그는 parent 가 필요하지만 td를 알면 편하게 쓸 수 있음
let targetEl; //전역변수

function calendarTask(e) {
  
  if (e.target.tagName === "P") {  //대문자로 나오는지 확인
    date.value = `2023년 2월 ${e.target.textContent}일`; //text 값을 value 값을 넣어주세요 
    targetEl = e.target.parentNode;
    //console.log("parent", e.target.parentNode); // td 의 위치는 p 태그의 부모
  } else if (e.target.tagName === "TD") { //숫자가 아니라 그옆공간이여도 될 수 있게
    const day = e.target.children[0].textContent // childNode 를 안쓰는 이유는 우리가 필요한 text외의 것들도 따라올까봐 
    date.value = `2023년 2월 ${day}일`;
    //console.log(e.target.children[0]);  //p태그의 접근이나 배열을 알게하기 위해서 확인해볼것, 해당공간에서 p 태그를 골라오려고
    targetEl = e.target;
  } else if (e.target.tagName === "DIV") {
    e.target.remove(); // 다른 지우는 방법 
  }
}

function writeSchedule() { //button 에 onclick 으로 걸려있음, input tag로 값을 받아서 div 태그를 만들어주고 let targetEl 에 보내주기
  if (input.value === "" && date.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요");
    date.setAttribute("placeholder", "날짜를 선택하세요!");
    return;
  } else if (input.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요");
    return;
  }  else if (input.value === "") {
    input.setAttribute("placeholder", "날짜를 선택하세요 !");
    return;
  }


  const addDiv = document.createElement("div");
  addDiv.textContent = input.value;

  // addDiv.addEventListener("click", function () {
  //   addDiv.remove();  //자기자신이 클릭되면 알아서 지워져라, 지우는방법
  // })

  //어느 td 태그에 붙힐지는 targetEl 인 전역변수가 기억하고 있다
  targetEl.append(addDiv);
  input.value = "";  //아까입력했던 값들이 사라진다
}



//이벤트객채를 반드시 받아와야함 
calendar.addEventListener("click", calendarTask) //함수가 길어질까봐 위에 선언