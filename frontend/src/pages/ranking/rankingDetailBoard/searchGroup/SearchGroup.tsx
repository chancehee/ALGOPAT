import { SelectBox } from "@/components/selectBox/SelectBox";
import { Input } from "@/components/input/Input";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { addCommas } from "@/pages/code/hooks/func";
import { rankingDetailState } from "@/atoms/ranking.atom";
import { useRecoilState } from "recoil";

import style from "./SearchGroup.module.css";

interface props {
  solutionCount: number;
}

export const SearchGroup = ({ solutionCount }: props) => {
  const langSelectOption = [
    { value: "", name: "전체보기" },
    { value: "c", name: "C" },
    { value: "cpp", name: "C++" },
    { value: "java", name: "JAVA" },
    { value: "javascript", name: "Javascript" },
    { value: "python", name: "Python" },
  ];

  const sortSelectOption = [
    { value: "runtime", name: "실행시간순" },
    { value: "memory", name: "메모리순" },
    { value: "score", name: "종합점수" },
    { value: "codeLength", name: "코드길이순" },
  ];

  const [lagnSelect, setLagnSelect] = useState(langSelectOption[0].value);
  const [sortSelect, setSortSelect] = useState(sortSelectOption[0].value);
  const [searchInput, setSearchInput] = useState("");

  const [rankingdetailParam, setRankingdetailParam] =
    useRecoilState(rankingDetailState);

  const clickEvent = () => {
    // console.log(lagnSelect, sortSelect, searchInput);
    setRankingdetailParam((prev) => {
      return {
        ...prev,
        languagefilter: lagnSelect,
        sortcriteria: sortSelect,
        searchText: searchInput,
      };
    });
  };

  useEffect(() => {
    clickEvent();
  }, [lagnSelect, sortSelect]);

  return (
    <>
      <div className={style.header_container}>
        <p>총 {addCommas(solutionCount)}회</p>
        <div className={style.search_group}>
          <SelectBox
            options={langSelectOption}
            style={{ borderRadius: 0, width: "100%" }}
            setValue={setLagnSelect}
            value={lagnSelect}
          />
          <SelectBox
            options={sortSelectOption}
            style={{ borderRadius: 0, width: "100%" }}
            setValue={setSortSelect}
            value={sortSelect}
          />
          <div className={style.search}>
            <Input
              style={{ borderRadius: 0 }}
              setInput={setSearchInput}
              input={searchInput}
              placeholder="사용자 이름"
            />
            <div className={style.search_button} onClick={clickEvent}>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
