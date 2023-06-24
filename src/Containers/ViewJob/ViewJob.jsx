import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { api } from "utils/api/api";
import { useEffect } from "react";
import {
  Box,
  IconButton,
  Typography,
  Avatar,
  Button,
  Stack,
  Grid,
  Container,
  
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { parsedCategoryTitle } from "constants/jobs";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import moment from "moment"
export default function ViewJob({ open, onClose, id }) {
  const [jobData, setJobData] = useState({});
  const [matchedJobs, setMatchedJobs] = useState([]);
  const { userInfo } = useSelector((state) => state.userSlice);

  useEffect(() => {
    api
      .get(`job/${id}`)
      .then((res) => {
        console.log("res", res.data.category);
        api
          .get(`jobs/match/category/${res.data?.category}`)
          .then((response) => {
            const jobs = response?.data?.filter(job => job?._id !== id)
            setMatchedJobs(jobs);
          });
        setJobData(res.data);
      })
      .catch((err) => err);
  }, [id]);

  const categoryTitle = parsedCategoryTitle(jobData?.category);

  const handleApply = () => {
    if(!userInfo.userProfileId){
     toast.error("Ju lutem plotesojeni profilin per te vazhduar aplikimin")
      return;

    }
    const data = {
      candidate: userInfo?._id,
      job: jobData?._id,
      is_confirmed: true,
      status:"applied"
    };
    api
      .post("job/apply", data)
      .then((res) => {
        toast.success("Aplikimi u krye me sukses!");
      })
      .catch((err) => toast.error(err.response.data));
  };
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: "50%" },
      }}
    >
      <IconButton style={{ marginLeft: "auto" }} onClick={onClose}>
        <CloseIcon />
      </IconButton>
      <Container>


          <Grid
            container
            rowSpacing={1}
            // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            border="1px solid #D5E0D5"
            borderRadius="8px"
            padding="10px"
            marginTop="15px"

          >
            <Grid item xs={9} sx={{ overflowWrap: "break-word" }}>
              <Typography color="#000">{jobData.title}</Typography>
              <span style={{ color: "#797070" }}>Kategori</span>
              <Typography color="#000">{categoryTitle}</Typography>
              <span style={{ color: "#797070" }}>Vendodhja</span>

              <Typography color="#000">{jobData.location}</Typography>

              <span style={{ color: "#797070" }}>Postuar</span>

              <Typography color="#000">{moment(jobData.createdAt).format("YYYY-MM-DD")}</Typography>
              <h1>Pershkrimi</h1>
              <Typography color="#000">{jobData.description}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={2} marginBottom="10px">
                <Button variant="contained" fullWidth onClick={handleApply}>
                  Apliko
                </Button>
                {/* <Button variant="bordered" fullWidth>
                  Shperndaje
                </Button> */}
              </Stack>
              <span style={{ color: "#797070" }}>Rreth Kompanise</span>

              <Typography color="#000">
                {jobData.company?.companyProfileId?.name}
              </Typography>

              <h3>{jobData.company?.companyProfileId?.location}</h3>
              <h3>{jobData.company?.companyProfileId?.size} punetore</h3>

              <h4>{jobData.company?.companyProfileId?.industry}</h4>
            </Grid>
          </Grid>
          <Grid container spacing={3} marginTop="8px">
            <Grid item md={12}>
              <Typography variant="h5" marginBottom="8px">
                Pune te ngjashme{" "}
              </Typography>
              {matchedJobs.length > 0
                ? matchedJobs.map((job) => (
                    <Box
                      border="1px solid #D5E0D5"
                      borderRadius="8px"
                      padding="5px"
                      marginBottom="10px"
                    >
                      <Grid container wrap="nowrap" spacing={2} key={job._id}>
                        <Grid item>
                          <Avatar>W</Avatar>
                        </Grid>
                        <Grid item xs>
                          <Typography>{job.title}</Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  ))
                : <Typography color ="red">Nuk u gjeten pune te ngjashme!</Typography>}
            </Grid>
          </Grid>
      </Container>
    </Drawer>
  );
}
