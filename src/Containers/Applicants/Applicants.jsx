import { useState } from "react";
import { Box, Container, Typography, IconButton, Tooltip, Button } from "@mui/material";
import Table from "Components/Table";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { api } from "utils/api/api";
import CancelIcon from "@mui/icons-material/Cancel";
import { toast } from "react-toastify";
import { jobCategories } from "constants/jobs";
import Dropdown from "Components/Select/Select";
import { applicantsTableColumns,jobApplicantsTableColumns } from "constants/applicants";
import UserJobsApplicants from "Components/Applicants/UserJobsApplicants";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useNavigate } from "react-router-dom";

export default function Applicants() {
  const [query,setQuery]=useState("")
  const { userInfo } = useSelector((state) => state.userSlice);
  const [applicants, setApplicants] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    if(userInfo.role[0] === "company"){
      api
      .get(`company/${userInfo._id}/applicants`)
      .then((res) => setApplicants(res.data));
      
    }
    else return undefined
  }, []);


  const fitleredItems = query ? applicants.filter(el => el.job.category == query) : applicants

  const something = applicants.map(el => el.applicants).flat().map(el => el.userProfileId).filter (x => x !== undefined)
  // .map((el) =>{
  //   const {_id,...rest}=el.job
  //   return {
  //     ...el,
  //     ...rest
  //   };
  // }) 
  console.log(something,"kkk")
  return (
    <Container>
      {userInfo.role[0] === "company" ? 
      <>
        <Box
        marginTop="20px"
        marginLeft="auto"
        display="flex"
        justifyContent="space-between"
        backgroundColor="white"
        padding="20px"
      >
    <Box>

    <Typography variant="h5">Shfaq Aplikimet sipas :</Typography>
        <Dropdown
            value={query}
            name="category"
            onChange={(e) => setQuery(e.target.value)}
            options={jobCategories}
        />
        {query && <Button variant="text" onClick={()=>setQuery("")}>Pastro Kerkimin</Button>}
    </Box>
      </Box>
      <Table
        columns={jobApplicantsTableColumns}
        data={something}
        actions={[
          {
            render: (rowData) => (
              <>
                <Tooltip title="Shiko">
                  <IconButton onClick={() =>navigate(`/applicant/${rowData._id}`,{state:rowData.user})}>
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Kontakto">
                  <IconButton onClick={() =>{}}>
                    <ContactMailIcon />
                  </IconButton>
                </Tooltip>
              </>
            ),
          },
        ]}
      />
      </>
      
      : <UserJobsApplicants/>}
    
    </Container>
  );
}
