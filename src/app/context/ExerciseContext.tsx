'use client';

import React, { createContext, useState } from 'react';
import { IExercise } from '../type';
import { toast, ToastContainer } from 'react-toastify';

interface ExerciseContextType {
    todayPlan: IExercise[];
    saved: IExercise[];
    setTodayPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
    setSaved: React.Dispatch<React.SetStateAction<IExercise[]>>;
    addToTodayPlan: (item: IExercise) => void;
    addToSaved: (item: IExercise) => void;
    handleDelete: (id: string | number, type: 'today' | 'saved') => void;
    handleMarkAsDone: (id: string | number) => void;
}

export const ExerciseContext = createContext<ExerciseContextType | null>(null);

const ExerciseProvider = ({ children }: { children: React.ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IExercise[]>([]);
  const [saved, setSaved] = useState<IExercise[]>([]);


  const addToTodayPlan = (item: IExercise) => {
    const isExist = todayPlan.some((plan) => plan.id === item.id);

    if (isExist) {
      toast.error('This exercise is already in Today\'s Plan!');
    } else {
      setTodayPlan((prev) => [...prev, item]);
      toast.success('Added to Today\'s Plan successfully! 🚀');
    }
  };



  const addToSaved = (item: IExercise) => {
    const isExist = saved.some((plan) => plan.id === item.id);

    if (isExist) {
      toast.error('This exercise is already Saved!');
    } else {
      setSaved((prev) => [...prev, item]);
      toast.success('Added to Saved list! ❤️');
    }
  };


  const handleDelete = (id: string | number, type: 'today' | 'saved') => {
    if (type === 'today') {
      setTodayPlan((prev) => prev.filter((item) => item.id !== id));
    } else {
      setSaved((prev) => prev.filter((item) => item.id !== id));
    }
    toast.error('Item removed from list!');
  };


  const handleMarkAsDone = (id: string | number) => {
    setTodayPlan((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
    toast.success('Exercise status updated! 🎉');
  };

  return (
    <ExerciseContext.Provider
      value={{
        todayPlan,
        saved,
        setTodayPlan,
        setSaved,
        addToTodayPlan,
        addToSaved,
        handleDelete,
        handleMarkAsDone,
      }}
    >

      <ToastContainer position="top-center" />
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseProvider;