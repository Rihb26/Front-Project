import styles from "./index.module.scss";
import Link from "next/link";

const Index = ({ product }) => {
  console.log(product, "props product")
  return (
    <Link href={`/shop/${product._id}`} className={styles.wrapper}>
      <div className={styles.thumbnail}>
        <img src={product.thumbnail} alt={product.name} />
      </div>
      <div className={styles.content}>
        <p>{product.name}</p>
        <p>{product.price} €</p>
      </div>
    </Link>
  );
}

export default Index;
