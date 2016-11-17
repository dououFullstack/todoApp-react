const {
  TodoHeader,
  TodoList,
  InputField
} = window.App;

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <TodoHeader />
        <TodoList />
        <InputField />
      </div>
    );
    // return <h1>doudou</h1>
  }
}


// const TodoApp = React.createClass({
//   render() {
//     return (
//     );
//   }
// });


window.App.TodoApp = TodoApp;
