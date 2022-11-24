import { ButtonaInterfaces } from "./buttonInterfaces";

interface ButtonTypes extends ButtonaInterfaces {}

export default function Button({ title }: ButtonTypes) {
  return (
    <button
      type="button"
      onClick={() => null}
      className="text-teal-500 mx-2 bg-white border border-teal-300 focus:outline-none hover:bg-teal-500 hover:text-white focus:ring-4 focus:ring-teal-200 font-medium rounded-lg text-sm px-5 py-1.5"
    >
      {title}
    </button>
  );
}
