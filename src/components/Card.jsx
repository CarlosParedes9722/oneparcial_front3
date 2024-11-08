import styles from './Card.module.css';

function Card({ nombre, apellido }) {
  return (
    <div className={styles.cardContainer}>
      <p>
        <span className={styles.cardSubDescription}>Tu nombre es: </span> {nombre} 
        <span className={styles.cardSubDescription}>y tu apellido: </span> {apellido}
      </p>
    </div>
  );
}

export default Card;