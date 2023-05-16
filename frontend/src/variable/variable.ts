export const bj_level = [
  "전체문제",
  "Bronze V",
  "Bronze IV",
  "Bronze III",
  "Bronze II",
  "Bronze I",
  "Silver V",
  "Silver IV",
  "Silver III",
  "Silver II",
  "Silver I",
  "Gold V",
  "Gold IV",
  "Gold III",
  "Gold II",
  "Gold I",
  "Platinum V",
  "Platinum IV",
  "Platinum III",
  "Platinum II",
  "Platinum I",
  "Diamond V",
  "Diamond IV",
  "Diamond III",
  "Diamond II",
  "Diamond I",
  "Ruby V",
  "Ruby IV",
  "Ruby III",
  "Ruby II",
  "Ruby I",
];

export const codeLanguage = (str: string | undefined) => {
  if (str === undefined) return "";

  if (str == "cpp") {
    return "C++";
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};
