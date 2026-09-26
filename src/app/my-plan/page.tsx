'use client';

import React, { useContext, useState } from 'react';
import { ExerciseContext } from '../context/ExerciseContext';
import { IExercise } from '../type';
import DeleteCard from '../DeleteCard/DeleteCard';



export default function MyPlanContent() {
  const context = useContext(ExerciseContext);

  const {
    todayPlan = [],
    saved = [],
    handleDelete,
    handleMarkAsDone,
  } = context || {};

  const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
  const [sortBy, setSortBy] = useState<'rating' | 'calories' | 'duration'>('duration');

  const currentList = activeTab === 'today' ? todayPlan : saved;

  const totalMinutes = currentList.reduce(
    (sum: number, item: IExercise) => sum + (item.duration || 0),
    0
  );

  const totalCalories = currentList.reduce(
    (sum: number, item: IExercise) => sum + (item.caloriesBurned || 0),
    0
  );

  const sortList = (list: IExercise[]) => {
    const sortedList = [...list];

    if (sortBy === 'rating') {
      sortedList.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === 'calories') {
      sortedList.sort((a, b) => (a.caloriesBurned || 0) - (b.caloriesBurned || 0));
    } else if (sortBy === 'duration') {
      sortedList.sort((a, b) => (a.duration || 0) - (b.duration || 0));
    }
    return sortedList;
  };

  const displayList = sortList(currentList);

  return (
    <div className="space-y-8 pt-10 bg-[#12141c] text-white min-h-screen">
    
      

    
      <div className="border container mx-auto border-zinc-800/80 p-8 md:p-10 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative">
        <div className="flex flex-col justify-center pr-0 md:pr-8">
          <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">
            Exercises
          </span>
          <span className="text-5xl font-black text-[#ccff00]">
            {currentList.length}
          </span>
        </div>

        <div className="hidden md:block absolute left-1/3 top-8 bottom-8 w-px bg-zinc-800/80" />

        <div className="flex flex-col justify-center md:px-8">
          <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">
            Minutes
          </span>
          <span className="text-5xl font-black text-white">{totalMinutes}</span>
        </div>

        <div className="hidden md:block absolute left-2/3 top-8 bottom-8 w-px bg-zinc-800/80" />

        <div className="flex flex-col justify-center md:pl-8">
          <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">
            Calories
          </span>
          <span className="text-5xl font-black text-white">{totalCalories}</span>
        </div>
      </div>

      {/* Navigation & Controls Bar */}
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#181a24] p-2 rounded-xl border border-zinc-800/80">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('today')}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase transition-all ${
              activeTab === 'today'
                ? 'bg-[#232733] text-white shadow-md border border-zinc-700/50'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Today&apos;s Plan ({todayPlan.length})
          </button>

          <button
            onClick={() => setActiveTab('saved')}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase transition-all ${
              activeTab === 'saved'
                ? 'bg-[#232733] text-white shadow-md border border-zinc-700/50'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Saved ({saved.length})
          </button>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <span className="text-xs text-zinc-400 font-medium">Sort By</span>
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as 'rating' | 'calories' | 'duration')
            }
            className="select select-sm select-bordered bg-[#232733] text-white border-zinc-700 focus:outline-none text-xs"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Render Dynamic Cards List */}
      <div className="container mx-auto space-y-4">
        {displayList.length > 0 ? (
          displayList.map((item: IExercise) => (
            <DeleteCard
              key={item.id}
              item={item}
              activeTab={activeTab}
              onDelete={handleDelete!}
              onMarkAsDone={handleMarkAsDone}
            />
          ))
        ) : (
          <div className="text-center py-12 border border-dashed border-zinc-800 rounded-2xl text-zinc-500">
            No exercises found in this list.
          </div>
        )}
      </div>
    </div>
  );
}