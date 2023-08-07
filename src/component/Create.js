import "./component.css";

// eslint-disable-next-line react/prop-types
const Create = ({ setData, onSubmit }) => {
  return (
    <div className="create">
      <div className="create-container">
        <input
          onChange={(e) => {
            setData(e.target.value);
          }}
          type="text"
          placeholder="할 일을 입력하세요."
        />
        <div onSubmit={onSubmit} className="add-button-box">
          <img src="/Add.png" alt="add button" />
        </div>
      </div>
    </div>
  );
};

export default Create;
