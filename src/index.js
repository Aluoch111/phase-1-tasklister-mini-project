document.addEventListener("DOMContentLoaded", (e) => {
        e.preventDefault();

        const form = document.getElementById("create-task-form");
        form.addEventListener("submit", (e) => {

            e.preventDefault();
            const task = document.getElementById("new-task-description");
		const list = document.getElementById("tasks");
		const newItem = document.createElement("li");
		newItem.innerText = task.value;
		list.appendChild(newItem);
		// Reset the dom
		e.target.reset();
        });

});


