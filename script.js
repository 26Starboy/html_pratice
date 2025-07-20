// Function to get task details from the user
function getTaskDetails() {
    let title = prompt("Enter the task title:");
    let description = prompt("Enter the task description:");
    let status;

    // Validate the status input
    while (true) {
        status = prompt("Enter the task status (todo, doing, or done):");
        if (status) {
            status = status.toLowerCase();
            if (status === "todo" || status === "doing" || status === "done") {
                break;
            } else {
                alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
            }
        }
    }

    return { title, description, status };
}

// Get details for two tasks
const task1 = getTaskDetails();
const task2 = getTaskDetails();

// Find and display completed tasks
const completedTasks = [];
if (task1.status === "done") {
    completedTasks.push(task1);
}
if (task2.status === "done") {
    completedTasks.push(task2);
}

// Display the results in the console
if (completedTasks.length > 0) {
    console.log("Completed Tasks:");
    completedTasks.forEach(task => {
        console.log(`- ${task.title} (${task.status})`);
    });
} else {
    console.log("No tasks completed, let's get to work!");
}
