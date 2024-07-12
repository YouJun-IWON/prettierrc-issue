"use client";

import { useEffect, useState } from "react";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
  columns: any;
}

export function DataTableViewOptions<TData>({
  table,
  columns,
}: DataTableViewOptionsProps<TData>) {
  const [columnVisibility, setColumnVisibility] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    const initialColumnVisibility = table
      .getAllColumns()
      .filter(
        column =>
          typeof column.accessorFn !== "undefined" && column.getCanHide(),
      )
      .reduce(
        (acc, column) => {
          acc[column.id] = column.getIsVisible();
          return acc;
        },
        {} as Record<string, boolean>,
      );

    setColumnVisibility(initialColumnVisibility);
  }, [table, columns]);

  const handleColumnToggle = (columnId: string, value: boolean) => {
    const column = table.getColumn(columnId);
    if (column) {
      column.toggleVisibility(value);
      setColumnVisibility(prev => ({ ...prev, [columnId]: value }));
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
        >
          <MixerHorizontalIcon className="mr-2 h-4 w-4" />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            column =>
              typeof column.accessorFn !== "undefined" && column.getCanHide(),
          )
          .map(column => (
            <DropdownMenuCheckboxItem
              key={column.id}
              className="capitalize"
              checked={columnVisibility[column.id] ?? false}
              onCheckedChange={value => handleColumnToggle(column.id, value)}
            >
              {column.id}
            </DropdownMenuCheckboxItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}