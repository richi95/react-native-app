import { TextField, Button, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { FormEventHandler } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IProductForm } from "../IProduct";

const Update = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const [form, setForm] = React.useState<IProductForm>({
    name: "",
    count: null,
    short_description: "",
  });
  const id = location.pathname.split("/");

  const getData = async () => {
    const { data } = await axios.get<IProductForm>(
      `http://localhost:3500/products/${id[2]}`
    );
    setForm(data);
    setLoading(false);
  };

  React.useEffect(() => {
    getData();
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formFiltered = Object.values(form).filter((v) => v);
    if (Object.keys(form).length === formFiltered.length) {
      axios.put(`http://localhost:3500/products/${id[2]}`, form);
      navigate("/");
    } else {
      alert("All fields must be filled in!");
    }
  };

  return (
    <>
      <div className="m-4 p-4">
        <form onSubmit={handleSubmit} className="flex justify-center w-full">
          {loading ? (
            <CircularProgress />
          ) : (
            <div className="flex flex-col gap-4 ">
              <span className="text-center text-4xl mb-4">Update</span>
              <TextField
                name="name"
                placeholder="Name"
                value={form.name || null}
                onChange={({ target }) =>
                  setForm({ ...form, name: target.value })
                }
              />
              <TextField
                name="count"
                placeholder="Count"
                value={form.count}
                type="number"
                onChange={({ target }) => {
                  setForm({ ...form, count: Number(target.value) || null });
                }}
              />
              <TextField
                label="Short Description"
                multiline
                minRows={3}
                value={form.short_description}
                onChange={({ target }) =>
                  setForm({ ...form, short_description: target.value })
                }
              />
              <Button variant="contained" type="submit">
                Update
              </Button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Update;
