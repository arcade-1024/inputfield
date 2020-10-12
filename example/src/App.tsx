import React from 'react'

import { InputField } from 'inputfield'
import 'inputfield/dist/index.css'

const App = () => {
  return (
    <InputField
      placeholder='hello'
      type='text'
      isFilled={false}
      isBorder={false}
      shadow={true}
      isUnderlined={true}
    />
  )
}

export default App
