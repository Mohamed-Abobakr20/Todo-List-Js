//get elements
let todos, todo, add, update;
todos = [];
todo = document.getElementById("todo");
add = document.getElementById("add");
update = document.getElementById("update");

// caling check method
checkLocalStorage();

// add products to the table
add.addEventListener("click", () => {
    if (todo.value) {
        todos.push(todo.value);
        clearDate();
        updateData();
    } else {
        document.getElementById("exampleModal").style.display = "block";
    }

})

// update products to the table
update.addEventListener("click", () => {
    if (todo.value) {
        todos[index] = todo.value;
        clearDate();
        updateData();
        display("block", "none");
    } else {
        document.getElementById("exampleModal").style.display = "block";
    }

})


// clear inputs
function clearDate() {
    todo.value = "";
}

// fill inputs
function fillDate(i) {
    todo.value = todos[i];
}

// display products
function displyProducts(todos) {
    let td = "";

    for (let i = 0; i < todos.length; i++) {
        td += rowTable(i);
    }

    document.querySelector("tbody").innerHTML = td;
}

// check local storage
function checkLocalStorage() {
    if (localStorage.getItem("todos")) {
        todos = JSON.parse(localStorage.getItem("todos"));
        displyProducts(todos);
    }
}

// delete product function
function deleteProduct(i) {
    if (update.style.display == "block" && i === index) {
        clearDate();
        display("block", "none");
    }
    todos.splice(i, 1);
    updateData();
}

// update product function
function updateProduct(i) {
    fillDate(i);
    index = i;
    display("none", "block");
}

// update table and local storage data
function updateData() {
    displyProducts(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// close function for warning empty fields
function closeButton() {
    document.getElementById("exampleModal").style.display = "none";
}

// display block-none
function display(btnAdd, btnUpdate) {
    add.style.display = btnAdd;
    update.style.display = btnUpdate;
}

// creating row table
function rowTable(i) {
    return `<tr>
<td>${todos[i]}</td>
<td><button onclick="updateProduct(${i})" class="btn btn-outline-warning">Update</button></td>
<td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Done</button></td>
</tr>`;
}