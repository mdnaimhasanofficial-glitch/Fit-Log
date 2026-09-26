import Image from "next/image";
import Link from "next/link";
import { IExercise } from "../type";


const getLibraryData = async (): Promise<IExercise[]> => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const Library = async () => {
  const libraryData = await getLibraryData();

  return (
    <section className="bg-[#0b0c10] text-white min-h-screen py-12 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-wider uppercase text-white">
            THE LIBRARY
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Exercises Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {libraryData?.map((item: IExercise) => (
            <Link href={`/workouts/${item.id}`} key={item.id}>
              <div
                className="bg-[#12141a] rounded-2xl p-4 border border-gray-800/60 hover:border-gray-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div>

                  <div className="relative w-full h-52 rounded-xl overflow-hidden mb-4 bg-gray-900">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>


                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.muscleGroups?.map((group, index) => (
                      <span
                        key={index}
                        className="bg-[#ccff00] text-black font-extrabold text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full"
                      >
                        {group}
                      </span>
                    ))}
                  </div>


                  <h3 className="text-lg font-black tracking-wide uppercase text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-400 mb-4">{item.equipment}</p>
                </div>

        
                <div className="flex items-center gap-2 text-xs text-gray-400 border-t border-gray-800/80 pt-3 mt-2">
                  <span>{item.duration} min</span>
                  <span>•</span>
                  <span>{item.caloriesBurned} kcal</span>
                  <span>•</span>
                  <span>★ {item.rating}</span>
                </div>
              </div>
            
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Library;
