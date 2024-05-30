import { convertToCSV } from "./convertToCSV";

interface csvProps {
  dataset: any;
  title: string | undefined;
}

export const downloadCSV = ({ dataset, title }: csvProps) => {
  const csvContent = `data:text/csv;charset=utf-8,${convertToCSV(dataset)}`;
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);

  link.setAttribute("download", title ? title : "dataset-list.csv");
  document.body.appendChild(link); // Required for FF
  link.click();
  document.body.removeChild(link);
};
