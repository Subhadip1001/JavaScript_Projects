const input = document.querySelector("input");
const addBtn = document.querySelector("#addBtn");
const task = document.querySelector("#task-box");

addBtn.addEventListener("click", ()=>{
    if(input.value == ""){
        alert("Add your task...");
    }else{
        task.innerHTML += `
        <div class="task">
        <spam>${input.value}</spam>
        <button class="removeBtn"><i class="fa-solid fa-trash"></i></button>
        </div> `;

        var current_task = document.querySelectorAll(".removeBtn");
        const tasks = document.querySelectorAll(".task");

        // for(let i=0; i<current_task.length; i++){
        //     current_task[i].onclick = function(){
        //         this.parentNode.remove();
        //     }
        // }

        for(let i=0; i<current_task.length; i++){
            current_task[i].addEventListener("click", ()=>{
                current_task[i].parentElement.remove();
            });
        }

        for(let i=0; i<tasks.length; i++){
            tasks[i].addEventListener("click", ()=>{
                tasks[i].classList.toggle("done");
            });
        }

        input.value = "";
    }
});


