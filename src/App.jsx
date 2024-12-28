


import React, { useContext, useEffect } from 'react';
import Routing from './Router.jsx';
import { DataContext } from './Components/DataProvider/DataProvider.jsx';
import { Type } from "./Utility/Action.Type.js";
import { auth } from "./Utility/Firebase.js";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    // Firebase listener to set the user state
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // Update the user state in global store
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        // Clear the user state if user signs out
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, [dispatch]);

  return <Routing />;
}

export default App;
