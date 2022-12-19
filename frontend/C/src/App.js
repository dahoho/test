import { LeftBox } from "./components/LeftBox";
import { RightBox } from "./components/RightBox";

const App = () => {
  return (
    <>
      <div className="wrap">
        <div className="box">
          <LeftBox />
          <RightBox />
        </div>
      </div>
    </>
  );
};

export default App;
