import React, { useContext } from 'react';

//context
import context from '../context/dbContext'

function MyForm(props) {
  const appState = useContext(context);

  const changeInput = (e) => {
    e.preventDefault();
    let field = e.target.elements[0];
    let fieldVal = field.value;
    let fieldMap = field.dataset.dbmap;
    if (fieldVal.trim() !== '') {
      appState.addField(fieldMap, fieldVal)
    }
  }


  return (
    <main>
      <form onSubmit={changeInput} >
        <input type="text" data-dbmap="lastName" />
        <input type="submit" value="עדכן" />
      </form>
      {appState.doc&&appState.doc.lastName?<div>{appState.doc.lastName}</div>:null}
    </main>

  )
}



export default MyForm;
