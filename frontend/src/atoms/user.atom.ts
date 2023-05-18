import { SetterOrUpdater, atom } from "recoil";
import { Buffer } from "buffer";

export interface UserInfo {
  userSeq: number;
  userProfile: string;
  userGithubId: string;
}

export interface MyProfile {
  userBackjoonId:string;
  tier: number;
  backgroundId: string;
  backImage:string;
  backVideo: string;
}

export const userInfoState = atom<UserInfo>({
  key: "userInfoState",
  default: {
    userSeq: 0,
    userProfile: "",
    userGithubId: "",
  },
});

export const profileState = atom<MyProfile>({
  key: "profileState",
  default: {
    userBackjoonId:"NO_SUBMITTED",
    tier: 0,
    backgroundId:"",
    backImage:"",
    backVideo: "",
  },
});

export const loginUser = (setUserInfo: SetterOrUpdater<UserInfo>) => {
  const token = localStorage.getItem("access-token");
  if (token) {
    const base64Payload = token.split(".")[1];
    const payload = Buffer.from(base64Payload, "base64");
    const result = JSON.parse(payload.toString());

    setUserInfo({
      userSeq: result.userSeq,
      userProfile:
        "https://post-phinf.pstatic.net/MjAxNzA5MThfMjE4/MDAxNTA1NzE4NDk4MjY4.BNUB-Ful9pV2hcg_5hdJzyPRyXPnk0C6KGjcok__QkAg.9onUKAl7MLep59zVlYS6o3J0lx_16yo_AYonupDADdcg.JPEG/20170915150632943.jpg?type=w1200",
      userGithubId: result.userGithubId,
    });
  }
};

export const logout = (setUserInfo: SetterOrUpdater<UserInfo>) => {
  localStorage.removeItem("access-token");
  document.cookie =
    "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  setUserInfo({
    userSeq: 0,
    userProfile: "",
    userGithubId: "",
  });

  window.location.href = "https://www.algopat.kr";
};
