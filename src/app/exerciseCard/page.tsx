import Image from "next/image";
import React from "react";
import { IExercise } from "../type";

const ExerciseCard = ({ item }: { item: IExercise }) => {
  return (
    <div className="bg-[#12141a] rounded-2xl p-4 border border-gray-800/60 hover:border-gray-700 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="relative w-full h-52 rounded-xl overflow-hidden mb-4 bg-gray-900">
          <Image
            src={item?.image}
            alt={item?.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {item?.muscleGroups?.map((group, index) => (
            <span
              key={index}
              className="bg-[#ccff00] text-black font-extrabold text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-black tracking-wide uppercase text-white mb-1">
          {item?.name}
        </h3>
        <p className="text-xs text-gray-400 mb-4">{item?.equipment}</p>
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-400 border-t border-gray-800/80 pt-3 mt-2">
        <span>{item?.duration} min</span>
        <span>•</span>
        <span>{item?.caloriesBurned} kcal</span>
        <span>•</span>
        <span>★ {item?.rating}</span>
      </div>
    </div>
  );
};

export default ExerciseCard;
