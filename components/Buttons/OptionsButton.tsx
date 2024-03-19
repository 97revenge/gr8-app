export default function OptionsButton({ ...props }) {
  return (
    <>
      <a
        href="#"
        className=" flex items-center justify-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        {...props}
      ></a>
    </>
  );
}
