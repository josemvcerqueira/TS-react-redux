import React, { FC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

const App: FC<AppProps> = ({ todos, fetchTodos, deleteTodo }): JSX.Element => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (todos.length) setLoading(false);
  }, [todos]);

  const renderList = (): JSX.Element[] =>
    todos.map((todo: Todo) => (
      <div key={todo.id} onClick={() => deleteTodo(todo.id)}>
        {todo.title}
      </div>
    ));

  const onButtonClick = (): void => {
    setLoading(true);
    fetchTodos();
  };

  return (
    <div>
      <button onClick={onButtonClick}>Fetch</button>
      {loading && "Loading"}
      {renderList()}
    </div>
  );
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => ({
  todos: todos
});

export default connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(App);
