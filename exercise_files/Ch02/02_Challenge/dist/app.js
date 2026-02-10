var statusTrack;
(function (statusTrack) {
    statusTrack["Done"] = "done";
    statusTrack["InProgress"] = "in-progress";
    statusTrack["ToDo"] = "todo";
})(statusTrack || (statusTrack = {}));
const todoItems = [
    {
        id: 1,
        title: "Learn HTML",
        status: statusTrack.Done,
        completedOn: new Date("2021-09-11"),
    },
    {
        id: 2,
        title: "Learn TypeScript",
        status: statusTrack.InProgress,
    },
    {
        id: 3,
        title: "Write the best app in the world",
        status: statusTrack.ToDo,
    },
];
function addTodoItem(todo) {
    const id = getNextId(todoItems);
    const newTodo = {
        id,
        title: todo,
        status: statusTrack.ToDo,
    };
    todoItems.push(newTodo);
    return newTodo;
}
function getNextId(items) {
    return items.reduce((max, x) => (x.id > max ? x.id : max), 0) + 1;
}
const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app");
console.log(JSON.stringify(newTodo));
