import React from 'react';
import './style.css'

function Home() {
  return (
    <>
      <div id="background"></div>
      <div id="container">
        <div id="contactAndImage">
            <img src="photo.jpeg" alt="Alessandro" height="300" id="photo" />
            <div id="contact">
                <h1>Alessandro Gutierrez</h1>
                <h2>Programador Web</h2>
                <h3>Telefone:(11) 991986532</h3>
                <h3>E-mail: contato.alegutierrez@gmail.com</h3>
            </div>
        </div>    
        <div id="presentation">
            <h2>Olá, eu sou Alessandro</h2>
            <p>
                Sou um profissional dedicado com habilidades em JavaScript e TypeScript FullStack, <br />
                
                atualmente em formação. Possuo conhecimentos em HTML, CSS e JavaScript, <br />
                além de uma boa base em SQL e lógica de programação.<br />
            <br />
            Meus estudos incluem cursos voltados para montagem e manutenção de <br />
            computadores, redes de computadores, algoritmo e Soft Skills.<br />
            <br />   
            Possuo também fluência em espanhol e nível intermediário inglês, o que me <br />
            permite atuar em ambientes multiculturais e lidar com desafios de comunicação com facilidade.<br />
            <br />  
            Busco oportunidades para aplicar e expandir meus conhecimentos na área de <br />
            desenvolvimento, com foco em crescimento contínuo e desenvolvimento de soluções tecnológicas eficientes.<br />
            </p>
          </div>
      </div>
    </>
  )
}

export default Home
