import { DataTableColumnHeader } from "@/components/table/sandbox/datasets/dataset/components/data-table-column-header";
import { Task } from "@/components/table/sandbox/datasets/dataset/data/schema";

import { ColumnDef } from "@tanstack/react-table";
import React from "react";

const addLoadingColumn = ({ addressName, addColumns }: { addressName: string; addColumns: any }) => {
  const newColumn: ColumnDef<Task>[] = [
    {
      id: addressName,
      accessorKey: addressName, // custom
      header: ({ column }) => <DataTableColumnHeader column={column} title={addressName} />, // custom
      //! 이거 row 뺏는데 잘 작동하는지 확인
      cell: () => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] overflow-y-auto custom-scrollbar h-[100px]  font-medium">loading...</span>
          </div>
        );
      },
    },
  ];
  addColumns(newColumn);
};

export default addLoadingColumn;
