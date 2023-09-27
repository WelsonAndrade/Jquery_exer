function addTask(taskName) {
    const listItem = $("<li>").text(taskName);

    listItem.on("click", function () {
        $(this).toggleClass("completed");
    });

    $("#task-list").append(listItem);
}

$("#task-form").submit(function (e) {
    e.preventDefault();
    const newTaskName = $("#new-task").val();
    if (newTaskName) {
        addTask(newTaskName);
        $("#new-task").val("");
    }
});