//! 들어온 API 에 따라 데이터를 정렬한다.

import { TestAPIConfigsType, TestDatasetItemType } from "@/validation/testSchema";

const useSendData = (
  targetData: TestDatasetItemType[],
  address: string,
  configs: TestAPIConfigsType,
  addressName: string,
) => {
  let result = undefined;

  //! /conversation-coherence-evaluation => n개의 묶음으로 가자

  if (address === "/conversation-coherence-evaluation" || address === "/conversation-resolution-evaluation") {
  } else if (address === "/summarization-evaluation") {
    const inputData = targetData.map((item: any) => ({
      document: item.context,
      response: item.response,
    }));

    //? 잘 들어오는 거 확인 완료!
    // console.log("targetData", targetData);
    // console.log("inputData", inputData);
    // console.log("configs", configs);
    // console.log("name", addressName);

    const failureThreshold = configs.find(config => config.name === addressName)?.failure_threshold ?? 0.5;

    result = {
      failure_threshold: failureThreshold,
      data: inputData,
    };

    return result;
  } else if (address === "/contains-keyword" || address === "/contains-link") {
    const inputData = targetData.map((item: any) => ({
      text: item.response,
    }));

    const keywords = configs.find(config => config.name === addressName)?.keywords ?? [""];

    const filteredKeywords = keywords.filter(keyword => keyword !== "");

    result = {
      keywords: filteredKeywords,
      data: inputData,
    };

    return result;
  } else if (
    address === "/prompt-injection-evaluation" ||
    address === "/pii-detection" ||
    address === "/openai-content-moderation" ||
    address === "/gibberish-text-evaluation" ||
    address === "/sensitive-topics-evaluation" ||
    address === "/safe-for-work-text-evaluation"
  ) {
    const inputData = targetData.map((item: any) => ({
      text: item.response,
    }));

    result = {
      data: inputData,
    };

    return result;
  } else if (address === "/similarity-evaluation") {
  }
  const inputData = targetData.map((item: any) => ({
    text1: item.response,
    text2: item.expected,
  }));

  const failureThreshold = configs.find(config => config.name === addressName)?.failure_threshold ?? 0.5;

  result = {
    failure_threshold: failureThreshold,
    data: inputData,
  };

  return result;
};

export default useSendData;
