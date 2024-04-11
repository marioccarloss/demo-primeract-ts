import { useState, ChangeEvent } from 'react';
import { InputText } from 'primereact/inputtext';

function App() {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <InputText
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
    </>
  )
}

export default App
