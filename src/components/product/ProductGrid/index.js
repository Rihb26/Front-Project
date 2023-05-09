import styles from "./index.module.scss";
import ProductCard from "@/components/product/ProductCard";

const Index = ({ products }) => {
  console.log(products, "props product");
  return (
    <div className={styles.wrapper}>
      {
        products && products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))
      }
    </div>
  );
}

export default Index;
