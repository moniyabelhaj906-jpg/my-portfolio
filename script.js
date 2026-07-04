function addTask() {
    let input = document.getElementById("taskInput");

    if (task === ""); {
        alert("write somthing!");
        return;
      }
     let li = document.createElement("li");
     li.innerHTML = task;

 document.getElementById("taskList").appendChild(li);
   input.value = "";
}

function addTask() {
    console.log("clicked");
}

