import "./component.css";

const Create = () => {
  return (
    <div className="create">
      <div className="create-container">
        <input type="text" placeholder="할 일을 입력하세요." />
        <div className="add-button-box">
          <img src="/Add.png" alt="add button" />
        </div>
      </div>
    </div>
  );
};

export default Create;
