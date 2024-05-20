import { DataTableColumnHeader } from "@/components/table/sandbox/text-datasets/dataset/components/data-table-column-header";
import { Task } from "@/validation/image-schema";
import { Skeleton } from "@/components/ui/skeleton";

import { ColumnDef } from "@tanstack/react-table";
import React from "react";

const addLoadingColumn = ({ addressName, addColumns }: { addressName: string; addColumns: any }) => {
  const newColumn: ColumnDef<Task>[] = [
    {
      id: addressName,
      accessorKey: addressName, // custom
      header: ({ column }) => <DataTableColumnHeader column={column} title={addressName} />, // custom

      cell: () => {
        return <Skeleton className="max-w-[210px]  h-[100px] " />;
      },
    },
  ];
  addColumns(newColumn);
};

export default addLoadingColumn;
