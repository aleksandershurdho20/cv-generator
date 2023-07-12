import {
  Container,
  IconButton,
  Box,
  Typography,
  Grid,
  Stack,
  Avatar,
  Divider,
  Button,
  Chip,
} from "@mui/material";
import React, { useState, useEffect, Fragment } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChatPopover from "Components/ChatPopover";
import Fade from "react-reveal/Fade";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { api } from "utils/api/api";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import JobItem from "Containers/JobListingPage/JobItem";

export default function ViewAppicant() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [applicantData, setApplicantData] = useState({});
  const [isRejected, setIRrejected] = useState(false);
  const navigate = useNavigate("");
  const { state } = useLocation();
  const { id } = useParams();
  const { userInfo } = useSelector((state) => state.userSlice);
  const [jobData,setJobData]=useState({})
  const [status,setStatus]=useState("")
  useEffect(() => {
    api
      .get(`applicant/${id}`)
      .then((res) => {
        console.log(res.data,"resko")
        setApplicantData(res.data);
      })
      .catch((err) => err);
    
      api.get(`job/${state.job}`).then(res =>{
        setJobData(res.data)
      })
      api.get(`/applicant/status/${state.user}`).then(res =>{
        setStatus(res.data)
      })
  }, [id]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleReject = () => {
    const data = {
      company: userInfo?.companyProfileId?.name,
    };
    api
      .put(`/reject/applicant/${applicantData?.user}/job/${state.job}`, data)
      .then(() => {
        toast.success("Aplikanti u refuzua me sukses!");
      })
      .catch((err) => err);
  };


  return (
    <Container sx={{ background: "#FFF" }}>
      <Box marginTop="15px">
        <IconButton onClick={() => navigate("/applicants")}>
          <ArrowBackIcon />
        </IconButton>
        Kthehu tek lista e aplikanteve
      </Box>
      <Grid container spacing={2}>
        <Grid item md={8}>
          <Box
            border="1px solid #D5E0D5"
            borderRadius="8px"
            padding="10px"
            marginTop="15px"
            width="650px"
          >
            <Typography variant="h5" marginBottom="20px">
              Informacioni Personal
            </Typography>
            <Grid container>
              <Grid item md={4} sm={12} xs={12}>
                <span style={{ color: "#797070" }}>Emer</span>
                <Typography>{applicantData?.name}</Typography>
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <span style={{ color: "#797070" }}>Mbiemer</span>
                <Typography>{applicantData?.last_name}</Typography>
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <span style={{ color: "#797070" }}>Email</span>
                <Typography>{applicantData?.email}</Typography>
              </Grid>

              <Grid item md={4} sm={12} xs={12}>
                <span style={{ color: "#797070" }}>Telefon</span>
                <Typography>{applicantData?.phone}</Typography>
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <span style={{ color: "#797070" }}>Qyteti</span>
                <Typography>{applicantData?.city}</Typography>
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <span style={{ color: "#797070" }}>Adresa</span>
                <Typography>{applicantData?.address}</Typography>
              </Grid>
            </Grid>
          </Box>

          <Box
            border="1px solid #D5E0D5"
            borderRadius="8px"
            padding="10px"
            marginTop="15px"
            width="650px"
          >
            <Grid container>
              <Grid item md={12}>
                <Typography variant="h5" marginBottom="20px">
                  Edukimi
                </Typography>
                <Grid container>
                  {applicantData?.education?.map((data) => (
                    <Fragment key={data._id}>
                      <Grid item md={4} sm={12} xs={12}>
                        <span style={{ color: "#797070" }}>Institucioni</span>
                        <Typography>{data.university}</Typography>
                      </Grid>
                      <Grid item md={4} sm={12} xs={12}>
                        <span style={{ color: "#797070" }}>
                          Titulli Stuimit
                        </span>
                        <Typography>{data.diploma}</Typography>
                      </Grid>
                      <Grid item md={4} sm={12} xs={12}>
                        <span style={{ color: "#797070" }}>Qyteti</span>
                        <Typography>{data.city}</Typography>
                      </Grid>
                      <Grid item md={4}>
                        <span style={{ color: "#797070" }}>
                          Data e fillimmit
                        </span>
                        <Typography>
                          {data.month_start_date} {data.start_date}
                        </Typography>
                      </Grid>
                      <Grid item md={4} sm={12} xs={12}></Grid>
                      <Grid item md={4}>
                        <span style={{ color: "#797070" }}>
                          Data e mbarimit
                        </span>
                        <Typography>
                          {data.month_end_date} {data.end_date}
                        </Typography>
                      </Grid>
                      <Grid item md={12}>
                        <span style={{ color: "#797070" }}>Pershkrimi</span>
                        <Typography>{data.description}</Typography>
                      </Grid>
                    </Fragment>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <Box
            border="1px solid #D5E0D5"
            borderRadius="8px"
            padding="10px"
            marginTop="15px"
            width="650px"
          >
            <Grid container>
              <Grid item md={12}>
                <Typography variant="h5" marginBottom="20px">
                  Eksperienca
                </Typography>
                <Grid container>
                  {applicantData?.experience?.map((data) => (
                    <Fragment key={data._id}>
                      <Grid item md={6} sm={12} xs={12}>
                        <span style={{ color: "#797070" }}>Pozicioni</span>
                        <Typography>{data.position}</Typography>
                      </Grid>
                      <Grid item md={6} sm={12} xs={12}>
                        <span style={{ color: "#797070" }}>Kompania</span>
                        <Typography>{data.company}</Typography>
                      </Grid>

                      <Grid item md={6} sm={12} xs={12}>
                        <span style={{ color: "#797070" }}>
                          Data e fillimmit
                        </span>
                        <Typography>
                          {data.month_start_date} {data.start_date}
                        </Typography>
                      </Grid>
                      {/* <Grid item md={4} sm={12} xs={12}></Grid> */}
                      <Grid item md={6} sm={12} xs={12}>
                        <span style={{ color: "#797070" }}>
                          Data e mbarimit
                        </span>
                        <Typography>
                          {data.month_end_date} {data.end_date}
                        </Typography>
                      </Grid>
                      <Grid item md={12} sm={12} xs={12}>
                        <span style={{ color: "#797070" }}>Pershkrimi</span>
                        <Typography>{data.description}</Typography>
                      </Grid>
                    </Fragment>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box
            border="1px solid #D5E0D5"
            borderRadius="8px"
            padding="10px"
            marginTop="15px"
      
          >
            <Typography variant="h5" fontWeight="500" marginBottom="20px">
              {" "}
              Aftesi Profesionale
            </Typography>
            <Box 
              display="flex"
              flexWrap="wrap"
              maxWidth="100%"
            
            >
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {applicantData?.skills?.map((skill) => (
                  <Chip
                    label={skill.title}
                    key={skill._id}
                    variant="outlined"
                    sx={{ marginBottom: 2 }}
                  />
                ))}
              </Stack>

            </Box>

          </Box>

          <Box
            border="1px solid #D5E0D5"
            borderRadius="8px"
            padding="10px"
            marginTop="15px"
          >
            <Typography variant="h5" marginBottom="20px">
              Njohurite Gjuhesore
            </Typography>
            <Box
              display="flex"
              flexWrap="wrap"
              maxWidth="100%"
              alignItems="center"
              alignContent="center"
              rowGap="10px"
              columnGap="10px"
            >
              {applicantData?.languages?.map((language) => (
                <Box
                  border="1px solid #D5E0D5"
                  maxWidth="150px"
                  padding="10px"
                  display="flex"
                  height="53px"
                  marginBottom="5px"
                  flex="50%"
                  alignContent="center"
                  alignItems="center"
                  key={language._id}
                >
                  <Avatar>{language.title.charAt(0).toUpperCase()}</Avatar>
                  <Box paddingLeft="5px">
                    <Typography noWrap>{language.title}</Typography>
                    <Typography noWrap>{language.level}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
           border="1px solid #D5E0D5"
           borderRadius="8px"
           padding="10px"
           marginTop="15px"
          >
              <Typography variant="h5" >
                Puna e aplikuar
            </Typography>
          <JobItem job={jobData} isCompany  />

          </Box>      
          <Box
            border="1px solid #D5E0D5"
            borderRadius="8px"
            padding="10px"
            marginTop="15px"
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Button variant="contained" onClick={handleClick}>
                Kontakto
              </Button>
              <ChatPopover
                anchorEl={anchorEl}
                handleClose={handleClose}
                receiver={state.user}
                applicantData={{...applicantData,status:status?.status,candidate:status?.candidate,job:state?.job}}
              />
              <Button variant="bordered" onClick={handleReject}>
                Refuzo
              </Button>
            </Stack>
          </Box>

        </Grid>
      </Grid>
    </Container>
  );
}
