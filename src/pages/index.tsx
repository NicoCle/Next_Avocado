import { NextPage } from "next";
import { useEffect, useState } from "react";
import AvoCards from "@components/Card";
import Layout from "src/Layout";

const HomePage: NextPage = () => {
  const [productList, setProdutList] = useState([]);

  useEffect(() => {
    window
      .fetch("api/avo")
      .then((res) => res.json())
      .then(({ data }) => {
        setProdutList(data);
      });
  }, []);
  return (
    <Layout>
      <AvoCards products={productList} />
    </Layout>
  );
};
export default HomePage;
