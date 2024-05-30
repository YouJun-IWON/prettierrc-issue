import { useGenerateData } from "@/store/useGenerateDataStore";
import { useModal } from "@/store/useModalStore";
import { useTestDatasetStore } from "@/store/useTestDatasetStore";

import { useMutation } from "@tanstack/react-query";

const useGenerateServer = (): { mutate: any; isPending: any } => {
  const { onClose } = useModal();
  const { setDataset, dataset } = useTestDatasetStore();

  const { type } = useGenerateData();

  function transformData(data: any) {
    const lastDataId = dataset.length > 0 ? dataset[dataset.length - 1].id : 0;

    return data.map((item: any, index: number) => ({
      id: lastDataId + index + 1,
      query: item.question || item.query,
      context: "",
      response: item.answer,
      expected: "",
    }));
  }

  return useMutation({
    mutationFn: async (result: any) => {
      const response = await fetch(`https://llm-eval.aim-intelligence.com${type}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result),
      });

      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    },
    onSuccess(data) {
      if (!data) throw new Error("No data found");

      const transformedData = transformData(data);

      setDataset([...dataset, ...transformedData]);

      setTimeout(() => {
        onClose();
      }, 10);
    },
    onError: () => {},
  });
};

export default useGenerateServer;
