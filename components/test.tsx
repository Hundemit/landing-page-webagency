export default function Test() {
  return (
    <section className="flex flex-col items-center justify-center w-full relative px-5 md:px-10 border-t">
      <div className="border-x mx-5 md:mx-10 relative w-full flex items-center justify-center">
        <div className="min-h-full h-full min-w-4 md:min-w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

        <div className="flex flex-col items-center justify-center w-full">
          <div className="border-b h-full p-10 md:p-14">
            <h2 className="text-2xl font-bold">Empower Your Workflow with AI</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            <div className="flex flex-col items-center justify-center w-full bg-red-50 aspect-square border-r"></div>
            <div className="flex flex-col items-center justify-center w-full bg-blue-50 aspect-square"></div>
          </div>
        </div>
        <div className=" h-full min-w-4 md:min-w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
      </div>
    </section>
  );
}
