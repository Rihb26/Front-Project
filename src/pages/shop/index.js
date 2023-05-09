import { useEffect } from "react";
import useFetch from "@/hooks/useFetch";
import Loading from "@/components/UI/Loading";
import ProductGrid from "@/components/product/ProductGrid";
import styles from "./index.module.scss";

const Index = () => {

  const { data, error, loading, fetchData } = useFetch({url:"/product/products", method:"GET", body:null, token:null});

  useEffect(() => {
    fetchData();
  },[]);


  if(loading) <Loading/> 
  if (error) console.log(error);

  return (
    <div className={styles.container}>
      {
        <ProductGrid products={data.products}/>
      }
    </div>
  );
}

export default Index;
