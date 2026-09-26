// 'use client'
// import { Bookmark } from 'lucide-react';
// import React, { useContext } from 'react';
// import { IExercise } from '../type';
// import { ExerciseContext } from '../context/ExerciseContext';
// import { toast } from 'react-toastify';

// const SavedButton = ({workoutData}: {workoutData: IExercise}) => {
//     const {saved, setSaved}=useContext(ExerciseContext)as {
//         saved: IExercise[];
//         setSaved: React.Dispatch<React.SetStateAction<IExercise[]>>;
//     };

//     // const workoutProvider = useContext(ExerciseContext);

//   const handleSavedButton = () => {
//     const isAlreadyAdded = saved.some(
//       (item) => item.id === workoutData.id
//     );
//     if (isAlreadyAdded) {
//       toast.warning("This exercise is already in saved!");
//       return;
//     }
//     setSaved([...saved, workoutData]);
//     toast.success("Successfully added to saved!");
//   };

//     return (
//         <button
//         onClick={()=> handleSavedButton()}
//         className="flex items-center gap-2 bg-[#181a20] hover:bg-gray-800 text-white font-bold text-xs border border-gray-700/80 px-5 py-3 rounded-xl transition-all duration-200">
//                 <Bookmark className="w-4 h-4" />
//                 Save for later
//         </button>
//     );
// };

// export default SavedButton;