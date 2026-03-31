export function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added':
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];

    case 'changed':
      return tasks.map((t) =>
        t.id === action.task.id ? action.task : t
      );

    case 'deleted':
      return tasks.filter((t) => t.id !== action.id);

    default:
      throw Error('Unknown action: ' + action.type);
  }
}

export const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];