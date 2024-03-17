export default function MainLayout({ ...props }) {
  return (
    <>
      <div
        className="w-full h-full  flex flex-col lg:flex-row  items-center justify-center p-4 gap-6"
        {...props}
      ></div>
    </>
  );
}
