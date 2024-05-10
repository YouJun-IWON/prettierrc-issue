//! 들어온 API 에 따라 데이터를 정렬한다.

const useSendData = (targetData: any, address: string) => {
  let result = undefined;

  //! /conversation-coherence-evaluation => n개의 묶음으로 가자

  if (address === "/conversation-coherence-evaluation" || address === "/conversation-resolution-evaluation") {
  } else if (address === "/summarization-evaluation") {
    const inputData = targetData.map((item: any) => ({
      document: item.context,
      response: item.response,
    }));

    console.log("inputData", inputData);

    result = {
      failure_threshold: 0.5,
      data: inputData,
    };

    return result;
  } else if (address === "/contains-keyword" || address === "/contains-link") {
  } else if (
    address === "/prompt-injection-evaluation" ||
    address === "/pii-detection" ||
    address === "/openai-content-moderation" ||
    address === "/gibberish-text-evaluation" ||
    address === "/sensitive-topics-evaluation" ||
    address === "/safe-for-work-text-evaluation"
  ) {
  } else if (address === "/similarity-evaluation") {
  }

  return null;
};

export default useSendData;
