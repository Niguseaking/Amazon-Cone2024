


import React, { createContext, useReducer } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children, reducer, initialState }) => {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};

// import React, { createContext, useReducer } from "react";
// import { Type } from "../../Utility/Action.Type.js";

// export const DataContext = createContext();

// const initialState = {
//   user: null,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case Type.SET_USER:
//       return {
//         ...state,
//         user: action.user,
//       };
//     default:
//       return state;
//   }
// };

// export const DataProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <DataContext.Provider value={[state, dispatch]}>
//       {children}
//     </DataContext.Provider>
//   );
// };

