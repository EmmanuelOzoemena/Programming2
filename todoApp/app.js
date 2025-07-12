document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");
  const emptyImage = document.querySelector(".empty-image");

  const todosContainer = document.querySelector(".todos-container");

  const toggleEmptyState = () => {
    emptyImage.style.display =
      taskList.children.length === 0 ? "block" : "none";

    todosContainer.style.width = taskList.children.length > 0 ? "100%" : "50%";
  };

  const addTask = (text, completed = false) => {
    // event.preventDefault();

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
    });

    editBtn.addEventListener("click", () => {
      if (!checkbox.checked) {
        taskInput.value = list.querySelector("span").textContent;

        list.remove();
        toggleEmptyState();
      }
    });

    // Functionalities for the delete button
    list.querySelector(".delete-btn").addEventListener("click", () => {
      list.remove();

      toggleEmptyState(); // Called after if the list is empty
    });

    taskList.appendChild(list);
    taskInput.value = "";
    toggleEmptyState();
  };

  addTaskBtn.addEventListener("click", () => addTask());

  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      addTask();
    }
  });
});
