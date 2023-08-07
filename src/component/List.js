import "./component.css";

const List = () => {
  return (
    <div className="list">
      <article className="item-container">
        <div className="checkbox-continer">
          <input type="checkbox" />
        </div>
        <div className="title-container">
        <b>TO-DO LIST</b>
        </div>
        <div className="editor-container">
          <button>수정</button>
          <button>삭제</button>
        </div>
      </article>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default List;
