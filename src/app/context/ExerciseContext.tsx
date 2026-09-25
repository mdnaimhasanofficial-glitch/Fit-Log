'use client'
import React, { createContext, useState } from 'react';


const ExerciseContext = createContext({})


const ExerciseProvider = ({children}: {children: React.ReactNode}) => {

    const [todayPlan, setTodayPlan] = useState([]);
    const [saved, setSaved] = useState([]);

    const sharedData = {
        todayPlan,
        setTodayPlan,
        saved,
        setSaved,
    }

    return <ExerciseContext.Provider value={sharedData} >
        {children}
    </ExerciseContext.Provider>
};

export default ExerciseProvider;