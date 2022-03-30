"use-strict"

const add = () => {
    const input = document.getElementById("task");
    if(input.value === ""){
        alert(":(");
        return;
    }

    
    
    const newP= document.createElement("p");
    newP.innerHTML = `${input.value}`;
    const tasks = document.getElementById("taskList");
    const list = document.createElement("li");
    list.onclick = function () {
        done(list);
    };
    
    
    list.appendChild(newP);
    tasks.append(list);

    
}


const done = (element) => {
    const task = element.children[1];
    task.style.display = "inline";

    if(element.style.backgroundColor === "grey"){
        element.style.backgroundColor = "#ffffff";
        task.style.textDecoration = "none";
    } else {
        element.style.backgroundColor = "grey";
        task.style.textDecoration = "line-through";
    }
}