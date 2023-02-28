export const apiURL = "https://dog.ceo/api/breeds/image/random";
import UsingAxios from "../features/UsingAxios";
import UsingFetch from "../features/UsingFetch";

import UsingSWR from "../features/UsingSWR";
("../features/UsingFetch");

import UsingReactQuery from "./UsingReactQuery/ReactQuery";

export { UsingFetch, UsingAxios, UsingSWR, UsingReactQuery };

export const Test = () => {
  function duplicateEncode(word) {
    word = word.toLowerCase();
    let charCount = {};
    for (let i = 0; i < word.length; i++) {
      if (word[i] in charCount) {
        charCount[word[i]]++;
      } else {
        charCount[word[i]] = 1;
      }
    }
    let str = "";
    for (let i = 0; i < word.length; i++) {
      if (charCount[word[i]] > 1) {
        str += ")";
      } else {
        str += "(";
      }
    }
    return str.toLowerCase();
  }
  console.log(duplicateEncode("recede"));
};
