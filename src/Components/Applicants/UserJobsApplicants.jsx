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
import { applicantsTableColumns } from "constants/applicants";
import { parseCandidateApplyStatus } from "helpers/parseCandidateApplyStatus";

export default function UserJobsApplicants() {
  const [query,setQuery]=useState("")
  const { userInfo } = useSelector((state) => state.userSlice);
  const [applicants, setApplicants] = useState([]);
 
  useEffect(() => {
    api
      .get(`applicants/${userInfo._id}`)
      .then((res) => setApplicants(res.data));

  }, []);
  const fitleredItems = query ? applicants.filter(el => el?.job?.category === query) : applicants
  const handleCancelApplication = (row) =>{
    api.post(`application/cancel/${row._id}`,{job:row.job._id,candidate:row.candidate}).then(res => {
      toast.success("Aplikimi u anullua!")
      const allApplications = [...applicants].filter(el => el._id !== row._id)
      setApplicants(allApplications)
    }).catch(err => err)
  }

  
  return (
    <Container>
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
        columns={applicantsTableColumns}
        data={fitleredItems.
          filter(el => el.is_confirmed).
          map((el) => {
          const {_id,...rest}=el.job ?? {}
          return {
            ...el,
            status:parseCandidateApplyStatus(el.status),
            ...rest
          };
        })}
        actions={[
          {
            render: (rowData) => (
              <>
                <Tooltip title="Anullo Aplikimin">
                  <IconButton onClick={() =>handleCancelApplication(rowData)} disabled={rowData.status === "Refuzuar"}>
                    <CancelIcon />
                  </IconButton>
                </Tooltip>
              </>
            ),
          },
        ]}
      />
    </Container>
  );
}
