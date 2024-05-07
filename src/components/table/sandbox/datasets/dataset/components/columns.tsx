"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import { Task } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="ID" />,
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "query",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Query" />,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] h-[100px] truncate font-medium">{row.getValue("query")}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "context",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Context" />,
    cell: ({ row }) => {
      const context: string = row.getValue("context");
      const truncatedContext = context.length > 300 ? context.slice(0, 300) + "..." : context;

      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px]  h-[100px]  font-medium">{truncatedContext}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "response",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Response" />,
    cell: ({ row }) => {
      const context: string = row.getValue("response");
      const truncatedContext = context.length > 300 ? context.slice(0, 300) + "..." : context;

      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] h-[100px]  font-medium">{truncatedContext}</span>
        </div>
      );
    },
  },
];
