import { useEffect, useState } from "react";

import { DataTableViewOptions } from "./data-table-view-options";

import { Input } from "@/components/ui/input";
import { useDatasetTable } from "@/store/useDatasetTableStore";

export function DataTableToolbar() {
  const { table } = useDatasetTable();
  const { columns } = useDatasetTable();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (table) {
      table.getColumn("query")?.setFilterValue(searchTerm);
    }
  }, [searchTerm, table, columns]);

  if (!table) return null;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search prompts and responses"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <DataTableViewOptions table={table} columns={columns} />
      </div>
    </div>
  );
}
