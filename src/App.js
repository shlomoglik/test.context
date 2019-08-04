// react functions
import React, { useReducer, useEffect, useContext } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

//components
import MyForm from './view/Form'

//context
import DBcontext from './context/dbContext'
import dbReducer from './context/dbReducer';
import { HIDE_GROUP, HIDE_SECTION, ADD_FIELD } from './context/types';


const App = () => {
  const initialState = {
    doc:{}
  }

  const [state, dispatch] = useReducer(dbReducer , initialState);
  
  const addField = (fieldMap,fieldVal) => dispatch({ type: ADD_FIELD, fieldMap , fieldVal });
  const hideGroup = (sectionID,groupID) => dispatch({ type: HIDE_GROUP, groupID , sectionID });
  const hideSection = (sectionID) => dispatch({ type: HIDE_SECTION,  sectionID });

  return (
    <Router>
      <DBcontext.Provider
        value={{
          doc:{},
          hideGroup,
          hideSection,
          addField,
          ...state
        }}
      >
        <MyForm key={Math.round(Math.random() * 10000)}/>
      </DBcontext.Provider>
    </Router>
  );
};

export default App


