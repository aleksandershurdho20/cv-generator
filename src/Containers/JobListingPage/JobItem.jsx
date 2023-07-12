import { IconButton, Typography, Box, Chip, Button, Fade } from "@mui/material";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import moment from "moment";
import 'moment/locale/sq' 
import { jobType } from "constants/jobs";
import { useEffect } from "react";
moment.locale("sq")
const JobItem = ({
  job,
  saveJob,
  removeSavedJob,
  savedJobs,
  handleViewJob,
  isCompany
}) => {
  const isJobSaved = (id) => {
    const savedJob = savedJobs?.find((el) => el?.job?._id === id);
    if (savedJob) {
      return (
        <IconButton onClick={() => removeSavedJob(savedJob?._id)}>
          <BookmarkRemoveIcon />
        </IconButton>
      );
    } else {
      return (
        <IconButton onClick={() => saveJob(id)}>
          <BookmarkIcon />
        </IconButton>
      );
    }
  };
  // useEffect(()=>{
  //   moment.locale("sq")

  // },[moment])
  return (
    <Fade in={true} key={job?._id}>
      <Box
        backgroundColor="white"
        padding="20px"
        marginBottom="5px"
        sx={{ overflowWrap: "break-word" }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          alignContent="center"
        >
          <Typography variant="h5" color="black">
            {job.title}
          </Typography>

          {!isCompany && isJobSaved(job?._id)}
        </Box>
        <Box>
          <span>
            Tipi i punes :{" "}
            {jobType?.find((data) => data.value == job.jobType)?.title}
          </span>
          <br />
          <span>Qyteti : {job.location}</span> <br />
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

          <span>{moment(job.createdAt).locale("sq").fromNow()}</span>
        </Box>
        {!isCompany && <Button onClick={() => handleViewJob(job._id)}>Shiko</Button> }
      </Box>
    </Fade>
  );
};

export default JobItem;
