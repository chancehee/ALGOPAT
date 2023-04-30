import style from "./MyPage.module.css";
import { Activity } from "./activity/Activity";
import { useRecoilValue} from "recoil";
import { Profile } from "./profile/Profile";
import { activityBarState } from "../../atoms/activity.atom";
import { useState } from "react";
import { Recent } from "./recent/Recent";


export const MyPage = () => {
  const content = useRecoilValue(activityBarState);
  
  let componentToRender;
  if (content === "myprofile") {
    componentToRender = <Profile />;
  } else if (content === "recent") {
    componentToRender = <Recent />;
  }

  return (
    <>
      <div className={style.mypage}>
        <div className={style.buffer}></div>
        <Activity />
        {componentToRender}
        <div style={{ height: "120px" }}></div>
      </div>
    </>
  );
};
