import { useState } from "react";
import Button from "~/components/buttom";
import { ActionFunction, Form, redirect, useActionData, useSubmit } from "remix";
import { API } from "~/services/api";
import { CONFIG } from "~/config";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  try {
    if (request.method == "POST") {
      const payload = {
        userName: formData.get("user_name"),
        email: formData.get("email"),
        password: formData.get("password"),
      };
      // await API.post(`${CONFIG.base_url_api}/user/signup`, payload);
      return redirect("/login");
    }
  } catch (err: any) {
    console.log(err);
    return { err };
  }
};

export default function Index() {
  const [passsword, setPassword] = useState<string>("");
  const [confirmPasssword, setConfirmPasssword] = useState<string>("");

  const actionData = useActionData();
  const submit = useSubmit();

  const handleSubmit = (event: any) => {
    submit(event.currentTarge, { method: "post", action: "/signup" });
  };

  console.log(actionData);

  return (
    <Form method="post" onSubmit={handleSubmit}>
      <div className="flex items-center justify-center bg-gray-50">
        <div className="w-full sm:w-1/2 m-2 mx-5 sm:m-10 bg-white rounded-md shadow-md p-5 sm:p-10">
          <h1 className="text-3xl font-semibold text-teal-500 text-center mb-10">Sign Up</h1>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
            <input
              type="text"
              name="user_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              placeholder="masukan nama lengkap"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              placeholder="nama@gmail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input
              type="password"
              name="password"
              value={passsword}
              onChange={(e: any) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              placeholder="password"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
            <input
              type="password"
              name="confirm_password"
              value={confirmPasssword}
              onChange={(e: any) => setConfirmPasssword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              placeholder="confirm password"
              required
            />
          </div>
          <Button className="w-full bg-teal-500 text-white hover:bg-teal-400" title="Submit" type="submit" />
        </div>
      </div>
    </Form>
  );
}
