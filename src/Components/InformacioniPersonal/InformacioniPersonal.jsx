import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCvData,
  profileState,
  handleImageFiles,
  removeImageFiles,
} from "../../redux/slices/User";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FaceIcon from "@mui/icons-material/Face";
import useToggle from "hooks/useToogle";
import Modal from "../../Components/Modal/Modal";
import { cvFieldsState, resetFormFields } from "redux/slices/cvFieldsError";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import app from "config/firebase";
import { api } from "utils/api/api";
import { toast } from "react-toastify";

export default function InformacioniPersonal() {
  const state = useSelector((state) => state.userSlice.userInfo?.userProfileId);

  const dispatch = useDispatch();
  const { visible, toggle, setVisibility } = useToggle(false);
  const {
    name: errorName,
    last_name: errorSurname,
    email: errorEmail,
  } = useSelector(cvFieldsState);
  const handleCVFields = (e) => {
    const { name, value } = e.target;

    dispatch(
      changeCvData({
        ...state,
        key: name,
        value,
      })
    );
    dispatch(resetFormFields({ key: name }));
  };
  const handleClickOpen = () => setVisibility(true);
  function handleFiles(e, success, failure) {
    let formdata = new FormData();

    formdata.append("file", e.target.files[0]);
    formdata.append("upload_preset", "ngarko");
    const file = e.target.files[0];
    const preview = URL.createObjectURL(e.target.files[0]);

    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log({ downloadURL });
          dispatch(handleImageFiles(downloadURL));
          if(state._id){
      
            api.put(`/profile/${state.user}`,{...state,image:downloadURL}).then(res =>{
              toast.success("Profili u modifikua me sukses!")
            }).catch(err =>err)
          }
        });
      }
    );
    // if (preview) {
    //     dispatch(handleImageFiles(preview))
    // }
  }

  const handleRemoveImage = () => {
    const storage = getStorage();
    console.log(state?.image);
    // Create a reference to the file to delete
    const imageRef = ref(storage, state?.image);

    // Delete the file
    deleteObject(imageRef)
      .then(() => {
        // File deleted successfully
        dispatch(removeImageFiles());
        if(state._id){

          api.put(`/profile/${state.user}`,{...state,image:""}).then(res =>{
            toast.success("Profili u modifikua me sukses!")
          }).catch(err =>err)
        }
      })
      .catch((error) => {
        throw error;
        // Uh-oh, an error occurred!
      });
  };

  return (
    <>
      <Container style={{ marginTop: 10 }}>
        <Grid container spacing={3}>
          <Grid item md={4} sm={12} xs={12}>
            <InputLabel id="demo-simple-select-label">Ngarko</InputLabel>
            <div className="avatar-wrapper">
              {state?.image?.length > 0 ? (
                <>
                  <img src={state.image} alt="foto-cv" />
                  <button onClick={handleRemoveImage}>Fshi</button>
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
                value={state?.name}
                onChange={handleCVFields}
                fullWidth
                helperText={errorName}
                sx={{ marginBottom: "15px" }}
              />

              <TextField
                sx={{ marginBottom: "15px" }}
                id="outlined-basic"
                label="Email*"
                variant="outlined"
                fullWidth
                name="email"
                value={state?.email}
                onChange={handleCVFields}
                error={errorEmail ? true : false}
                helperText={errorEmail}
              />
              <TextField
                sx={{ marginBottom: "15px" }}
                id="outlined-basic"
                label="Adresa"
                variant="outlined"
                name="address"
                value={state?.address}
                onChange={handleCVFields}
                fullWidth
              />
            </div>
          </Grid>

          <Grid item md={4}>
            <div>
              <TextField
                sx={{ marginBottom: "15px" }}
                id="outlined-basic"
                label="Mbiemer*"
                variant="outlined"
                fullWidth
                name="last_name"
                error={errorSurname ? true : false}
                helperText={errorSurname}
                value={state?.last_name}
                onChange={handleCVFields}
              />
              <TextField
                sx={{ marginBottom: "15px" }}
                id="outlined-basic"
                label="Telefon  "
                fullWidth
                variant="outlined"
                name="phone"
                value={state?.phone}
                onChange={handleCVFields}
              />
              <TextField
                sx={{ marginBottom: "15px" }}
                id="outlined-basic"
                label="Qyteti"
                variant="outlined"
                fullWidth
                name="city"
                value={state?.city}
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
  );
}
