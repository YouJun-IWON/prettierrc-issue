import { useDatasetTable } from "@/store/useDatasetTable";
import addLoadingColumn from "@/utils/addLoadingColumn";

import { useMutation } from "@tanstack/react-query";

const useEvaluationServer = (): { mutate: any; isPending: any } => {
  const { address, addressName, addColumns } = useDatasetTable();

  return useMutation({
    mutationFn: async (result: any) => {
      console.log("realresult", result);
      const response = await fetch(`https://llm-eval.aim-intelligence.com${address}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result),
      });
      if (!response.ok) {
        throw new Error();
      }
      return response.body;
    },
    onMutate() {
      addLoadingColumn({ addressName, addColumns });
    },
    onSuccess() {
      //if (!stream) throw new Error("No stream found");
      //! 여기서 결과값에 따른 Column row 데이터 수정
      // 여기서 table 정의하기
      // clean up
      // setIsMessageUpdating(false);
      // setTimeout(() => {
      // }, 10);
      // if (!firstTouch) {
      //   setInput!("");
      // }
    },
    onError: () => {
      // if (!firstTouch) {
      // }
      // removeMessage(message.id);
    },
  });
};

export default useEvaluationServer;
