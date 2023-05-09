import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useFetch from '../../../hooks/useFetch';
import Loading from "@/components/UI/Loading";
import Button from "@/components/UI/Button";
import styles from "./index.module.scss";

const Index = () => {

  const router = useRouter();

  const [id, setId] = useState();

  let {data, loading, error, fetchData} = useFetch({url:`/product/${id}`,method:"GET", body:null, token:null})

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
    }
    if (id) {
      fetchData();
    }
  }, [router.isReady, id])

  if(loading) return <Loading/>
  if (error) console.log(error);

  console.log(data);

  data = {...data.product}

  return (
    <div className={styles.wrapper}>
      <div className={styles.thumbnail}>
        <img src={data.thumbnail} alt={data.name} />
      </div>
      <div className={styles.content}>
        <h1>{data.name}</h1>
        <p>{data.price} €</p>
        {
          data.stock <= 0 ? (
            <p>Out of stock</p>
          ) : (
            <p>stock : {data.stock}</p>
          )
        }
        <p>{data.description}</p>
        <div className={styles.add_to_cart}>
          <label>Quantités</label>
          <input type="number" value="1"/>
          <Button type="button" className="btn__primary" disabled={data.stock <= 0} title="ajouter au panier" />
        </div>
        {/* {
          data.stock >= 0 && (
          <div className={styles.add_to_cart}>
            <Button type="button" className="btn__primary" title="ajouter au panier" />
          </div>
          )
        } */}
      </div>
    </div>
  );
}

export default Index;
