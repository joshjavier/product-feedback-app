export function CardSkeleton() {
  return (
    <div className="animate-pulse bg-white rounded-[10] p-6 sm:py-7 sm:px-8 sm:flex">
      <div className="grow">
        <div className="bg-zircon rounded-full max-w-[180] h-[26]"></div>
        <div className="bg-zircon rounded-full max-w-[374] h-[23] mt-1"></div>
        <div className="bg-zircon rounded-full w-[111] h-[30] mt-3"></div>
      </div>
      <div className="flex justify-between items-center mt-4 sm:contents">
        <div className="bg-zircon rounded-full sm:-order-1 sm:mr-10 w-[69] h-8 sm:w-10 sm:h-[53]"></div>
        <div className="bg-zircon rounded-full pl-[25px] sm:ml-auto self-center w-10 h-[19] sm:w-11 sm:h-[23]"></div>
      </div>
    </div>
  );
}

export function CardListSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}
