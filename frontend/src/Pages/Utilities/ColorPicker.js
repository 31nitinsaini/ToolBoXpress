import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';

const ColorPicker = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('#FFFFFF');

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Handle saving the selected color
    console.log('Selected Color:', color);
    handleClose();
  };

  return (
    <>
    <Header/>
     <main>
     <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Color Picker
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Choose a Color</DialogTitle>
        <DialogContent>
          <ChromePicker color={color} onChange={handleColorChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
     </main>
     <RatingComponent/>
     <Footer/>
    </>
  );
};

export default ColorPicker;
