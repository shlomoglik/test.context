import { createContext } from 'react';

const dbContext = createContext({
  doc: {
    firstName: "",
    lastName: "",

  },

  //simple field --> firstName:"shlomo"
  addField: (fieldMap,fieldVal) => { },

});

export default dbContext;