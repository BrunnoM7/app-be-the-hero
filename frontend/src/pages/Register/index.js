import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import { FiArrowLeft } from 'react-icons/fi'
import logoImage from '../../assets/logo.svg';

import './styles.css';


function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsApp] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name, email, whatsapp, city, state
    };

    try {
      const response = await api.post('ngos', data);
      alert(`Seu ID de acesso é ${response.data.id}, guarde esse ID.`);

      history.push('/');
      
    } catch (error) {
      alert('Erro no cadastro, tente novamente.');
      console.log(error);
    }
    
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="Be The Hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041"/>
            Já tenho cadastro
          </Link>

        </section>

        <form onSubmit={handleRegister}>
          <input 
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="E-mail" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            placeholder="WhatsApp" 
            value={whatsapp}
            onChange={e => setWhatsApp(e.target.value)}  
          />

          <div className="input-group">
            <input 
              placeholder="Cidade" 
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input 
              placeholder="UF" 
              style={{ width: 80 }} 
              value={state}
              onChange={e => setState(e.target.value)}
              maxLength="2"
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Register;