import { useDatasetTable } from "@/store/useDatasetTableStore";
import { useModal } from "@/store/useModalStore";
import addLoadingColumn from "@/utils/addLoadingColumn";

import { useMutation } from "@tanstack/react-query";
import { CircleCheck, CircleX } from "lucide-react";

const useEvaluationServer = (): { mutate: any; isPending: any } => {
  const { address, addressName, addColumns, columns, setColumns } = useDatasetTable();
  const { onOpen } = useModal();

  return useMutation({
    mutationFn: async (result: any) => {
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
      return response.json();
    },
    onMutate() {
      addLoadingColumn({ addressName, addColumns });
    },
    onSuccess(data) {
      console.log(data);
      if (!data) throw new Error("No data found");
      //! 여기서 결과값에 따른 Column row 데이터 수정

      // data[].failed 값으로 열 데이터 업데이트
      const updatedColumns = columns.map(column => {
        if (column.id === addressName) {
          return {
            ...column,
            cell: (info: any) => {
              const rowIndex = info.row.index;
              const failedValue = data[rowIndex]?.failed;
              const api_result = data[rowIndex];

              return (
                <div
                  className="flex items-center cursor-pointer justify-center"
                  onClick={() => {
                    onOpen("showAPIResult", { api_result });
                  }}
                >
                  {failedValue ? (
                    <CircleX className="text-red-500" width={50} height={50} />
                  ) : (
                    <CircleCheck className="text-blue-500" width={50} height={50} />
                  )}
                </div>
              );
            },
          };
        }
        return column;
      });

      setColumns(updatedColumns);
      // setTimeout(() => {
      // }, 10);
    },
    onError: () => {
      const updatedColumns = columns.map(column => {
        if (column.id === addressName) {
          return {
            ...column,
            cell: () => <div className="flex items-center justify-center">Error occurred!</div>,
          };
        }
        return column;
      });

      setColumns(updatedColumns);
    },
  });
};

export default useEvaluationServer;
