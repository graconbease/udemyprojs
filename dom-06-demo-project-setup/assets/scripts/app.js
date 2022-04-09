const addMovModal = document.getElementById("add-modal");
const startAddMovBtn = document.querySelector("header button");
//header then button selects the button tag within h

const toggleMovModal = () => {
    addMovModal.classList.toggle("visible");
};

startAddMovBtn.addEventListener("click", toggleMovModal);