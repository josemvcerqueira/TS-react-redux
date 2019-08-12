import { FetchTodoAction, DeleteTodoAction } from "./Todos";

export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

export type Action = FetchTodoAction | DeleteTodoAction;
