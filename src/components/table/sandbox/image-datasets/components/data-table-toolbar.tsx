import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";
import { priorities, statuses } from "./data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { useDatasetsTable } from "@/store/useDatasetsTableStore";
import { useEffect, useState } from "react";

export function DataTableToolbar() {
  const { table } = useDatasetsTable();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (table) {
      table.getColumn("title")?.setFilterValue(searchTerm);
    }
  }, [searchTerm, table]);

  if (!table) return null;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <DataTableFacetedFilter column={table.getColumn("status")} title="Status" options={statuses} />
        <DataTableFacetedFilter column={table.getColumn("priority")} title="Priority" options={priorities} />

        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}