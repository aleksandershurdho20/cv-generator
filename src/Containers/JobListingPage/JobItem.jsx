import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IconButton,Typography,Box,Chip } from "@mui/material";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import moment from "moment"
const JobItem = ({ job, saveJob, removeSavedJob,savedJobs }) => {
  const [isSaved, setIsSaved] = useState(false);
    console.log(isSaved,'kar')
  useEffect(() => {
    const savedJob = savedJobs?.some((el) => el.job._id === job._id);
    console.log(savedJob,savedJobs,'varikari')
    setIsSaved(savedJob);
    console.log(isSaved,'karo')
  }, [savedJobs, job._id]);
  const handleSaveJob = () => {
    if (isSaved) {
      removeSavedJob(job._id);
    } else {
      saveJob(job._id);
    }
  };

  return (
    <div key={job._id}>
      <Typography variant="h5" color="black">
        {job.title}
      </Typography>

      <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    alignContent="center"
                  >
                    <Typography variant="h5" color="black">
                      {job.title}
                    </Typography>

                    {isSaved ?         <IconButton  onClick={() => removeSavedJob(job._id)}>
          <BookmarkRemoveIcon />
        </IconButton> :  <IconButton onClick={() => saveJob(job._id)}>
          <BookmarkIcon />
        </IconButton>}

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
                    {console.log(job.skills)}
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

                    <span>{moment(job.createdAt).fromNow()}</span>
                  </Box>
      
    </div>
  );
};

export default JobItem;