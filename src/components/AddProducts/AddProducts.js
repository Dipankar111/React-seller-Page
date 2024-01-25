import React, { useState } from "react";
import ShowProducts from "../UserDetails/ShowProducts";
import classes from "./AddProducts.module.css";
import Card from "../Card/Card";
import Button from "../UI/Button";

// const data = [
//   {id: 2, name: 'car', price : 23000},
//   {id: 4, name: 'vivo', price : 23000},
//   {id: 5, name: 'bike', price : 23000},
// ]

const AddProducts = () => {
  const [formData, setFormData] = useState([]);
  const [id, setId] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);

  const idHandler = (e) => {
    setId(e.target.value);
  };

  const priceHandler = (e) => {
    setSellPrice(e.target.value);
  };

  const nameHandler = (e) => {
    setProductName(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const price = parseFloat(sellPrice);

    setFormData((pre) => [
      ...pre,
      { id: id, price: sellPrice, name: productName },
    ]);
    localStorage.setItem(id, productName);
    console.log(formData);
    alert(id, sellPrice, productName);

    setTotalAmount((prevTotal) => prevTotal + price);

    setId("");
    setSellPrice("");
    setProductName("");
  };
  const deleteHandler = (Id, price) => {
    // console.log(id)
    const newList = formData.filter((pre) => {
      return pre.id !== Id;
    });
    console.log(newList);
    setTotalAmount((prevTotal) => prevTotal - price);
    setFormData(newList);
    localStorage.removeItem(Id);
  };

  const editHandler = (index) => {
    console.log(`its index in edit function ${index}`);
    const updateList = formData[index];
    setId(updateList.id);
    setSellPrice(updateList.price);
    setProductName(updateList.name);
    setTotalAmount((prevTotal) => prevTotal - updateList.price);
    const NewList = [...formData];
    NewList.splice(index, 1);
    setFormData(NewList);
  };

  return (
    <div>
      <Card>
        <form className={classes.formControl} onSubmit={submitHandler}>
          <label htmlFor="id">Product ID: </label>
          <input
            type="number"
            id="id"
            value={id}
            onChange={idHandler}
            required
          />
          <label htmlFor="price">Selling Price:</label>
          <input
            type="number"
            id="price"
            value={sellPrice}
            onChange={priceHandler}
            required
          />

          <label htmlFor="name">Product Name: </label>
          <input
            type="text"
            id="name"
            value={productName}
            onChange={nameHandler}
            required
          />
          <Button type="submit">Add Product</Button>
        </form>
      </Card>
      <div>
        <h1>PRODUCTS:</h1>
        <ul>
          {formData.map((value, index) => {
            return (
              <li key={index}>
                <ShowProducts
                  Index={index}
                  ID={value.id}
                  NAME={value.name}
                  PRICE={value.price}
                  ondelete={deleteHandler}
                  onedit={editHandler}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <h2>Total Amount: Rs {totalAmount}</h2>
    </div>
  );
};

export default AddProducts;
