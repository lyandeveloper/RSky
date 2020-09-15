import React from "react";
import InputRange from "react-input-range";
import { useState } from "react";
// import { Container } from './styles';

function sideBar() {
  const [value, setValue] = useState(150000);
  return (
    <>
      <aside className="filter">
        <section className="price">
          <h2>Preço</h2>
          <div className="input-slider">
            <InputRange
              value={value}
              maxValue={150000}
              min={50000}
              formatLabel={(value) => `R$${value}`}
              onChange={(value) => setValue(value)}
              name="Preço"
              step={3}
            />
          </div>
        </section>
        <section className="status">
          <h2>Status</h2>
          <div className="input">
            <input
              type="radio"
              name="status"
              id=""
              value="new"
              checked="checked"
            />

            <label>Nova</label>
          </div>
          <div className="input">
            <input type="radio" name="status" value="used" id="" />
            <label>Usada</label>
          </div>
        </section>

        <section className="category">
          <h2>Categoria</h2>
          <select name="category" id="">
            <option value="">Todos os imóveis</option>
            <option value="">Apartamento</option>
            <option value="">Casa</option>
            <option value="">Casa de condomínio</option>
            <option value="">Cobertura</option>
            <option value="">Flat</option>
            <option value="">Loft</option>
            <option value="">Terreno / Lote / Condomínio</option>
          </select>
        </section>

        <section className="bathroom">
          <h2>Banheiros</h2>
          <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
        </section>

        <section className="rooms">
          <h2>Quartos</h2>
          <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
        </section>

        <section className="features">
          <h2>Recursos</h2>
          <div className="features-wrapper">
            <div className="features-input">
              <div className="input-detail">
                <input type="checkbox" name="garden" id="" value="garden" />
                <label>Jardim</label>
              </div>

              <div className="input-detail">
                <input type="checkbox" name="garage" id="" value="garage" />
                <label>Garagem</label>
              </div>

              <div className="input-detail">
                <input type="checkbox" name="balcony" id="" value="balcony" />
                <label>Sacada</label>
              </div>
            </div>

            <div className="features-input">
              <div className="input-detail">
                <input type="checkbox" name="air" id="" value="air" />
                <label>Ar </label>
              </div>

              <div className="input-detail">
                <input type="checkbox" name="laundry" id="" value="laundry" />
                <label>Lavanderia</label>
              </div>

              <div className="input-detail">
                <input type="checkbox" name="backwayd" id="" value="backyard" />
                <label>Quintal</label>
              </div>
            </div>
          </div>
        </section>
      </aside>

      <style jsx>{`
        .filter {
          top: 0;
          width: 300px;
          height: 100%;
          position: sticky;
          box-shadow: 3px 0px 8px 0px rgba(204, 204, 204, 1);
          background: #fff;
        }

        .filter h2 {
          font-size: 16px;
          font-weight: normal;
          padding: 0 20px;
        }

        .filter label {
          font-size: 13px;
          margin-left: 5px;
          font-weight: lighter;
        }

        .filter .input {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0 20px;
        }

        .filter section {
          width: 100%;
          padding: 20px 0;
          border-bottom: 1px solid #eee;
        }

        .input-slider {
          padding: 0 50px 0 20px;
        }

        select {
          margin-left: 20px;
        }

        .features-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin-left: 20px;
        }

        .features-input {
        }
      `}</style>
    </>
  );
}

export default sideBar;
