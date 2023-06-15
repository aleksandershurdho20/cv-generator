import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import JobFilter from "Components/JobSearch/JobFilter";
import JobSearchInput from "Components/JobSearch/JobSearchInput";
import ViewJob from "Containers/ViewJob/ViewJob";
import useToggle from "hooks/useToogle";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getFilteredJobs, getJobs } from "redux/slices/Jobs";
import { api } from "utils/api/api";
import JobItem from "./JobItem";

export default function JobListing() {
  const dispatch = useDispatch();
  const { loading, jobs } = useSelector((state) => state.jobSlice);
  const { userInfo } = useSelector((state) => state.userSlice);

  const [searchQuery, setSearchQuery] = useState("");
  const [jobId, setJobId] = useState({});
  const { visible, toggle, setVisibility } = useToggle(false);
  const [savedJobs, setSavedJobs] = useState([]);
  moment().locale("sq")
  useEffect(() => {
    dispatch(getJobs());
  }, []);

  useEffect(() => {
    if (!userInfo) return undefined;
    if(userInfo._id)
    api
      .get(`/jobs/saved/${userInfo?._id}`)
      .then((res) => setSavedJobs(res.data))
      .catch((err) => err);
  }, [userInfo]);
  const onClick = () => {
    const params = {
      title: searchQuery,
    };
    dispatch(getFilteredJobs(params));
  };

  const handleViewJob = (id) => {
    setJobId(id);
    setVisibility(true);
  };

  const saveJob = (id) => {
    const data = {
      job: id,
      user: userInfo?._id,
      is_saved: true,
    };
    api
      .post("job/save", data)
      .then((res) => {
        console.log(res);
        toast.success("Puna u shtua tek te preferuarat me sukses!");
        api
        .get(`/jobs/saved/${userInfo?._id}`)
        .then((res) => setSavedJobs(res.data))
        .catch((err) => err);

      })
      .catch((err) => err);
  };
  const removeSavedJob = (id) => {
    api.delete(`/job/saved/${id}`).then((res) => {
      const filteredSavedJobs = [...savedJobs].filter((el) => el.job._id !== id);

      toast.success("Puna u hoq nga te preferuarat me sukses!");
      api
      .get(`/jobs/saved/${userInfo?._id}`)
      .then((res) => setSavedJobs(res.data))
      .catch((err) => err);
      
      // setSavedJobs(filteredSavedJobs);
    });
  };

 
  return (
    <Container style={{ marginLeft: 36, marginTop: 25 }}>
      <Grid container spacing={2}>
        <Grid item md={3} sm={12}>
          <JobFilter />
        </Grid>
        <Grid item md={9} sm={12}>
          <JobSearchInput
            query={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={onClick}
            title="Jeni duke kerkuar punen e endrrave?"
            description="Kerko tani per punen qe ka dashur gjithmone! Kerko nepermjet titullit"
          />
          {loading ? (
            <CircularProgress />
          ) : jobs?.length === 0 ? (
            "Nuk u gjet asnje pune"
          ) : (

            jobs?.map((job) => (
            <JobItem job={job} saveJob={saveJob} removeSavedJob={removeSavedJob} savedJobs={savedJobs} handleViewJob={handleViewJob} />

            ))
          )}
        </Grid>
      </Grid>
      {visible && <ViewJob open={true} onClose={toggle} id={jobId} />}
    </Container>
  );
}
