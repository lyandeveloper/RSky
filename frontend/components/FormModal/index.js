import React from 'react';

import { FormContainer, Input, Textarea, Button } from './styles';
import { useRouter } from 'next/router';
import { useState } from 'react';

function FormModal({ postUrl }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(
    `Olá gostaria me informar mais sobre essa propriedade que encontrei no RSky: ${postUrl}`
  );

  function sendWhatsapp(e) {
    e.preventDefault();
    window.open(`https://wa.me/558894451005?text=${message}`);
  }

  return (
    <>
      <FormContainer className="form-modal" action="">
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
        <Input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefone"
        />
        <Input
          type="mail"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Textarea
          placeholder="Digite sua mensagem"
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        ></Textarea>
        <Button onClick={sendWhatsapp} type="submit">
          Enviar mensagem
        </Button>
      </FormContainer>
    </>
  );
}

export default FormModal;
