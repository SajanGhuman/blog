import styles from "./sample.module.css";

export default function Sample() {
  return (
    <>
      <div className={styles.heading}>
        <h1>Understanding the JavaScript Modulo Operator</h1>
        <time>
          Published on <b>September 6th, 2023</b>
        </time>
      </div>
      <div className={styles.content}>
        <p>
          When I was first learning to code, I remember finding the Modulo
          operator (%) extremely confusing. 😬
          <p>
            If you don't understand what it's doing, the values it produces seem
            completely random:
          </p>
        </p>
      </div>
    </>
  );
}
