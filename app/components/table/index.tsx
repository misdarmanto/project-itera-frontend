import Button from "../buttom";
import DropDown from "../dropdown";
import Search from "../form/search";
import Pagination from "../pagination";

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

const TableBody = ({ body }: any) => {
  return (
    <tbody>
      {body.map((item: any, index: number) => {
        const keys = Object.keys(item);
        return (
          <tr
            key={index}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            {keys.map((name) => (
              <td key={name} className="py-4 px-6">
                {item[name]}
              </td>
            ))}
            <td className="py-4 px-6">
              <Button title="More" />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default function Table({ header, body }: any) {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-5">
      <div className="flex justify-between items-center p-4 bg-white">
        <div className="flex items-center">
          <DropDown />
          <Button title="Download" />
        </div>
        <Search />
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <TableHeader headers={header} />
        <TableBody body={body} />
      </table>
      <Pagination />
    </div>
  );
}
