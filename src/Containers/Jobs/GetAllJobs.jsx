import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Container,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Box,
  Typography,
  Fade,
  CircularProgress
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "utils/api/api";
import moment from "moment"
import { jobType } from "constants/jobs";
export default function GetAllJobs() {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.userSlice);
  const [jobs, setJobs] = useState([]);
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    if (!userInfo) return undefined;
    api
      .get(`/jobs/company/${userInfo._id}`)
      .then((res) => setJobs(res.data.jobs))
      .catch((err) => err);
      const timer = setTimeout(()=>{
        setLoading(false)
      },1000)
      return () =>clearTimeout(timer)
  }, [userInfo]);

  const handleDelete = (id) =>{
    api.delete(`job/${id}`).then(res =>{
        const allJobs= [...jobs].filter(job => job._id !== id)
        toast.success("Puna u fshi me sukses!")
        setJobs(allJobs)
    }).catch(err => toast.error("Ndodhi nje problem!"))
  }
  
  return (
    <Container sx={{ height: "100%" }}>
      <Box
          marginTop="20px"
          marginLeft="auto"
          display="flex"
          justifyContent="space-between"
          backgroundColor="white"
          padding="20px"
        >
          <Typography variant="h5">Te gjitha punet</Typography>
          <Button variant="outlined" onClick={() => navigate("/job/create")}>
            Krijo pune Te re{" "}
          </Button>
        </Box>
      {loading ? <Box sx={{marginTop:10,display:"flex",justifyContent:"center"}}>
        <CircularProgress />
      </Box> : 
      <>
        <Fade in={true}>

          <TableContainer
            sx={{
              background: "#FFF",
              borderRadius: "10px",
              marginTop: "15px",
              height: "100%",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Titulli</TableCell>
                  <TableCell>Tipi i punes </TableCell>
                  <TableCell>Qyteti</TableCell>
                  <TableCell>Krijuar</TableCell>

                  <TableCell>Veprimet</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jobs.length > 0
                  ? jobs.map((job) => (
                      <TableRow key={job._id}>
                        <TableCell>{job._id}</TableCell>
                        <TableCell>{job.title}</TableCell>
                        <TableCell>{jobType?.find((data) => data.value === job.jobType)?.title}</TableCell>
                        <TableCell>{job.location}</TableCell>
                        <TableCell>{moment(job.createdAt).format("YYYY-MM-DD")}</TableCell>

                        <TableCell>
                          <IconButton
                            onClick={() => navigate(`/job/update/${job._id}`)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            onClick={()=>handleDelete(job._id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  : "Nuk u gjet asnje pune!"}
              </TableBody>
            </Table>
          </TableContainer>
        </Fade>
      </>
      }
    </Container>
  );
}