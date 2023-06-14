import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Typography  } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Dropdown from "Components/Select/Select";
import { jobCategories, jobType } from "constants/jobs";
import { useNavigate } from "react-router-dom";

export default function CreateJobForm({
  jobData,
  errors,
  handleFormFields,
  handleSkillsFields,
  removeSkils,
  handleAddSkills,
  handleSubmit,
  isEditing
}) {
  const navigate = useNavigate();
  return (
    <Box >
        <Typography marginTop="15px" marginBottom="15px" fontWeight="600" fontSize="22px">{!isEditing ? "Krijo pune te re " : "Modifiko punen"}</Typography>
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{background:"white"}}
      >
        
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            fullWidth
            name="title"
            label="Titulli *"
            variant="outlined"
            value={jobData.title}
            onChange={handleFormFields}
            error={errors?.title && errors.title}
            helperText={errors?.title}
            InputLabelProps={{ shrink: true }}

          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField 
            value={jobData.description}
            multiline
            rows="3"
            style={{ width: "90%",border:"transparent" }}
            name="description"
            label="Pershkrimi *"
            variant="outlined"
            onChange={handleFormFields}
            error={errors?.description && errors.description}
            helperText={errors?.description}
            InputLabelProps={{ shrink: true }}

          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="location"
            label="Vendodhja "
            variant="outlined"
            value={jobData.location}
            onChange={handleFormFields}
            fullWidth
            InputLabelProps={{ shrink: true }}

          />
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="outlined" sx={{ width: "90%" }}>
            <InputLabel id="demo-simple-select-filled-label">
              Tipi i punes *
            </InputLabel>
            <Dropdown
              value={jobData.jobType}
              name="jobType"
              onChange={handleFormFields}
              options={jobType}
              error={errors?.jobType ? true : false}
              helperText={errors?.jobType}
              InputLabelProps={{ shrink: true }}

            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="number"
            name="wage"
            label="Paga "
            value={jobData.wage}
            onChange={handleFormFields}
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
            InputProps={{ inputProps: { min: 0 } }}


          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="number"
            name="experience"
            label="Eksperienca "
            variant="outlined"
            value={jobData.experience}
            onChange={handleFormFields}
            sx={{ width: "90%" }}
            InputLabelProps={{ shrink: true, }}
            InputProps={{ inputProps: { min: 0 } }}


          />
        </Grid>
        <Grid container spacing={2}
        sx={{marginTop:1}} 
>
        <Grid item xs={6} >
          <FormControl variant="outlined" sx={{ width: "97%",marginLeft:2 }}>
            <InputLabel id="demo-simple-select-filled-label">Kategori</InputLabel>
            <Dropdown
              value={jobData.category}
              name="category"
              onChange={handleFormFields}
              options={jobCategories}
              error={errors?.category && errors.category}
              helperText={errors?.category}
            />
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          {jobData?.skills?.map((el, i) => (
            <>
              <TextField
                key={i}
                label="Aftesi "
                variant="outlined"
                name="value"
                value={isEditing ? el : el.value}
                onChange={(e) => handleSkillsFields(e, i)}
                sx={{ width: "90%"}}
                InputLabelProps={{ shrink: true }}

              />

              {i > 0 && (
                <IconButton onClick={() => removeSkils(i)}>
                  <DeleteIcon />
                </IconButton>
              )}
            </>
          ))}
          <IconButton onClick={handleAddSkills}>
            <AddIcon />
          </IconButton>
        </Grid>
        </Grid>
        <Stack direction="row" spacing={2} margin="20px 15px 0px 15px">
          <Button variant="contained" onClick={handleSubmit}>
            {isEditing ? "Modifiko" : "Krijo"}
          </Button>
          <Button variant="outlined" onClick={() => navigate(-1)}>
            Kthehu
          </Button>
        </Stack>
      </Grid>
    </Box>
  );
}
