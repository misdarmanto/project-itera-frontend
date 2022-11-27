import { useState } from "react";
import { LoaderFunction, redirect, useLoaderData } from "remix";
import Button from "~/components/buttom";
import Table from "~/components/table";
import { CONFIG } from "~/config";
import { API } from "~/services/api";
import { checkSession } from "~/services/session";

export let loader: LoaderFunction = async ({ request }) => {
  // const session: any = await checkSession(request);
  // if (!session) return redirect("/login");

  try {
    const data = await API.get(request, `${CONFIG.base_url_api.default}/user/list`);
    const header = ["name", "email", "role", "RFID", "Vehicle Total", "action"];
    const body = data.items.map((item: any) => {
      return {
        name: item.user_name,
        email: item.email,
        role: item.role,
        rfid: item.rfid,
        vheicleTotal: item.vehicles.length,
      };
    });
    const table = { header, body };
    return { table };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default function Index() {
  const loader = useLoaderData();
  console.log(loader);

  if (!loader) return <h1 className="text-3xl text-red fomt-bold text-center">Error</h1>;

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Table
      header={loader.table.header}
      body={loader.table.body}
      actionComponent={(item: any) => (
        <>
          <Button title="More" onClick={() => setIsOpenModal(!isOpenModal)} />

          {isOpenModal && (
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-10"
                onClick={() => setIsOpenModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative flex justify-between h-96 w-full max-w-xl p-8 mx-auto bg-white rounded-md shadow-lg">
                  <h1>detail user</h1>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    />
  );
}
