import { Link } from "react-router-dom";
import "./component.css";

const DiaryButton = () => {
  return (
    <div className="diary-button">
      <Link to={"/diary"}>
        <b>오늘 하루 돌아볼까요?</b>
      </Link>
    </div>
  );
};

export default DiaryButton;
