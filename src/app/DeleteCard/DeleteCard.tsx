'use client';

import Image from 'next/image';
import React from 'react';
import { IExercise } from '../type';
import Link from 'next/link';

interface DeleteCardProps {
  item: IExercise;
  activeTab: 'today' | 'saved';
  onDelete: (id: string | number, type: 'today' | 'saved') => void;
  onMarkAsDone?: (id: string | number) => void;
}

const DeleteCard = ({ item, activeTab, onDelete, onMarkAsDone }: DeleteCardProps) => {
  return (
    <div
      className={`rounded-2xl p-4 md:p-5 border transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
        item.isCompleted
          ? 'bg-emerald-950/20 border-emerald-500/50'
          : 'bg-[#181a24] border-zinc-800/80 hover:border-zinc-700'
      }`}
    >
      {/* Left side */}
      <div className="flex items-center gap-4 min-w-0">
        <div className="relative w-20 h-20 md:w-24 md:h-20 rounded-xl overflow-hidden bg-zinc-900 shrink-0">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>

        <div className="space-y-1 min-w-0">
          <h3 className="text-base md:text-lg font-black tracking-wide uppercase text-white truncate flex items-center gap-2">
            {item.name}
            {item.isCompleted && (
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
                Done
              </span>
            )}
          </h3>
          <p className="text-xs text-zinc-400">{item.equipment}</p>

          <div className="flex items-center gap-3 text-xs text-zinc-400 pt-1">
            <span>⏱ {item.duration} min</span>
            <span>🔥 {item.caloriesBurned} kcal</span>
            <span className="text-amber-400">★ {item.rating}</span>
          </div>
        </div>
      </div>

      {/* Right side: Action Buttons */}
      <div className="flex items-center gap-3 self-end md:self-center shrink-0">
        {/* শুধুমাত্র Today's Plan-এ "Mark as Done" বাটন দেখাবে */}
        {activeTab === 'today' && onMarkAsDone && (
          <button
            onClick={() => onMarkAsDone(item.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              item.isCompleted
                ? 'bg-emerald-500 text-black border-emerald-500'
                : 'border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500'
            }`}
          >
            {item.isCompleted ? '✓ Completed' : 'Mark as Done'}
          </button>
        )}

        
        <Link href={`/workouts/${item.id}`}>
          <button className="px-4 py-2 rounded-full border border-zinc-700 text-xs font-semibold text-zinc-300 hover:text-white hover:border-zinc-500 transition-all">
            View Details
          </button>
        </Link>

        
        <button
          onClick={() => onDelete(item.id, activeTab)}
          className="p-2 text-zinc-500 hover:text-red-500 transition-colors"
          title="Delete item"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default DeleteCard;