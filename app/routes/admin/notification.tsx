import Button from "~/components/buttom";

export default function Camera() {
  return (
    <div className="bg-white w-full sm:w-2/5 m-2 h-96 p-5 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold text-center sm:my-8">Notification</h1>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">message</label>
      <textarea
        id="message"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
      <div className="flex flex-row justify-end">
        <Button title="send" className="my-5" />
      </div>
    </div>
  );
}
