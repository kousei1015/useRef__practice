import React, { useState, useRef, useEffect} from 'react'

const App = () => {
  const [value, setValue] = useState("")
  const ref = useRef<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    ref.current = value
  }, [value])

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center"}}>
      <input type="text" value={value} onChange={handleChange} />
      <p>value is {value}</p>
      <p>previous value is {ref.current}</p>
    </div>
  )
}

export default App