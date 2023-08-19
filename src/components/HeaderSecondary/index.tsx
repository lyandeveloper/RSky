import { useState } from 'react';

import { Close, FilterAlt, Menu, Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import CustomDrawer from '../CustomDrawer';
import FilterMobile from '../FilterMobile';
import styles from './styles.module.scss';

function HeaderSecondary() {
  const [openExtraMenu, setOpenExtraMenu] = useState(false);
  const [openFilter, setOpenFilter] = useState(true);

  const handleOpenExtraMenu = () => {
    openExtraMenu ? setOpenExtraMenu(false) : setOpenExtraMenu(true);
  }

  const handleOpenFilter = () => {
    openFilter ? setOpenFilter(false) : setOpenFilter(true);
  }

  return (
    <header className={styles.header}>
      <div className={`${styles.header_wrapper} container`}> 
        <a href="/" className="logo">
          <span>RS</span>ky
        </a>
        <form className={styles.search_bar}>
          <input
            type="text"
            name="search"
            placeholder="Buscar lugares, propriedades e muitos mais..."
          />
        </form>
        <div className={styles.fake_div_02}></div>
        <div className={styles.buttons_mobile}>
          <IconButton>
            <Search/>
          </IconButton>
          <IconButton onClick={handleOpenFilter}>
            <FilterAlt/>
          </IconButton>
          <IconButton onClick={handleOpenExtraMenu}>
            <Menu/>
          </IconButton>
        </div>
      </div>

      <nav className={styles.menu_desktop}>
        <ul>
          <li>
            <a href="">Compra</a>
          </li>
          <li>
            <a href="">Aluguel</a>
          </li>
          <li>
            <a href="">Lançamentos</a>
          </li>
          <li>
            <a href="">Central de Ajuda</a>
          </li>
        </ul>
      </nav>
      <CustomDrawer anchor='right' open={openExtraMenu} setOpen={setOpenExtraMenu}>
        <nav className={styles.menu_mobile}>
          <IconButton style={{ color: '#fff'}} onClick={() => setOpenExtraMenu(false)} className={styles.btn_close}>
                <Close fontSize='large'/>
          </IconButton>
          <ul>
            <li>
              <a href="">Compra</a>
            </li>
            <li>
              <a href="">Aluguel</a>
            </li>
            <li>
              <a href="">Lançamentos</a>
            </li>
            <li>
              <a href="">Central de Ajuda</a>
            </li>
          </ul>
        </nav>
      </CustomDrawer>
      <CustomDrawer anchor='top' open={openFilter} setOpen={setOpenFilter}>
        <IconButton onClick={() => setOpenFilter(false)} style={{ position: 'fixed', right: '0', top: '0'}}>
            <Close fontSize='large'/>
        </IconButton>
        <FilterMobile handleFilter={() => setOpenFilter(false)}/>
      </CustomDrawer>
    </header>
  );
}

export default HeaderSecondary;
