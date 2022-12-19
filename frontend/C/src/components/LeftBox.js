import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { movingAddRight } from "../action";
import { removeLeft } from "../action";

export const LeftBox = () => {
  const leftArry = useSelector((state) => state.leftArry);
  const dispatch = useDispatch();

  return (
    <div className="box__in">
      <div className="box__item">
        <ul className="box__list">
          {leftArry.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
      <div className="moving-button">
        <button
          onClick={() => {
            if (leftArry.length === 0) {
              return alert("中身が空です。");
            } else {
              dispatch(movingAddRight(leftArry[leftArry.length - 1]));
              dispatch(removeLeft());
            }
          }}
          type="button"
        >
          右へ移動
        </button>
      </div>
    </div>
  );
};
