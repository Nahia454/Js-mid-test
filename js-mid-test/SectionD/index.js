let items = [];
let CreatingIndex = -1; // Added missing variable

function addButton() {
    const name = document.getElementById("input").value.trim();
    const type = document.getElementById("type").value;
    const quantity = document.getElementById("quantity").value.trim();

    if (!name || !quantity) {
        alert("Please fill all fields!");
        return;
    }

    if (CreatingIndex === -1) {
        // Add new item
        items.push({ name, type, quantity });
    } else {
        // Update creating item
        items[CreatingIndex] = { name, type, quantity };
        CreatingIndex = -1; // Reset creating
        document.querySelector("button").textContent = "Add Item";
    }

    document.getElementById("input").value = "";
    document.getElementById("quantity").value = "";
    displayItems();
}
 // Delete Button
 let deleteButton = document.createElement("button");
 deleteButton.textContent = "Delete";
 deleteButton.classList.add("delete-btn");
 deleteButton.onclick = () => deleteTask(index);

 li.appendChild(creatBtn);
 li.appendChild(viewButton);
 li.appendChild(deleteButton);
 groceryList.appendChild(li);


function deleteTask(index) {
    items.splice(index, 1);
    displayItems();
}