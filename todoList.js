

// 第二種. 使用 React.createClass API，通常用於 ES5 中
const TodoList = React.createClass({
  render() {
    return (
      <ul>
        <li>
          <input type="checkbox" />
          <span>Item 1</span>
          <button>x</button>
        </li>
        <li>
          <input type="checkbox" />
          <span>Item 2</span>
          <button>x</button>
        </li>
        <li>
          <input type="checkbox" />
          <span>Item 3</span>
          <button>x</button>
        </li>
      </ul>
    );
  }
});


window.App.TodoList = TodoList;
