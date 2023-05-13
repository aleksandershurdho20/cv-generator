import StatisticWidgets from 'Components/StatisticBox'
import React,{useEffect,useState} from 'react'
import Grid from "@mui/material/Grid";
import BugReportIcon from '@mui/icons-material/BugReport';// material
import { api } from 'utils/api/api';
import { useSelector } from 'react-redux';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import moment from 'moment'
import Chart from 'Components/Chart';
import { Typography } from '@mui/material';
export default function Dashboard() {
  const { userInfo } = useSelector((state) => state.userSlice);
  const [statistics,setStatistics]=useState({})
  useEffect(()=>{
    api.get(`statistics/company/${userInfo._id}`).then(res => {
      const monthlyApplicants = res.data.monthlyApplicants.map((item) => {
        const {
          _id: { year, month },
          count,
        } = item;
        const date = moment()
          .month(month - 1)
          .year(year)
          .format("MMM Y");
  
        return { date, count };
      })
      .reverse();
      console.log({monthlyApplicants})
      setStatistics({
        createdJobs:res.data.createdJobs,
        monthlyApplicants
      })
    }).catch(err => err)
  },[])
  return (
    <>
   <Grid container spacing={2} style={{paddingLeft:15,background:"white"}} >
      <Grid item xs={4}>
        <StatisticWidgets
          color="#038787"
          background="#038787"
          backgroundSecondary="rgb(235, 250, 242)"
          title="Pune te krijuara"
          total={statistics?.createdJobs}
          icon={<WorkOutlineIcon width={24} height={24}/>}
        />
      </Grid>
      <Grid item xs={4}>
        <StatisticWidgets
          color="rgb(254, 201, 15)"
          background="rgb(254, 201, 15)"
          backgroundSecondary="rgb(255, 244, 229)"
          title="Aplikante"
          total={500}
          icon={<BugReportIcon width={24} height={24}/>}
        />
      </Grid>
      <Grid item xs={4}>
        <StatisticWidgets
          color="rgb(26, 151, 245)"
          background="rgb(26, 151, 245)"
          backgroundSecondary="rgb(230, 244, 255)"
          title="Mesazhe"
          total={500}
          icon={<BugReportIcon width={24} height={24}/>}
        />{" "}
      </Grid>
      <Grid item md={8}>

      <Typography variant="h2" fontSize="26px" fontWeight="700" marginLeft="30px">
        Punet e krijuara sipas muajit
      </Typography>
      <Chart
          data={statistics?.monthlyApplicants}
          title="User Analytics"
          grid
          dataKey="count"
          type="area"
      
      />
      </Grid>

    </Grid>
    </>
  )
}
