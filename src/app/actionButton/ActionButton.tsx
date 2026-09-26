// 'use client'
// import { PlusCircle } from 'lucide-react';
// import React, { useContext } from 'react';
// import { IExercise } from '../type';
// import { ExerciseContext } from '../context/ExerciseContext';
// import { toast } from 'react-toastify';

// const TodayButton = ({ workoutData }: { workoutData: IExercise }) => {
//   const { todayPlan, setTodayPlan } = useContext(ExerciseContext) as {
//     todayPlan: IExercise[];
//     setTodayPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
//   };



//   const handleActionButton = () => {
//     const isAlreadyAdded = todayPlan.some(
//       (item) => item.id === workoutData.id
//     );


//     if (isAlreadyAdded) {
//       toast.warning("This exercise is already in today's plan!");
//       return;
//     }


//     setTodayPlan([...todayPlan, workoutData]);
//     toast.success("Successfully added to today's plan!");
//   };

//   return (
//     <button
//       onClick={handleActionButton}
//       className="flex items-center gap-2 bg-[#d4ff00] hover:bg-[#b8e600] text-black font-extrabold text-xs uppercase px-5 py-3 rounded-xl transition-all duration-200 cursor-pointer"
//     >
//       <PlusCircle className="w-4 h-4" /> Add to today&apos;s plan
//     </button>
//   );
// };

// export default TodayButton;