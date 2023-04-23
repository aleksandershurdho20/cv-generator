import BookmarkIcon from "@mui/icons-material/Bookmark";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Fade from '@mui/material/Fade';
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import JobFilter from "Components/JobSearch/JobFilter";
import JobSearchInput from "Components/JobSearch/JobSearchInput";
import ViewJob from "Containers/ViewJob/ViewJob";
import useToggle from 'hooks/useToogle';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredJobs, getJobs } from "redux/slices/Jobs";

export default function JobListing() {
  
  const dispatch = useDispatch();
  const { loading, jobs } = useSelector((state) => state.jobSlice);
  const [searchQuery,setSearchQuery]=useState("")
  const [jobId,setJobId]=useState({})
  const {visible, toggle, setVisibility} = useToggle(false)
  
  useEffect(() => {
    dispatch(getJobs());
  }, []);

  const onClick = () =>{
    const params = {
      title:searchQuery
    }
    dispatch(getFilteredJobs(params))
  }

  const handleViewJob = (id) =>{
    setJobId(id)
    setVisibility(true)
  }


 
  return (
    <Container style={{ marginLeft: 36, marginTop: 25 }}>
      <Grid container spacing={2}>
        <Grid item md={3} sm={12}>
          <JobFilter />
        </Grid>
        <Grid item md={9} sm={12}>
          <JobSearchInput query={searchQuery} onChange={e => setSearchQuery(e.target.value)} onClick={onClick} />
          {loading  ? (
            <CircularProgress />
          ) : 
          jobs.length === 0 ? "Nuk u gjet asnje pune" :
          (
            jobs.map((job) => (
              <Fade in={true} key={job._id}>

                  <Box backgroundColor="white" padding="20px" >
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      alignContent="center"
                    >
                      <Typography variant="h5" color="black">
                        {job.title}
                      </Typography>
                      <IconButton>
                        <BookmarkIcon />
                      </IconButton>
                    </Box>
                    <Box>
                      <span>Tipi i punes : {job.jobType}</span>
                      <span>Qyteti : {job.location}</span>
                      <span> Numri aplikanteve : {job.numberOfApplications}</span>
                    </Box>
                    <p>{job.description}</p>
                    <Box
                      display="flex"
                      alignContent="center"
                      alignItems="center"
                      justifyContent="space-between"
                      paddingTop="10px"
                      marginBottom="10px"
                    >
                      <Box>
                        {job.skills &&
                          job.skills.map((skill, i) => (
                            <Chip
                              key={i}
                              label={skill}
                              variant="outlined"
                              sx={{ marginRight: 1 }}
                            />
                          ))}
                      </Box>

                      <span>{job.createdAt}</span>
                    </Box>
                    <Button>Apliko</Button>
                    <Button onClick ={() =>handleViewJob(job._id) }>Shiko</Button>
                  </Box>
              </Fade>
            ))
          )}
        </Grid>
      </Grid>
      {visible && 
        <ViewJob
        open={true}
        onClose={toggle}
        id={jobId}
        />
        }
    </Container>
  );
}
