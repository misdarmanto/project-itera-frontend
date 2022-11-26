import { ButtonaInterfaces } from "./buttonInterfaces";

interface ButtonTypes extends ButtonaInterfaces {}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Button({ title, onClick = () => null, className = "", type = "button" }: ButtonTypes) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        className,
        "text-teal-500 bg-white border border-teal-300 focus:outline-none hover:bg-teal-500 hover:text-white focus:ring-4 focus:ring-teal-200 font-medium rounded-lg text-sm px-5 py-1.5",
      )}
    >
      {title}
    </button>
  );
}
