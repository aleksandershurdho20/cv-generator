import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Container, IconButton, Tooltip, Typography } from "@mui/material";
import UserJobsApplicants from "Components/Applicants/UserJobsApplicants";
import Loader from "Components/Loader";
import Table from "Components/Table";
import { jobApplicantsTableColumns } from "constants/applicants";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { api } from "utils/api/api";

export default function Applicants() {
  const [query, setQuery] = useState("");
  const { userInfo } = useSelector((state) => state.userSlice);
  const [applicants, setApplicants] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userInfo.role[0] === "company") {
      api
        .get(`company/${userInfo._id}/applicants`)
        .then((res) => setApplicants(res.data));

      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    } else return undefined;
  }, []);

  const fitleredItems = query
    ? applicants.filter((el) => el.job.category == query)
    : applicants;

  const something = applicants
    .map((el) => el.applicants)
    .flat()
    .map((el) => el.userProfileId)
    .filter((x) => x !== undefined);
  // .map((el) =>{
  //   const {_id,...rest}=el.job
  //   return {
  //     ...el,
  //     ...rest
  //   };
  // })
  console.log(applicants, "kkk");
  return (
    <Container>
      {userInfo.role[0] === "company" ? (
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
              <Typography variant="h5"> Aplikimet </Typography>
              {/* <Dropdown
            value={query}
            name="category"
            onChange={(e) => setQuery(e.target.value)}
            options={jobCategories}
        />
        {query && <Button variant="text" onClick={()=>setQuery("")}>Pastro Kerkimin</Button>} */}
            </Box>
          </Box>
          {loading ? (
            <Loader />
          ) : (
            <Table
              columns={jobApplicantsTableColumns}
              data={something}
              actions={[
                {
                  render: (rowData) => (
                    <>
                      <Tooltip title="Shiko">
                        <IconButton
                          onClick={() =>
                            navigate(`/applicant/${rowData._id}`, {
                              state: rowData.user,
                            })
                          }
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>
                    </>
                  ),
                },
              ]}
            />
          )}
        </>
      ) : (
        <UserJobsApplicants />
      )}
    </Container>
  );
}
