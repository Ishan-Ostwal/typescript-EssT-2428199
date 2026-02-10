interface Items {
  id: number;
  title: string;
  status: statusTrack;
  completedOn?: Date;
}
enum statusTrack {
  Done = "done",
  InProgress = "in-progress",
  ToDo = "todo",
}

const todoItems: Items[] = [
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

function addTodoItem(todo: string): Items {
  const id = getNextId(todoItems);

  const newTodo: Items = {
    id,
    title: todo,
    status: statusTrack.ToDo,
  };
  todoItems.push(newTodo);
  return newTodo;
}

function getNextId<T extends { id: number }>(items: T[]): number {
  return items.reduce((max: number, x) => (x.id > max ? x.id : max), 0) + 1;
}

const newTodo = addTodoItem(
  "Buy lots of stuff with all the money we make from the app",
);

console.log(JSON.stringify(newTodo));
