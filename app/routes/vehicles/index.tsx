import { LoaderFunction, useLoaderData } from "remix";
import { useState } from "react";
import Button from "~/components/buttom";
import Table from "~/components/table";
import { API } from "~/services/api";
import { CONFIG } from "~/config";

export let loader: LoaderFunction = async ({ request }) => {
  try {
    const response = await API.get(request, `${CONFIG.base_url_api.default}/vehicle/list`);
    const header = ["name", "type", "plate", "color", "owner", "action"];

    const body = response.items.map((item: any) => {
      return {
        name: item.name,
        type: item.type,
        plate: item.plateNumber,
        color: item.color,
        owner: item.user.user_name,
        more: { ...item },
      };
    });
    const table = { header, body };
    return { table, response };
  } catch (error) {
    console.error(error);
  }
};

export default function Index() {
  const loader = useLoaderData();
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <Table
      header={loader.table.header}
      body={loader.table.body}
      actionComponent={(item: any) => {
        return (
          <>
            <Button title="More" onClick={() => setIsOpenModal(!isOpenModal)} />

            {isOpenModal && (
              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                  className="fixed inset-0 w-full h-full bg-black opacity-10"
                  onClick={() => setIsOpenModal(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                  <div className="relative flex w-full max-w-xl p-8 mx-auto bg-white rounded-md shadow-lg">
                    <img className="w-64 h-48 rounded-sm" src={item.more.photo} alt="image vehecle" />

                    <div className="mx-5">
                      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                        Detail:
                      </h2>
                      <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
                        <li>owner: {item.more.user.user_name}</li>
                        <li>name: {item.more.name}</li>
                        <li>type: {item.more.type}</li>
                        <li>plate: {item.more.plateNumber}</li>
                        <li>color: {item.more.color}</li>
                        <li>register at: {item.more.createdOn}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      }}
    />
  );
}
