import React from 'react';
import InputRange from 'react-input-range';
import { useState } from 'react';
import styles from './styles.module.scss';

function FilterMobile({ handleFilter }) {
  const [value, setValue] = useState<any>(150000);
  return (
    <>
      <aside className={styles.aside}>
        <section>
          <h2>Preço</h2>
          <div className={styles.input_container}>
            <InputRange
              value={value}
              maxValue={150000}
              minValue={50000}
              formatLabel={(value) => `R$${value}`}
              onChange={(value) => setValue(value)}
              name="Preço"
              step={3}
            />
          </div>
        </section>
        <section>
          <h2>Status</h2>
          <div className={styles.input_container}>
            <input
              type="radio"
              name="status"
              id=""
              value="new"
              defaultChecked
            />

            <label>Nova</label>
          </div>
          <div className={styles.input_container}>
            <input type="radio" name="status" value="used" id="" />
            <label>Usada</label>
          </div>
        </section>

        <section>
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

        <section>
          <h2>Banheiros</h2>
          <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
        </section>

        <section>
          <h2>Quartos</h2>
          <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
        </section>

        <section>
          <h2>Recursos</h2>
          <div className={styles.features_wrapper}>
            <div className={styles.features_input}>
              <div className={styles.input_details}>
                <input type="checkbox" name="garden" id="" value="garden" />
                <label>Jardim</label>
              </div>

              <div className={styles.input_details}>
                <input type="checkbox" name="garage" id="" value="garage" />
                <label>Garagem</label>
              </div>

              <div className={styles.input_details}>
                <input type="checkbox" name="balcony" id="" value="balcony" />
                <label>Sacada</label>
              </div>
            </div>

            <div className={styles.features_input}>
              <div className={styles.input_details}>
                <input type="checkbox" name="air" id="" value="air" />
                <label>Ar </label>
              </div>

              <div className={styles.input_details}>
                <input type="checkbox" name="laundry" id="" value="laundry" />
                <label>Lavanderia</label>
              </div>

              <div className={styles.input_details}>
                <input type="checkbox" name="backwayd" id="" value="backyard" />
                <label>Quintal</label>
              </div>
            </div>
          </div>
        </section>
        <button onClick={handleFilter}>Aplicar Filtro</button>
      </aside>
    </>
  );
}

export default FilterMobile;
