const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})

const addTaskBtn = document.querySelector("#add-task");
const addInp = document.querySelector("#add-inp");
const originalTaskBar = document.querySelector("#task-bar");
const taskContainer = document.querySelector(".row");

// toggle progress on original task
document.getElementById("toggle-progress").addEventListener("click", function () {
    var progressIcon = document.getElementById("progress-icon");
    if (progressIcon.textContent === "❌ In Progress") {
        progressIcon.textContent = "✔️ In Progress";
    } else {
        progressIcon.textContent = "❌ In Progress";
    }
});

// adding tasks properties
addTaskBtn.addEventListener("click", function () {
    let newTaskBar = originalTaskBar.cloneNode(true);
    let newTitle = newTaskBar.querySelector("#card-title");
    newTitle.textContent = addInp.value;
    taskContainer.appendChild(newTaskBar);
    // in progress toggle
    let toggleProgressBtn = newTaskBar.querySelector("#toggle-progress");
    let progressIcon = newTaskBar.querySelector("#progress-icon");
    toggleProgressBtn.addEventListener("click", function () {
        if (progressIcon.textContent === "❌ In Progress") {
            progressIcon.textContent = "✔ In Progress";
        } else {
            progressIcon.textContent = "❌ In Progress";
        }
    });
    //   delete tasks
    let deleteBtn = newTaskBar.querySelector("#delete-button");
    deleteBtn.addEventListener("click", function () {
        newTaskBar.remove();
    });
});

// delete original task
let originalDeleteBtn = originalTaskBar.querySelector("#delete-button");
originalDeleteBtn.addEventListener("click", function () {
    originalTaskBar.remove();
});
// update the due date of project
const update = document.querySelector("#update");
update.addEventListener("click", function () {
    const dueDateInput = document.querySelector("#due-date-input").value;
    document.querySelector("#due-date").textContent = "Due : " + dueDateInput;
    let detailText = document.querySelector("#detail-text");
    let detailsInput = document.querySelector("#details-inp");
    detailText.textContent = detailsInput.value;
});

// Change name in modal
let nameInput = document.querySelector("#name-inp");
nameInput.addEventListener("input", function () {
    let title = document.querySelector("#card-title");
    title.textContent = this.value;
});
// Send to complete list
document.querySelector("#complete-button").addEventListener("click", function () {
    let completedCounter = document.querySelector("#completed-counter");
    let currentCount = parseInt(completedCounter.textContent.split(" ")[2]);
    completedCounter.textContent = "Completed: " + (currentCount + 1);
});
