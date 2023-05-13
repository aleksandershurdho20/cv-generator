import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { changeCvData, cvDataState,handleImageFiles,removeImageFiles } from "../../redux/slices/createCv";
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FaceIcon from '@mui/icons-material/Face';
import useToggle from 'hooks/useToogle';
import Modal from "../../Components/Modal/Modal";
import { cvFieldsState,resetFormFields } from "redux/slices/cvFieldsError";


export default function InformacioniPersonal() {
    const state = useSelector(cvDataState)
    console.log(state,'s')
    const dispatch = useDispatch()
    const {visible, toggle, setVisibility} = useToggle(false)
    const {name:errorName,last_name:errorSurname,email:errorEmail} = useSelector(cvFieldsState)
    const handleCVFields = (e) => {
        const { name, value } = e.target;
      
        dispatch(changeCvData({
          ...state,
          key:name,value})
        )
        dispatch(resetFormFields({key:name}))
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
            id="outlined-basic"
            label="Emer*"
            variant="outlined"
            error={errorName ? true : false}
            name="name"
            value={state.name}
            onChange={handleCVFields}
            fullWidth
            helperText={errorName}
            sx={{ marginBottom:"15px"}}
          />

          <TextField
            sx={{ marginBottom:"15px"}}
            id="outlined-basic"
            label="Email*"
            variant="outlined"
            fullWidth
            name="email"
            value={state.email}
            onChange={handleCVFields}
            error={errorEmail ? true : false}

            helperText={errorEmail}
          />
          <TextField
            sx={{ marginBottom:"15px"}}
            id="outlined-basic"
            label="Adresa"
            variant="outlined"
            name="address"
            value={state.address}
            onChange={handleCVFields}
            fullWidth
          />
        </div>
      </Grid>

      <Grid item md={4}>
        <div>
          <TextField
            sx={{ marginBottom:"15px"}}
            id="outlined-basic"
            label="Mbiemer*"
            variant="outlined"
            fullWidth
            name="last_name"
            error={errorSurname ? true : false}
            helperText={errorSurname}
            value={state.last_name}
            onChange={handleCVFields}
          />
          <TextField
            sx={{ marginBottom:"15px"}}
            id="outlined-basic"
            label="Telefon  "
            fullWidth
            variant="outlined"
            name="phone"
            value={state.phone}
            onChange={handleCVFields}
          />
          <TextField
            sx={{ marginBottom:"15px"}}
            id="outlined-basic"
            label="Qyteti"
            variant="outlined"
            fullWidth
            name="city"
            value={state.city}
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
