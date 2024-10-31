// src/context/MyContext.js
import React, { createContext, useState } from 'react';

export const Details = createContext();

export const DetailsScreenProvider = ({ children }) => {
    const [showDetails, setShowDetails] = useState(true);

    return (
        <Details.Provider value={{ showDetails, setShowDetails }}>
            {children}
        </Details.Provider>
    );
};



