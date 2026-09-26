import Link from "next/link";
import { IExercise } from "../type";
import ExerciseCard from "../exerciseCard/page";


const getLibraryData = async (): Promise<IExercise[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
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
              <ExerciseCard item={item}/>
            
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Library;
