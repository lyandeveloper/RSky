import { Drawer } from '@mui/material';
import React from 'react';
import styles from './styles.module.scss';

interface DrawerProps {
  children: React.ReactNode;
  anchor: "bottom" | "left" | "right" | "top";
  open: boolean;
  setOpen: (value: boolean) => void;
}

const CustomDrawer: React.FC<DrawerProps> = ({ open, anchor, setOpen, children }) => {
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={handleClose}
    >
      <div className={styles.drawer_container}>
        <div className={styles.drawer_content}>
          {children}
        </div>
      </div>
    </Drawer>
  );
}

export default CustomDrawer;