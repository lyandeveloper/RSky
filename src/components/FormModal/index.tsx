import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './styles.module.scss';

function FormModal({ postUrl }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(
    `Olá gostaria me informar mais sobre essa propriedade que encontrei no RSky: ${postUrl}`
  );

  function sendWhatsapp(e) {
    e.preventDefault();
    if (email && name && phone && message !== '') {
      window.open(`https://wa.me/558894451005?text=${message}`);
    } else {
      toast.error('Campos vazios não são permitidos');
    }
  }

  return (
    <>
      <form className={styles.form} action="">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefone"
        />
        <input
          type="mail"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <textarea
          placeholder="Digite sua mensagem"
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button onClick={sendWhatsapp} type="submit">
          Enviar mensagem
        </button>
      </form>
    </>
  );
}

export default FormModal;
