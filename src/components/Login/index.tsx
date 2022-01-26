import React, { FormEvent } from 'react';

const LoginForm = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <input type="text" />
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default LoginForm;
