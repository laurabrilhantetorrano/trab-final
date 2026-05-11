import { useState } from 'react'
import './Login.css'
import logo from './src/assets/image.png'

export default function App() {

return (
  <main>

    <div className="left">
        <img src={logo} className="logo" />
       </div>
       
    <section>
      
      <h1>Facebook</h1>


      <input type="text" placeholder='Email ou telefone'/>
      <input type="password" placeholder='Senha' />

      <button>Entrar</button>

      <div className="forgot">Esqueceu a senha?</div>

      <hr className="linha" />

       <button className="segundo">Criar nova conta</button>


      
    </section>
  </main>
)  

}