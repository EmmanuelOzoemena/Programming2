document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");
  const emptyImage = document.querySelector(".empty-image");

  const todosContainer = document.querySelector(".todos-container");

  const progressBar = document.getElementById("progress");
  const progressNumbers = document.getElementById("numbers");

  const toggleEmptyState = () => {
    emptyImage.style.display =
      taskList.children.length === 0 ? "block" : "none";

    todosContainer.style.width = taskList.children.length > 0 ? "100%" : "50%";
  };

  const updateProgress = (checkCompletion = true) => {
    const totalTasks = taskList.children.length;
    const completedTasks =
      taskList.querySelectorAll(".checkbox:checked").length;

    progressBar.style.width = totalTasks
      ? `${(completedTasks / totalTasks) * 100}%`
      : "0%";
    progressNumbers.textContent = `${completedTasks} / ${totalTasks}`;

    // Confetti animations after completion
    if (checkCompletion && totalTasks > 0 && completedTasks === totalTasks) {
      Confetti();
    }
  };

  const saveTaskToLocalStorage = () => {
    const tasks = Array.from(taskList.querySelectorAll("li")).map((list) => ({
      text: list.querySelector("span").textContent,
      completed: list.querySelector(".checkbox").checked,
    }));

    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const loadTasksFromLocalStorage = () => {
    const savedTasks = JSON.parse(localStorage.getItem("task")) || [];
    savedTasks.forEach(({ text, completed }) => {
      addTask(text, completed, false);
    });

    toggleEmptyState();
    updateProgress();
  };

  const addTask = (text, completed = false, checkCompletion = true) => {
    event.preventDefault();

    const taskText = text || taskInput.value.trim();
    if (!taskText) {
      return;
    }

    const list = document.createElement("li");
    list.innerHTML = `
      <input type="checkbox" class="checkbox" ${completed ? "checked" : ""} />
      <span>${taskText}</span>

      <div class="task-buttons">
        <button class="edit-btn">
          <i class="fa-solid fa-pen"></i>
        </button>

        <button class="delete-btn">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>


    `;

    const checkbox = list.querySelector(".checkbox");
    const editBtn = list.querySelector(".edit-btn");

    if (completed) {
      list.classList.add("completed");
      editBtn.disabled = true;
      editBtn.style.opacity = "0.5";
      editBtn.style.pointerEvents = "none";
    }

    checkbox.addEventListener("change", () => {
      const isChecked = checkbox.checked;
      list.classList.toggle("completed", isChecked);

      editBtn.disabled = isChecked;
      editBtn.style.opacity = isChecked ? "0.5" : "1";

      editBtn.style.pointerEvents = isChecked ? "none" : "auto";

      updateProgress();
      saveTaskToLocalStorage();
    });

    editBtn.addEventListener("click", () => {
      if (!checkbox.checked) {
        taskInput.value = list.querySelector("span").textContent;

        list.remove();
        toggleEmptyState();

        updateProgress(false);
        saveTaskToLocalStorage();
      }
    });

    // Functionalities for the delete button
    list.querySelector(".delete-btn").addEventListener("click", () => {
      list.remove();

      toggleEmptyState(); // Called after if the list is empty

      updateProgress();
      saveTaskToLocalStorage();
    });

    taskList.appendChild(list);
    taskInput.value = "";
    toggleEmptyState();

    updateProgress(checkCompletion);
    saveTaskToLocalStorage();
  };

  addTaskBtn.addEventListener("click", () => addTask());

  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      addTask();
    }
  });

  loadTasksFromLocalStorage();
});

const Confetti = () => {
  // Copy and paste the Confetti animations codes from Confetti docs here

  const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["star"],
    colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
  };

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ["star"],
    });

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ["circle"],
    });
  }

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
};
