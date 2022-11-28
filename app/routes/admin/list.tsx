import Button from "~/components/buttom";

export default function Camera() {
  return (
    <div className="bg-white w-full sm:w-2/5 m-2 h-96 p-5 overflow-y-auto rounded-md shadow-md">
      <h1 className="text-center">User Access</h1>

      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {[1, 2, 3, 4, 5].map((data) => (
          <li key={data} className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">Bonnie Green</p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">email@gmail.com</p>
              </div>
             <Button title="edite" className="p-2"/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
