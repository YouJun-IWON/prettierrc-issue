import React from "react";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/table/aimred/text-datasets/dataset/components/data-table-column-header";
import { Skeleton } from "@/components/ui/skeleton";
import { Task } from "@/validation/image-schema";

const addLoadingColumn = ({
  addressName,
  addColumns,
}: {
  addressName: string;
  addColumns: any;
}) => {
  const newColumn: ColumnDef<Task>[] = [
    {
      id: addressName,
      accessorKey: addressName, // custom
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={addressName} />
      ), // custom

      cell: () => {
        return <Skeleton className="max-w-[210px]  h-[100px] " />;
      },
    },
  ];
  addColumns(newColumn);
};

export default addLoadingColumn;
