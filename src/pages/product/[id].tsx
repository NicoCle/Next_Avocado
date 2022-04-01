import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "src/Layout";
import ProductSummary from "@components/ProductSummary";

const ProductPage = () => {
  const { query } = useRouter();
  const [product, setProduct] = useState<TProduct | null>(null);

  useEffect(() => {
    if (query.id) {
      window
        .fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((data: TProduct) => {
          setProduct(data);
        });
    }
  }, [query.id]);
  return (
    <Layout>
      {product === null ? null : <ProductSummary product={product} />}
    </Layout>
  );
};
export default ProductPage;
