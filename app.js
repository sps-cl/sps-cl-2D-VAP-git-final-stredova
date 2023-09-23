const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTodo(){
    if (inputBox.value === ''){
        alert("You must write a task!");        
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
        inputBox.value = "";

}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
},false);