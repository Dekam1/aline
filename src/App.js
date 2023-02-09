import React from 'react';
import pismo from '../src/pismo.png'

function App() {

  const [open, setOpen] = React.useState(false);
  const [pismoOpen, setPismoOpen] = React.useState(false);

  const openPismo = (e) => {
    setOpen(prev => !prev);
  }

  const test = () => {
    if(open) {
      setTimeout(() => {
        setPismoOpen(true)
        setOpen(false)
      }, 2000)
    }
  }

  test()

  return (
    <div className='main'>
      <button onClick={e => openPismo(e)} className={open ? "main_button active" : "main_button"}>
      </button>
      {pismoOpen && <div className='pismo'>
        <img src={pismo}></img>
      </div>}
    </div>
  )
}

export default App;
