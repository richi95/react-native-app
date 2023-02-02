import { Delete } from "@mui/icons-material";
import { Card, IconButton } from "@mui/material";
import axios from "axios";
import React from "react";
import IProduct from "../IProduct";

const Read = (): JSX.Element => {
  const [products, setProducts] = React.useState<IProduct[]>([]);

  const getData = async () => {
    const { data } = await axios.get<IProduct[]>(
      "http://localhost:3500/products"
    );
    setProducts(data);
  };
  React.useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:3500/products/${id}`);
    getData();
  };

  if (!products.length) return <>no data</>;

  return (
    <>
      <div className="flex flex-col gap-4 items-center w-full mb-8 pb-4">
        <span className="text-4xl mb-4">Read</span>
        {products.map((product) => (
          <Card className="w-[240px] p-2 overflow-auto" key={product.id}>
            <ul className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <li className="text-2xl p-4">{product.name}</li>
                <li className="p-2">
                  <p className="">{product.short_description}</p>
                </li>
              </div>
              <li className="flex justify-around items-center p-4 m-4">
                <div>{product.count} count</div>
                <IconButton onClick={() => handleDelete(product.id)}>
                  <Delete color="error" />
                </IconButton>
              </li>
            </ul>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Read;
