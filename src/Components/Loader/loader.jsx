import { Puff } from "react-loader-spinner";
import css from "./loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <Puff
        visible={true}
        height="80"
        width="80"
        color="#c89365"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
      />
    </div>
  );
};

export default Loader;
