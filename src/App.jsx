import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componentes/Header'
import CardArt from './componentes/CardArt'
import response from './API'

function App() {
  const [data, setData] = useState([]);

  useEffect(() =>{
    response.then((data) =>{
      console.log(data)
      setData(data)
    })
  }, [])

  console.log(typeof data)
  return (
    <>
      <Header />
      <div className='main_container'>
        <div className='sub_main_container'>
          <div className='tittle_session'>
            <h1 style={{color: "black", fontSize: '4em'}}> Seja Bem Vindo</h1>
            <h1 style={{color: "black", fontSize: '3em'}}>Conheça as principais obras!</h1>
          </div>
          <div className='cards_session'>
            {data.map((item) =>(
              <CardArt descricao={item.descricao} titulo={item.nome} url={item.url}/>
            ))}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
