import React,{useEffect,useState} from 'react'
import { Container,IconButton,Tooltip,Typography,Box } from '@mui/material'
import { useSelector } from "react-redux";
import { api } from 'utils/api/api';
import Table from "Components/Table";
import { BookmarkRemove } from '@mui/icons-material';
import { toast } from 'react-toastify';

export default function SavedJobs() {
    const { userInfo } = useSelector((state) => state.userSlice);
    const [savedJobs, setSavedJobs] = useState([]);
    
  useEffect(() => {
    if (!userInfo) return undefined;
    api
      .get(`/jobs/saved/${userInfo?._id}`)
      .then((res) => setSavedJobs(res.data))
      .catch((err) => err);
  }, [userInfo]);

  const columns =[
    {
        title: "Kompania",
        key: "name",
      },
      {
        title: "Industria",
        key: "industry",
      },
    {
        title: "Titulli",
        key: "title",
      },
  
      {
        title: "Kategori",
        key: "category",
      },
  
      {
        title: "Qyteti",
        key: "location",
      },
  
      {
        title: "Lloji i Punes",
        key: "jobType",
      },
      {
        title: "Paga",
        key: "wage",
      },
      {
        title: "Actions",
        key: "actions",
      },
  ]
  
  const removeSavedJob = (id) => {
    api.delete(`/job/saved/${id}`).then((res) => {
      const filteredSavedJobs = [...savedJobs].filter((el) => el._id !== id);
      toast.success("Puna u hoq nga te preferuarat me sukses!");

      setSavedJobs(filteredSavedJobs);
    });
  };
  return (
    <Container>
        <Box
                marginTop="20px"
                marginLeft="auto"
                display="flex"
                justifyContent="space-between"
                backgroundColor="white"
                padding="20px">
                    <Typography variant="h4">
                        Lista e puneve te preferuara
                    </Typography>
                </Box>
         <Table
        columns={columns}
        data={savedJobs.
          map((el) => {
              const {_id,...rest}=el.job
              console.log(rest,'oo')
          return {
            ...el,
            ...rest,
            name:rest?.company.companyProfileId?.name,
            industry:rest.company.companyProfileId?.industry,

          };
        })}
        actions={[
          {
            render: (rowData) => (
              <>
                <Tooltip title="Hiqe nga te preferuarat">
                  <IconButton onClick={() =>removeSavedJob(rowData._id)}>
                    <BookmarkRemove />
                  </IconButton>
                </Tooltip>
              </>
            ),
          },
        ]}
      />

    </Container>
  )
}
