import { cn } from "@/lib/utils";

export function SuccessInNumbers({ className }: { className?: string }) {
  return (
    <div className="flex flex-col lg:gap-20 gap-10   py-36  items-center justify-center mx-4 ">
      <div className=" flex flex-col gap-4 lg:flex-row justify-between w-full max-w-7xl items-start ">
        <div className=" items-center gap-2 h-fit flex">
          <hr className="w-8  border-primary" />
          <h2 className="text-lg font-medium">Success In Numberss</h2>
        </div>
        <h2 className="lg:text-5xl text-4xl  font-semibold lg:max-w-2xl  duration-300">Driven by Data, Powered by Creativity Impact in Numbers</h2>
      </div>

      <div className="flex gap-4   max-w-7xl   w-full lg:h-[500px] h-[400px]  items-center justify-center duration-300 px-0">
        <div className={cn("h-full w-full max-w-1/2 lg:max-w-none", className)}>
          <img src="https://cdn.prod.website-files.com/684a11845c7dd0b4b7745cd9/684f57a20f6e64c09db89289_Celie-1-1170x780.webp" alt="" className="w-full h-full object-cover rounded-l-xl" />
        </div>
        <div className={cn("h-full gap-4 w-1/2 max-w-lg flex flex-col items-start justify-center", className)}>
          <div className={cn("h-full w-full bg-card gap-3 flex flex-col lg:items-end items-center justify-center rounded-r-xl border-l-8 border-primary sm:px-8 px-4")}>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">160%</h3>
            <p className="text-base sm:text-lg lg:text-xl font-semibold opacity-70">Increase in Retention</p>
          </div>
          <div className={cn("h-full lg:w-5/6 w-full duration-300 bg-white gap-3 flex flex-col items-end justify-center rounded-r-xl border-l-8 border-primary sm:px-8 px-4")}>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">160%</h3>
            <p className="text-base sm:text-lg lg:text-xl font-semibold opacity-70">Increase in Retention</p>
          </div>
          <div className={cn("h-full lg:w-4/6 w-full duration-300 bg-card gap-3 flex flex-col items-end justify-center rounded-r-xl border-l-8 border-primary sm:px-8 px-4")}>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">160%</h3>
            <p className="text-base sm:text-lg lg:text-xl font-semibold opacity-70">Increase in Retention</p>
          </div>
        </div>
      </div>
    </div>
  );
}
