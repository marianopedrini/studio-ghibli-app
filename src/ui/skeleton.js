export default function MoviesSkeleton() {
  const N = 6;
  return (
    <div className="container px-4 mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(N)].map((_, i) => (
        <div className="movie-card max-w-sm overflow-hidden my-3 mx-auto animate__animated animate__fadeIn  w-full animate-pulse">
          <div>
            <div className="movie-card__img-container relative">
              <p className="h-[200px] bg-gray-200"></p>
            </div>

            <div className="movie-card__title px-6 pt-4">
              <div class="h-6 bg-slate-100 rounded mb-2"></div>
              <div class="h-4 bg-slate-100 rounded"></div>
            </div>
          </div>
          <div className="px-6 py-4 grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-100 rounded col-span-2"></div>
            <div class="h-2 bg-slate-100 rounded col-span-1"></div>
            <div class="h-2 bg-slate-100 rounded col-span-1"></div>
            <div class="h-2 bg-slate-100 rounded col-span-1"></div>
          </div>
          <div className="px-6 pb-4 mt-4">
            <button className="hover:bg-sky-50 bg-slate-100 py-2 px-4 mb-4 w-1/3 h-8 rounded-full"></button>
          </div>
        </div>
      ))}
    </div>
  );
}
