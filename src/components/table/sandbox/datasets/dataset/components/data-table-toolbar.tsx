import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";

import { useEffect, useState } from "react";
import { useDatasetTable } from "@/store/useDatasetTable";

export function DataTableToolbar() {
  const { table } = useDatasetTable();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (table) {
      table.getColumn("query")?.setFilterValue(searchTerm);
    }
  }, [searchTerm]);

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
        {/* <DataTableFacetedFilter column={table.getColumn("status")} title="Status" options={statuses} />
        <DataTableFacetedFilter column={table.getColumn("priority")} title="Priority" options={priorities} /> */}

        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
