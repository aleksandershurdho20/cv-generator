import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { changeCvData, cvDataState,handleImageFiles,removeImageFiles } from "../../redux/slices/createCv";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FaceIcon from "@material-ui/icons/Face";
import useToggle from 'hooks/useToogle';
import Modal from "../../Components/Modal/Modal";
import { cvFieldsState,resetFormFields } from "redux/slices/cvFieldsError";

const useclasses = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      boxShadow:
        " 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
    },
    cvFields: {
      marginBottom: 15,
    },
  }));
export default function InformacioniPersonal() {
    const state = useSelector(cvDataState)
    const dispatch = useDispatch()
    const classes = useclasses();
    const {visible, toggle, setVisibility} = useToggle(false)
    const {errorName,errorSurname} = useSelector(cvFieldsState)

    const handleCVFields = (e) => {
        const { name, value } = e.target;
      
        dispatch(changeCvData({
          ...state,
          key:name,value})
        )
        dispatch(resetFormFields())
      };
      const handleClickOpen = () => setVisibility(true)
       function handleFiles(e, success, failure) {
     
        let formdata = new FormData();
    
        formdata.append("file", e.target.files[0]);
        formdata.append("upload_preset", "ngarko");
    
        const preview = URL.createObjectURL(e.target.files[0]);
        if (preview) {
            dispatch(handleImageFiles(preview))
        }
      }
     
      
  return (
    <>
    
    <Container style={{ marginTop: 10 }}>
    <Grid container spacing={3}>
      <Grid item md={4} sm={12} xs={12}>
        <InputLabel id="demo-simple-select-label">Ngarko</InputLabel>
        <div className="avatar-wrapper">
          {state.image.length > 0 ? (
            <>
              <img src={state.image} alt="foto-cv" />
              <button onClick={() => dispatch(removeImageFiles())}>Fshi</button>
            </>
          ) : (
            <div className="avatar-wrapper" onClick={handleClickOpen}>
              <FaceIcon className="avatar-center" />
              <span>Shto Fotografi</span>
            </div>
          )}
        </div>

        {/* {imageFiles.length > 0 && (
          <a onClick={() => setImageFiles("")}>Fshi</a>
        )} */}
      </Grid>
      <Grid item md={4}>
        <div>
          <TextField
            className={classes.cvFields}
            id="outlined-basic"
            label="Emer"
            variant="outlined"
            error={errorName ? true : false}
            name="emer"
            value={state.emer}
            onChange={handleCVFields}
            fullWidth
            helperText={errorName}
          />

          <TextField
            className={classes.cvFields}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            value={state.email}
            onChange={handleCVFields}
          />
          <TextField
            className={classes.cvFields}
            id="outlined-basic"
            label="Adresa"
            variant="outlined"
            name="adresa"
            value={state.adresa}
            onChange={handleCVFields}
            fullWidth
          />
        </div>
      </Grid>

      <Grid item md={4}>
        <div>
          <TextField
            className={classes.cvFields}
            id="outlined-basic"
            label="Mbiemer"
            variant="outlined"
            fullWidth
            name="mbiemer"
            error={errorSurname ? true : false}
            helperText={errorSurname}
            value={state.mbiemer}
            onChange={handleCVFields}
          />
          <TextField
            className={classes.cvFields}
            id="outlined-basic"
            label="Telefon  "
            fullWidth
            variant="outlined"
            name="telefon"
            value={state.telefon}
            onChange={handleCVFields}
          />
          <TextField
            className={classes.cvFields}
            id="outlined-basic"
            label="Qyteti"
            variant="outlined"
            fullWidth
            name="qyteti"
            value={state.qyteti}
            onChange={handleCVFields}
          />
        </div>
      </Grid>

      <Divider />
    </Grid>
  </Container>
  <Modal
    open={visible}
    handleClickOpen={handleClickOpen}
    handleClose={toggle}
    modalTitle="Ngarko Foto"
    handleFiles={handleFiles}
      />
    </>
  )
}
