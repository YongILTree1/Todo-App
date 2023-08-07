import "./component.css";

const Item = () => {
  return (
    <article className="list-container">
      <div className="item-container">
        <div className="checkbox-continer">
          <input type="checkbox" />
        </div>
        <div className="todo-container">
          <b>TO-DO LIST</b>
        </div>
        <div className="editor-container">
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>
    </article>
  );
};

export default Item;
