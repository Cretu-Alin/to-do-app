const btn = document.querySelectorAll(".btn");
const list = document.querySelector(".list");
const modal = document.querySelector(".modal");
const taskName = document.querySelector(".task-name");
const closeModal = document.querySelector(".close-modal");
const modalInput = document.querySelector("#task-name");
const backdrop = document.querySelector(".backdrop");
const addModal = document.querySelector(".add-modal");
const btnContainer = document.querySelector(".btn-container");

btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    modal.classList.add("visible");
    backdropHandler();
    console.log(e.currentTarget);
    if (e.currentTarget.classList[1] === "btn-red") {
      taskName.innerText =
        "Please add a task. This task list will be for learning activities";
      list.classList.add("red");
      list.classList.remove("blue");
      list.classList.remove("yellow");
    } else if (e.currentTarget.classList[1] === "btn-blue") {
      taskName.innerText =
        "Please add a task. This task list will be for sport activities";
      list.classList.add("blue");
      list.classList.remove("red");
      list.classList.remove("yellow");
    } else if (e.currentTarget.classList[1] === "btn-yellow") {
      taskName.innerText =
        "Please add a task. This task list will be for free time";
      list.classList.add("yellow");
      list.classList.remove("blue");
      list.classList.remove("red");
    }
  });
});

const backdropHandler = () => {
  backdrop.classList.add("visible");
};

const closeModalHandler = () => {
  modal.classList.remove("visible");
  backdrop.classList.remove("visible");
};

backdrop.addEventListener("click", closeModalHandler);
closeModal.addEventListener("click", closeModalHandler);

const addListItem = (e) => {
  const inputValue = modalInput.value;
  if (inputValue) {
    const listItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const iBtn = document.createElement("i");
    deleteBtn.innerHTML = `Delete`;
    const spanText = document.createElement("span");
    spanText.textContent = inputValue;
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    listItem.append(checkBox);
    listItem.append(spanText);
    listItem.append(deleteBtn);
    deleteBtn.append(iBtn);
    list.append(listItem);

    checkBox.addEventListener("click", () => {
      spanText.classList.toggle("line");
    });
    closeModalHandler();

    if (list.classList.contains("red")) {
      listItem.style.background = `
    linear-gradient(
      61deg,
      rgba(43, 141, 237, 0.8575805322128851) 11%,
      rgba(86, 211, 255, 1) 100%
    
    `;
    } else if (list.classList.contains("blue")) {
      listItem.style.background = `
    linear-gradient(
      318deg,
      rgba(121, 43, 237, 0.8575805322128851) 11%,
      rgba(188, 86, 255, 1) 100%`;
    } else if (list.classList.contains("yellow")) {
      listItem.style.background = `
    
    linear-gradient(
      126deg,
      rgba(237, 179, 43, 0.8575805322128851) 11%,
      rgba(255, 222, 86, 1) 100%`;
    }

    deleteBtn.addEventListener("click", () => {
      const parentEl = deleteBtn.parentElement;
      parentEl.remove();
    });

    modalInput.value = "";
  } else {
    alert("Please input your to do");
  }
};

addModal.addEventListener("click", addListItem);
