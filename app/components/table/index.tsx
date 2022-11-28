import Button from "../buttom";
import DropDown from "../dropdown";
import Search from "../form/search";
import Pagination from "../pagination";
import { useState } from "react";
import moment from "moment";
import * as XLSX from "xlsx";

const TableHeader = ({ headers }: any) => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {headers.map((header: any, index: number) => (
          <th key={index} scope="col" className="py-3 px-6">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody = ({ body, actionComponent = () => null }: any) => {
  const [indexData, setIndexData] = useState<number>(0);
  return (
    <tbody>
      {body.map((item: any, index: number) => {
        const keys = Object.keys(item);
        const more = body[indexData];
        return (
          <tr
            key={index}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            {keys.map((name) => {
              if (name !== "more") {
                return (
                  <td key={name} className="py-4 px-6">
                    {item[name]}
                  </td>
                );
              }
            })}
            {actionComponent(more, index) && (
              <td onClick={() => setIndexData(index)} className="py-4 px-6">
                {actionComponent(more, index)}
              </td>
            )}
          </tr>
        );
      })}
    </tbody>
  );
};

export default function Table({ header, body, actionComponent }: any) {
  const download = async () => {
    try {
      let xlsRows: any[] = body.map((data: any) => {
        const newRows: any = [];
        const objKey = Object.keys(data);
        objKey.forEach((key) => {
          if (key !== "more") {
            newRows.push(data[key]);
          }
        });
        return newRows;
      });
      const xlsHeader = header.filter((item: string) => item.toUpperCase() !== "ACTION");
      const createXLSLFormatObj = [xlsHeader, ...xlsRows];
      console.log([xlsHeader, ...xlsRows]);
      const filename = `user_${moment().format("DD-MM-YYYY")}.xlsx`;

      const worksheetName = "Sheet1";
      if (typeof console !== "undefined") console.log(new Date());
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.aoa_to_sheet(createXLSLFormatObj);

      XLSX.utils.book_append_sheet(workbook, worksheet, worksheetName);
      XLSX.writeFile(workbook, filename);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-5">
      <div className="flex justify-between items-center p-4 bg-white">
        <div className="flex items-center">
          <DropDown />
          <Button className="mx-2" onClick={download} title="Download" />
        </div>
        <Search />
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <TableHeader headers={header} />
        <TableBody body={body} actionComponent={actionComponent} />
      </table>
      <Pagination />
    </div>
  );
}
