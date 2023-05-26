import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredJobs, getJobs ,getMatchedJobBySkills} from "redux/slices/Jobs";
import { api } from "utils/api/api";
export default function JobFilter() {
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

  const handleClearFilters = () => {
    setJobType("");
    dispatch(getJobs());
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
          <a onClick={handleClearFilters}>Clear</a>
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
            <FormLabel component="legend">Job Type</FormLabel>
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

            <FormHelperText>You can display an error</FormHelperText>
          </FormControl>
        </Box>
        <FormHelperText>Shfaq Punet sipas :</FormHelperText>

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
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography paragraph>Method:</Typography>
        <Typography paragraph>
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and
          set aside for 10 minutes.
        </Typography>
        <Typography paragraph>
          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
          over medium-high heat. Add chicken, shrimp and chorizo, and cook,
          stirring occasionally until lightly browned, 6 to 8 minutes. Transfer
          shrimp to a large plate and set aside, leaving chicken and chorizo in
          the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
          pepper, and cook, stirring often until thickened and fragrant, about
          10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth;
          bring to a boil.
        </Typography>
        <Typography paragraph>
          Add rice and stir very gently to distribute. Top with artichokes and
          peppers, and cook without stirring, until most of the liquid is
          absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
          shrimp and mussels, tucking them down into the rice, and cook again
          without stirring, until mussels have opened and rice is just tender, 5
          to 7 minutes more. (Discard any mussels that don&apos;t open.)
        </Typography>
        <Typography>
          Set aside off of the heat to let rest for 10 minutes, and then serve.
        </Typography>
      </CardContent>
    </Card>
  );
}
