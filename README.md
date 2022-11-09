# react-input-labels

> React component to insert a list of tags/labels in an input element


<!-- ![demo_image](https://user-images.githubusercontent.com/16925256/186970066-84f5741a-9d6d-442e-b5cf-7f62ceadb2a1.jpg) -->

[![NPM](https://img.shields.io/npm/v/react-input-labels.svg)](https://www.npmjs.com/package/react-input-labels) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-input-labels
```

## Usage

1 . Require react-input-labels after installation

```js
import ReactInputLabels from 'react-input-labels';
```

2 . Add style css from module

```js
import 'react-input-labels/dist/index.css'
```

3 . Include react-input-labels as in the following example

```tsx
import React, { useState } from 'react'
import ReactInputLabels from 'react-input-labels'
import 'react-input-labels/dist/index.css'

const App = () => {
  const [value, setValue] = useState('')

  return <>
    <ReactInputLabels
      values={values}
      onChange={(vals: string[]) => setValues(vals)}
      placeholder="Inserisci testo"
      className="my-search-tags"
      itemClassName="my-tag"/>
}
```

## Props

* values - control the current list of values
* onChange - subscribe to change events
* className - (optional) additional class applied to the component container
* itemClassName - (optional) additional class applied to each element
* placeholder - (optional) placeholder, the same char introduced in each element. If more than one char is present, only the first char will be considered


## Controlled Props

You can control the value / onChange props (specify the current value of the control) by providing values for them.


## License

MIT © [Mario Fornaroli](https://github.com/Mario Fornaroli)
