import React, { useState } from 'react'
import ReactInputLabels from 'react-input-labels'
import 'react-input-labels/dist/index.css'

const App = () => {
  const [values, setValues] = useState<string[]>(['xx'])



  return <>
    <ReactInputLabels
      values={values}
      onChange={(vals: string[]) => setValues(vals)}
      placeholder="Inserisci testo"
      className="my-search-tags"
      itemClassName="my-tag"
      inputClassName="my-tag-input"
      closeItemCmp={'x'}
      />

    <p>Current values: {values.join(', ')}</p>
  </>
}

export default App
