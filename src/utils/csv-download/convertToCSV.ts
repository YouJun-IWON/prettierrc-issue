export const convertToCSV = (objArray: any) => {
  const array = typeof objArray !== "object" ? JSON.parse(objArray) : objArray;
  let str = "";
  let row = "";

  // Extract headers
  for (const index in array[0]) {
    if (row !== "") row += ",";
    row += index;
  }
  str += row + "\r\n";

  // Extract values
  for (let i = 0; i < array.length; i++) {
    let line = "";
    for (const index in array[i]) {
      if (line !== "") line += ",";
      line += `"${array[i][index]}"`; // Enclose each field in double quotes to handle commas within fields
    }
    str += line + "\r\n";
  }

  return str;
};
