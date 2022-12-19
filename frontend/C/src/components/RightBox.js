import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { movingAddLeft } from "../action";
import { removeRight } from "../action";

export const RightBox = () => {
  const rightArry = useSelector((state) => state.rightArry);
  const dispatch = useDispatch();

  return (
    <div className="box__in">
      <div className="box__item">
        <ul className="box__list">
          {rightArry.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
      <div className="moving-button">
        <button
          onClick={() => {
            if (rightArry.length === 0) {
              return alert("中身が空です。");
            } else {
              dispatch(movingAddLeft(rightArry[rightArry.length - 1]));
              dispatch(removeRight());
            }
          }}
          type="button"
        >
          左へ移動
        </button>
      </div>
    </div>
  );
};
