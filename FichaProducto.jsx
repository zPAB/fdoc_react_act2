import styles from './FichaProducto.module.css';

export default function FichaProducto() {
  return (
    <div className={styles.card}>
      <h3>Pan de Queso</h3>
      <p className={styles.price}>$3.500</p>
      <button className={styles.button}>Agregar</button>
    </div>
  );
}