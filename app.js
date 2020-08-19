//Selectors
const inputSearch = document.querySelector(".inputSearch");
const addBtn = document.querySelector(".add-btn");
const tagGrid = document.querySelector(".tagGrid");

//Event listeners
addBtn.addEventListener("click", addNewItem);
tagGrid.addEventListener("click", deleteItem);

//Functions
function addNewItem(event) {
    //prevent form from submitting
    event.preventDefault();
    //Todo DIV
    const groupDiv = document.createElement('div');
    groupDiv.classList.add('btn-group-toggle');
    //create LI
    const newItemLabel = document.createElement('label');
    newItemLabel.innerText = inputSearch.value;
    newItemLabel.classList.add('btn');
    newItemLabel.classList.add('btn-secondary');
    newItemLabel.classList.add('border-raduis-20');
    newItemLabel.classList.add('active');
    groupDiv.appendChild(newItemLabel);//  label inside the btn-group-toggle
    //CHECK MARK BUTTON
    const closeBtn = document.createElement('checkbox');
    closeBtn.innerHTML = '<i class="fas fa-times-circle ml-2"></i>';
    closeBtn.classList.add("close-btn");
    newItemLabel.appendChild(closeBtn);
    //CHECK TRASH BUTTON
    // const trashButton = document.createElement('button');
    // trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    // trashButton.classList.add("trash-btn");
    // groupDiv.appendChild(trashButton);
    //APPEND TO LIST(el ul gowaha kol el kalam el hwa groupDiv)
    tagGrid.appendChild(groupDiv);
    //Clear Todo INPUT VALUE
    inputSearch.value = "";
}

function deleteItem(e) {
    const item = e.target;
    //DELETE TODO
    if (item.classList[0] === 'close-btn') {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }

    //CHECK MARK
    // if (item.classList[0] === "complete-btn") {
    //     const todo = item.parentElement;
    //     todo.classList.toggle("completed");
    // }
}

// Check ALL toggles
function check(checked = true) {
    const cbs = document.querySelectorAll('input[type="checkbox"]');
    cbs.forEach((cb) => {
        cb.checked = checked;
    });
}
const btn = document.querySelector('#checkAllBtn');
btn.onclick = checkAll;

function checkAll() {
    check();
    // reassign click event handler
    this.onclick = uncheckAll;
}
function uncheckAll() {
    check(false);
    // reassign click event handler
    this.onclick = checkAll;
}