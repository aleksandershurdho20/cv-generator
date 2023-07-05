import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Dropdown from "Components/Select/Select";
import { jobCategories } from "constants/jobs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredJobs, getJobs, getMatchedJobBySkills } from "redux/slices/Jobs";

export default function JobFilter() {
  const [query,setQuery]=useState("")
  const { userInfo } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const [jobType, setJobType] = useState("");
  const [displayJobsOptions, setDisplayJobsOptions] = useState("");
  const handleChange = (e) => {
    setJobType(e.target.value);
  };
  useEffect(() => {
    if (!jobType) return undefined;

    dispatch(getFilteredJobs({ jobType: jobType }));
  }, [jobType]);
  useEffect(() => {
    if (!query) return undefined;

    dispatch(getFilteredJobs({ category: query }));
  }, [query]);

  const handleClearFilters = () => {
    setJobType("");
    setQuery("")
    dispatch(getJobs());
    setDisplayJobsOptions("")
  };
  useEffect(() => {
    if (!userInfo && displayJobsOptions !== "") return undefined;

    // Check if userInfo._id is defined before making the API call
    if(displayJobsOptions === "skills"){

      dispatch(getMatchedJobBySkills(userInfo._id))
    }
    else if (displayJobsOptions === "all"){
      dispatch(getJobs());

    }
 
  }, [displayJobsOptions]);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2" color="text.primary" fontWeight="600">
            Filtro
          </Typography>
          <a onClick={handleClearFilters}>Pastro</a>
        </Box>
        <Divider />
        <Box sx={{ display: "flex" }}>
          <FormControl
            required
            error={false}
            component="fieldset"
            sx={{ m: 3 }}
            variant="standard"
          >
            <FormLabel component="legend" sx={{color:"#000"}}>Lloji i punes</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              value={jobType}
              onChange={handleChange}
            >
              <FormControlLabel
                name="full_time"
                value="full_time"
                control={<Radio />}
                label="Me kohe te plote"
              />
              <FormControlLabel
                value="part_time"
                control={<Radio />}
                label="Me kohe te pjesshme"
              />
              <FormControlLabel
                value="remote"
                control={<Radio />}
                label="Pune nga shtepia"
              />
              <FormControlLabel
                value="internship"
                control={<Radio />}
                label="Praktike"
              />
            </RadioGroup>

          </FormControl>
        </Box>
        <FormLabel sx={{color:"#000"}}>Shfaq Punet sipas :</FormLabel>

        <Tabs
          textColor="primary"
          indicatorColor="primary"
          aria-label="primary tabs example"
          value={displayJobsOptions}
          onChange={(e, value) => setDisplayJobsOptions(value)}
        >
          <Tab value="skills" label="Njohurive" />
          <Tab value="all" label="Te gjitha" />
        </Tabs>
        <FormLabel sx={{marginTop:8,color:"#000"}}>Shfaq Punet sipas kategorive:</FormLabel>
        <Dropdown
             value={query}
             name="category"
             onChange={(e) => setQuery(e.target.value)}
             options={jobCategories}
        />
      </CardContent>
      
    </Card>
  );
}
