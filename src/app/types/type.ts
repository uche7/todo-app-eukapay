/** Todo Type */
export interface Todo {
  id: string;
  content: string;
  dueDate?: string;
  status: "unfinished" | "done";
}

/** Todo Response Type */
export interface TodoResponse {
  data: Todo[];
  message: string;
}

/** Add Todo Type */
export interface AddTodo {
  content: string;
  dueDate?: string;
  status: string;
}

/** Single Todo Response Type */
export interface SingleResponse {
  data: Todo;
  message: string;
}
