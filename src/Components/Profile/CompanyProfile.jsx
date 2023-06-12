import { Button, Container, Grid, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCompanyProfile,
  removeImageFiles,
  handleCompanyImageFiles,
  removeCompanyImageFiles,
  resetCompanyFields
} from "../../redux/slices/User";
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
import { useEffect } from "react";

export default function CompanyProfile({
  isInEditMode,


  handleSubmit,
}) {
  const data = useSelector((state) => state.userSlice.userInfo.companyProfileId);
  const {companyProfileErrors } = useSelector((state) => state.userSlice);

  const handleChangeProfileFields = (e) => {
    const { name, value } = e.target;
    dispatch(changeCompanyProfile({ key: name, value }));
    dispatch(resetCompanyFields(name))
  };
  const dispatch = useDispatch();
  
  const handleImageChange = (e) => {
    let formdata = new FormData();

    formdata.append("file", e.target.files[0]);
    formdata.append("upload_preset", "ngarko");
    const file = e.target.files[0];

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
          dispatch(handleCompanyImageFiles(downloadURL));
          if (data._id) {
            api
              .put(`/profile/${data.user}`, {...data,image:downloadURL})
              .then((res) => {
                toast.success("Profili u modifikua me sukses!");
              })
              .catch((err) => err);
          }
         
        });
      }
    );
  };

  const handleRemoveImage = () => {
    const storage = getStorage();
    // Create a reference to the file to delete
    const imageRef = ref(storage, data?.image);

    // Delete the file
    deleteObject(imageRef)
      .then(() => {
        // File deleted successfully
        dispatch(removeCompanyImageFiles());
        if (data._id) {
          api
            .put(`/profile/${data.user}`, {...data,image:""})
            .then((res) => {
              toast.success("Profili u modifikua me sukses!");
            })
            .catch((err) => err);
        }
      })
      .catch((error) => {
        toast.error("Nodhi nje error");
        // Uh-oh, an error occurred!
      });

  };
  return (
    <Container>
      <Grid container spacing={4} justifyContent="center">
        <Grid item md={9} sx={{ background: "#FFF", margin: 10, padding: 10 }}>
          <Grid container spacing={2}></Grid>

          <Grid item md={12} sx={{ marginBottom: 2 }}>
            <label>Image</label>
            {data?.image?.length > 0 ? (
              <>
                <img src={data.image} style={{width:"50%",height:"50%"}} alt="foto-kompani" />
                <button onClick={handleRemoveImage}>Fshi</button>
              </>
            ) : (
              <input
                type="file"
                name="image"
                value={data?.image}
                onChange={handleImageChange}
              />
            )}
          </Grid>
          <Grid item md={12} sx={{ marginBottom: 2 }}>
            <TextField
              label="Emri*"
              fullWidth
              name="name"
              value={data?.name}
              error={companyProfileErrors?.name ? true : false}
              helperText={companyProfileErrors?.name}
              onChange={handleChangeProfileFields}
            />
          </Grid>
          <Grid item md={12} sx={{ marginBottom: 2 }}>
            <TextField
              type="number"
              label="Madhesia*"
              fullWidth
              name="size"
              value={data?.size}
              error={companyProfileErrors?.size ? true : false}
              helperText={companyProfileErrors?.size}
              onChange={handleChangeProfileFields}
            />
          </Grid>
          <Grid item md={12} sx={{ marginBottom: 2 }}>
            <TextField
              label="Vendodhja*"
              fullWidth
              name="location"
              value={data?.location}
              error={companyProfileErrors?.location ? true : false}
              helperText={companyProfileErrors?.location}
              onChange={handleChangeProfileFields}
            />
          </Grid>
          <Grid item md={12} sx={{ marginBottom: 2 }}>
            <TextField
              label="Industria*"
              fullWidth
              name="industry"
              value={data?.industry}
              error={companyProfileErrors?.industry ? true : false}
              helperText={companyProfileErrors?.industry}
              onChange={handleChangeProfileFields}
            />
          </Grid>
          <Button variant="contained" onClick={handleSubmit}>
            {isInEditMode}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
