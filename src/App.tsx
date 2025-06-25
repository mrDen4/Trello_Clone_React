import { useState } from 'react'
import './App.css'
import { Board } from './Board'

function App() {
  const [boardName, setBoardName] = useState<string>('Title board');

  return (
    <>
      <Board 
        boardName={boardName}
      />
    </>
  )
}

export default App
