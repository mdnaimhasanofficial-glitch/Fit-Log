import { IExercise } from "@/app/type";
import Image from "next/image";
import React from "react";
import SavedButton from "@/app/actionButton/SavedButton";
import TodayButton from "@/app/actionButton/ActionButton";





interface WorkoutPageProps {
  params: Promise<{
    id: string;
  }>;
}


const getLibraryData = async (): Promise<IExercise[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const WorkoutPage = async ({ params }: WorkoutPageProps) => {
  const { id } = await params;
  const exerciseData = await getLibraryData();
  const workoutData = exerciseData.find(
    (item: IExercise) => item.id === Number(id)
  );

  if (!workoutData) {
    return (
      <div className="bg-[#0b0c10] text-white min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-lg">Workout not found!</p>
      </div>
    );
  }

  return (
    <section className="bg-[#0b0c10] text-white min-h-screen py-8 px-4 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Side: Exercise Image */}
        <div className="relative w-full h-95 sm:h-120 lg:h-135 rounded-3xl overflow-hidden bg-gray-900 border border-gray-800/60 shadow-2xl">
          <Image
            src={workoutData.image}
            alt={workoutData.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right Side: Details */}
        <div className="flex flex-col gap-6">
          {/* Header & Badges */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-wide text-white mb-2">
              {workoutData.name}
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {workoutData.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {workoutData.muscleGroups?.map((group, index) => (
                <span
                  key={index}
                  className="bg-[#d4ff00] text-black text-[11px] font-black tracking-wider uppercase px-3 py-1 rounded-full"
                >
                  {group}
                </span>
              ))}
            </div>
          </div>

          {/* Stats List Box */}
          <div className="bg-[#12141a] rounded-2xl p-5 border border-gray-800/80 divide-y divide-gray-800/60 text-xs">
            <div className="flex justify-between py-2.5">
              <span className="text-gray-400 uppercase tracking-wider font-semibold">
                EQUIPMENT
              </span>
              <span className="text-white font-medium">
                {workoutData.equipment}
              </span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-gray-400 uppercase tracking-wider font-semibold">
                DIFFICULTY
              </span>
              <span className="text-white font-medium">
                {workoutData.difficulty}
              </span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-gray-400 uppercase tracking-wider font-semibold">
                SETS
              </span>
              <span className="text-white font-medium">
                {workoutData.sets}
              </span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-gray-400 uppercase tracking-wider font-semibold">
                REPS
              </span>
              <span className="text-white font-medium">
                {workoutData.reps}
              </span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-gray-400 uppercase tracking-wider font-semibold">
                DURATION
              </span>
              <span className="text-white font-medium">
                {workoutData.duration} min
              </span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-gray-400 uppercase tracking-wider font-semibold">
                CALORIES
              </span>
              <span className="text-white font-medium">
                {workoutData.caloriesBurned} kcal
              </span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-gray-400 uppercase tracking-wider font-semibold">
                RATING
              </span>
              <span className="text-white font-medium">
                {workoutData.rating}
              </span>
            </div>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-white mb-3">
              INSTRUCTIONS
            </h3>
            <ol className="space-y-2.5 text-xs text-gray-300 leading-relaxed">
              {workoutData.instructions?.map((step, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="font-semibold text-gray-400">{idx + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            {/* Action Button */}
            <TodayButton  workoutData = {workoutData}/>
            <SavedButton workoutData={workoutData}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutPage;