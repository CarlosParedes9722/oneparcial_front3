import { useState } from 'react';
import Card from './Card';
import styles from './Form.module.css';

function Form() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input1.length < 3 || input1.startsWith(' ')) {
      setError(true);
      return;
    }

    if (input2.length < 6) {
      setError(true);
      return;
    }

    setShowCard(true);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input 
            className={styles.input}
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </label>
        <br />
        <label>
          Apellido:
          <input
            className={styles.input}
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </label>
        <br />
        <button className={styles.submit} type="submit">Enviar</button>
      </form>

      {error && (
        <p className={styles.errorMessage}>
          Por favor chequea que la información sea correcta
        </p>
      )}

      {showCard && <Card nombre={input1} apellido={input2} />}
    </div>
  );
}

export default Form;