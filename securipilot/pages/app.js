
import { useState } from 'react'

export default function App(){
  const [text,setText]=useState('')
  const [result,setResult]=useState('')

  const generate = async () => {
    const res = await fetch('/api/generate',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({text})
    })
    const data = await res.json()
    setResult(data.result)
  }

  return (
    <div style={{padding:40}}>
      <h1>IA SecuriPilot</h1>
      <textarea style={{width:'100%',height:120}} value={text} onChange={e=>setText(e.target.value)} />
      <button onClick={generate}>Générer</button>
      <pre style={{whiteSpace:'pre-wrap'}}>{result}</pre>
    </div>
  )
}
