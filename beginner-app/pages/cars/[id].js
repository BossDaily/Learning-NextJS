import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Car = ({ car }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>
          {car.color} {car.id}
        </title>
      </Head>
      <h1>Sup {id}</h1>
      <img src={car.image}></img>
    </>
  );
};

export default Car;

