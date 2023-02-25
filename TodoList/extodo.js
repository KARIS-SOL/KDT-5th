const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");

function deleteTask(t) { //얘와 deleteTask(this) 의 관계 헷갈림
  t.parentNode.remove();
};

function addList() {
  if (inputTask.value === "") {
    inputTask.setAttribute("placeholder", "내용을 입력하세요");
    return;
  }

// ul(todo-list) 안에 , li태그, 그안에 input 으로 'checkbox', checkbox 
const addLi = document.createElement("li"); 

const checkBtn = document.createElement("input");
checkBtn.setAttribute("type", "checkbox");
checkBtn.addEventListener("click", function() {
  if (checkBtn.checked === ture) {
    checkBtn.parentNode.style.textDecoration = "line-through";
  } else {
    checkBtn.parentNode.setAttribute("style", "text-decoration:none");
  }
});

//삭제버튼 button 
const deleteBtn = document.createElement("button"); 
deleteBtn.textContent = "삭제";

deleteBtn.setAttribute("onclick", "deleteTask(this)");

addLi.append(checkBtn); //자식요소로 만들기 
addLi.append(inputTask.value);
addLi.append(deleteBtn);

todoList.appendChild(addLi);

inputTask.value = "";
};

addBtn.addEventListener("click", addList);
