import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import s from "./ProductZoom.module.css";
import Dialog from "@material-ui/core/Dialog";
import ImgSlider from "../ImgSlider/ImgSlider";

function ProductZoom() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={s.zoomIn} onClick={handleClickOpen}>
        <FontAwesomeIcon icon={faSearchPlus} />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <ImgSlider />
      </Dialog>
    </div>
  );
}

export default ProductZoom;
