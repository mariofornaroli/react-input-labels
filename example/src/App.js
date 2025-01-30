import React, { useState } from 'react';
import ReactInputLabels from 'react-input-labels'

const App = () => {
  const [values, setValues] = useState(['xx'])

  return (
    <>
      <ReactInputLabels
        values={values}
        onChange={(values) => setValues(values)}
        placeholder="Inserisci testo"
        className="my-search-tags"
        itemClassName="my-tag"
        inputClassName="my-tag-input"
        closeItemCmp={'x'}
      />

      <p>Current values: {values.join(', ')}</p>
    </>
  );
}

export default App;
