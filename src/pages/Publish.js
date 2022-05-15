import { useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import { Navigate } from "react-router-dom";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [exchange, setExchange] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("exchange", exchange);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        // `https://my-vinted-backend-project.herokuapp.com/offer/publish`
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  return token ? (
    <div className="publish-container">
      <h1>Vends ton article</h1>
      <form onSubmit={handleSubmit}>
        <div className="select-file">
          <label htmlFor="file">
            <div className="select-file-border">
              <div className="select-file-wrap">
                <p className="add-file">+</p>
                <p>Ajouter une photo</p>
              </div>
            </div>
          </label>

          <input
            type="file"
            id="file"
            onChange={(event) => {
              setPicture(event.target.files[0]);
            }}
          />
        </div>
        <div className="top-publish">
          <div className="publish-title">
            <h4>Titre</h4>
            <Input
              type="text"
              id="title"
              placeholder="ex : Chemise Sézane verte"
              value={title}
              setState={setTitle}
            />
          </div>
          <div className="publish-description">
            <h4>Décris ton article</h4>
            <textarea
              type="text"
              id="description"
              value={description}
              rows={5}
              placeholder="ex : porté quelques fois, taille correctement"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="middle-publish">
          <div className="publish-brand">
            <h4>Marque</h4>
            <Input
              type="text"
              id="brand"
              placeholder="ex : Zara"
              value={brand}
              setState={setBrand}
            />
          </div>
          <div>
            <div className="publish-size">
              <h4>Taille</h4>
              <Input
                type="text"
                id="size"
                placeholder="ex : L / 40 / 12"
                value={size}
                setState={setSize}
              />
            </div>
          </div>
          <div className="publish-color">
            <h4>Couleur</h4>
            <Input
              type="text"
              id="color"
              placeholder="ex : Fushia"
              value={color}
              setState={setColor}
            />
          </div>
          <div className="publish-condition">
            <h4>Etat</h4>
            <Input
              type="text"
              id="condition"
              placeholder="ex : Neuf avec étiquette"
              value={condition}
              setState={setCondition}
            />
          </div>
          <div>
            <div className="publish-city">
              <h4>Emplacement</h4>
              <Input
                type="text"
                id="city"
                placeholder="ex : Paris"
                value={city}
                setState={setCity}
              />
            </div>
          </div>
        </div>

        <div className="bottom-publish">
          <div className="publish-price">
            <h4>Prix</h4>
            <Input
              type="text"
              id="price"
              placeholder="0,00€"
              value={price}
              setState={setPrice}
            />
          </div>
          <div className="publish-exchange">
            <input
              type="checkbox"
              id="exchange"
              onChange={(e) => {
                setExchange(e.target.checked);
              }}
            />
            <p>Je suis intéressé(e) par les échanges</p>
          </div>
        </div>
        <div className="publish-submit-btn">
          <button type="submit">Ajouter</button>
        </div>
      </form>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
export default Publish;
