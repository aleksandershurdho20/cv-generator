import BookmarkIcon from "@mui/icons-material/Bookmark";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import JobFilter from "Components/JobSearch/JobFilter";
import JobSearchInput from "Components/JobSearch/JobSearchInput";
import ViewJob from "Containers/ViewJob/ViewJob";
import useToggle from "hooks/useToogle";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getFilteredJobs, getJobs } from "redux/slices/Jobs";
import { api } from "utils/api/api";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import { useNavigate } from "react-router-dom";

export default function UserListingPage() {

  const [searchQuery, setSearchQuery] = useState("");
  const [usersList,setUsersList]=useState([])
  const [loading,setLoading]=useState(false)
  const [pastroKerkmin,setPastroKerkimin]=useState(false)
  const navigate = useNavigate()

  const viewProfile = (id) => navigate(`/users/profile/${id}`) 
  const onClick = () => {

    setPastroKerkimin(true)
    setLoading(true)
    api.post("users/search",{query:searchQuery}).then(res =>{
        console.log("resko",res.data)
        setUsersList(res.data)
        setLoading(false)
    }).catch(err => setLoading(false))
  };

  const handleEmpty = () =>{
    setPastroKerkimin(false)
    setSearchQuery("")
    setUsersList([])
  }




  return (
    <Container style={{ marginLeft: 36, marginTop: 25 }}>
      <Grid container spacing={2}>
    
        <Grid item md={10} sm={12}>
          <JobSearchInput
            query={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={onClick}
            title="Profesioniste"
            description="Per te gjetur profesioniste, kerkoni nepermjet profesionit dhe platforma do ja u mundesoje gjetjen e tyre"
            pastroKerkmin={pastroKerkmin}
            handleEmpty={handleEmpty}
          />
          {loading ? (
            <CircularProgress />
          ) : usersList?.length === 0 ? (
            "Nuk u gjet asnje rezultat"
          ) : (
            usersList?.map((user) => (
              <Fade in={true} key={user._id}>
                <Box backgroundColor="white" padding="20px" marginBottom="5px">
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    alignContent="center"
                  >
                    <Typography variant="h5" color="black">
                      {user.name + " " + user.last_name}
                    </Typography>


                  </Box>
                  <Box display="flex" flexDirection="column">
                    <span>Telefon : {user.phone}</span>
                    <span>Email : {user.email}</span>
                    <span>Profesioni : {user.experience[0].position}</span>

                  </Box>
                  <Box
                    display="flex"
                    alignContent="center"
                    alignItems="center"
                    justifyContent="space-between"
                    paddingTop="10px"
                    marginBottom="10px"
                  >
                    <Box>
                      {user.skills &&
                        user.skills.map((skill, i) => (
                          <Chip
                            key={i}
                            label={skill.title}
                            variant="outlined"
                            sx={{ marginRight: 1 }}
                          />
                        ))}
                    </Box>

                  </Box>
                  <Button onClick={() => viewProfile(user.user)}>Shiko Profilin</Button>
                </Box>
              </Fade>
            ))
          )}
        </Grid>
      </Grid>
      {/* {visible && <ViewJob open={true} onClose={toggle} id={jobId} />} */}
    </Container>
  );
}
