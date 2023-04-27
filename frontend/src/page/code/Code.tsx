import style from "./Code.module.css";
import PolynomialChart from "./graph/PolynomialChart";
import { SideNav } from "./sideNav/SideNav";

export const Code = () => {
  return (
    <div className={style.code}>
      <div className={style.leftTab} style={{ width: "20%" }}>
        <SideNav />
      </div>
      <div className={style.rightTab}>
        <div style={{fontSize: "3rem", color: "gray"}}>ALGOPAT</div>
        <PolynomialChart></PolynomialChart>
      </div>
    </div>
  );
};

