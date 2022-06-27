import { useState } from 'react'
import './App.css'
import quotes from './quotes.json'

const colors = [ "#FF7F50", "#DC143C", "#D2691E", "#008B8B", "#00008B", "#8B008B", "#FF1493", "#1E90FF", "#FF00FF", "#DAA520", "#FF69B4", "#FF0000", "#87CEEB", "#663399" ]


function App() {



  const random = Math.floor(Math.random() * quotes.length);
 
  const [index, setIndex] = useState(random);

  const changeQuote = () => {
    const random2 = Math.floor(Math.random() * quotes.length);
    setIndex(random2);
  }

  const randomColor = Math.floor(Math.random() * colors.length);
  const color = colors[ randomColor ] 

  document.body.style = `background: ${color}`;
  const appBack = { backgroundColor: color };

  return (
    <div className="App">
      <div className='quoteBox' style={{ color: color }}>
        <p className='quote'>{quotes[index].quote}</p>
        <p className='author'>{quotes[index].author}</p>
        <button onClick={changeQuote} className='changeButton' style={{ background: color }}></button>
       </div>
    </div>
  )
}

export default App
