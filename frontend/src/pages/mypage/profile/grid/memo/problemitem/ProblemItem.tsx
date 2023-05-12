import { useSetRecoilState } from "recoil";
import { nowProblemSubmissionIdState } from "@/atoms/code.atom";
import { useNavigate } from "react-router-dom";
import { problemByDate } from "@/pages/mypage/hooks/query";

import style from "./ProblemItem.module.css";
import { Button } from "@/components/button/Button";
import { stringCutter } from "@/pages/code/hooks/func";

interface dateDetail {
  list: problemByDate;
}

export const ProblemItem = (props: dateDetail) => {
  const setSubmissionState = useSetRecoilState(nowProblemSubmissionIdState);

  const navigate = useNavigate();
  const handleClick = () => {
    // console.log(123123);
    // console.log(props.data.problemId);
    setSubmissionState({
      problemId: props.list.problemId,
      submissionId: props.list.submissionId,
      problemLevel: props.list.problemLevel,
      problemTitle: props.list.problemTitle,
      nowProcess: false,
    });
    console.log(props.list.submissionId, "제출번호 내놔라 없다");
    navigate("/code");
  };
  const handleButton = () => {
    window.location.href = `https://www.acmicpc.net/problem/${props.list.problemId}`;
  };
  return (
    <>
      <div className={style.problem_family}>
        <div className={style.problem_container}>
          <div className={style.problemLevel}>
            <img
              src={`https://static.solved.ac/tier_small/${props.list.problemLevel}.svg`}
              alt={props.list.problemTitle}
            />
          </div>
          <div className={style.problemId} onClick={handleClick}>
            {props.list.problemId}.
          </div>
          <div className={style.problemName} onClick={handleClick}>
            {stringCutter(props.list.problemTitle, 30)}
          </div>
        </div>
        <div className={style.button_container}>
          <div className={style.codeNavigate} onClick={handleClick}>
            내 코드
          </div>
          <div className={style.problemNavigate} onClick={handleButton}>
            문제 풀러가기
          </div>
        </div>
      </div>
    </>
  );
};
