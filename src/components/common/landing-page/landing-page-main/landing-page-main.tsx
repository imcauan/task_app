import { FaArrowDown } from "react-icons/fa";

export function LandingPageMain() {
  return (
    <div className="w-full  flex justify-center mt-60 p-2 text-center">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl lg:text-6xl font-bold">
          Your tasks organized in a few seconds.
        </h1>
        <p className="font-normal text-xl lg:text-3xl text-neutral-400 dark:text-neutral-700">
          Get your team connected within a single app.
        </p>
        <p className="flex items-center text-xl gap-2 p-2 text-black dark:text-white">
          <FaArrowDown />
          Scroll On
        </p>
      </div>
    </div>
  );
}
