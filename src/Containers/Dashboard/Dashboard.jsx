import StatisticWidgets from "Components/StatisticBox";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import BugReportIcon from "@mui/icons-material/BugReport"; // material
import { api } from "utils/api/api";
import { useSelector } from "react-redux";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Chart from "Components/Chart";
import { Typography } from "@mui/material";
import { getDataByDateAndMonth } from "helpers/getDataByDate";
import { parseCandidateApplyStatus } from "helpers/parseCandidateApplyStatus";

export default function Dashboard() {
  const { userInfo } = useSelector((state) => state.userSlice);
  const [statistics, setStatistics] = useState({});
  const [userStatistics, setUserStatistics] = useState({});
  const isUserCompany = userInfo.role[0] === "company";
  useEffect(() => {
    if (userInfo.role[0] === "company") {
      api
        .get(`statistics/company/${userInfo._id}`)
        .then((res) => {
          const monthlyApplicants = getDataByDateAndMonth(res.data.monthlyApplicants)
          
          setStatistics({
            ...res.data,
            monthlyApplicants,
         
          });
        })
        .catch((err) => err);
    } else {
      api.get(`statistics/user/${userInfo._id}`).then((res) => {
        console.log(res);
        const userApplicants
        = getDataByDateAndMonth(res.data.userApplicants)

               setUserStatistics({
          ...res.data,
          userApplicants

        });
      });
    }
  }, []);
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{ paddingLeft: 15, background: "white" }}
      >
        <Grid item xs={4}>
          <StatisticWidgets
            color="#038787"
            background="#038787"
            backgroundSecondary="rgb(235, 250, 242)"
            title={`Pune te  ${isUserCompany ?`krijuara` : `preferuara` }`}
            total={isUserCompany ?statistics?.createdJobs : userStatistics?.userSavedJobs}
            icon={<WorkOutlineIcon width={24} height={24} />}
          />
        </Grid>
        <Grid item xs={4}>
          <StatisticWidgets
            color="rgb(254, 201, 15)"
            background="rgb(254, 201, 15)"
            backgroundSecondary="rgb(255, 244, 229)"
            title={isUserCompany ? "Aplikante" : "Aplikime te bera"}
            total={
              isUserCompany
                ? statistics?.totalApplicantsInJobs
                : userStatistics?.totalJobsApply
            }
            icon={<BugReportIcon width={24} height={24} />}
          />
        </Grid>
        <Grid item xs={4}>
          <StatisticWidgets
            color="rgb(26, 151, 245)"
            background="rgb(26, 151, 245)"
            backgroundSecondary="rgb(230, 244, 255)"
            title="Mesazhe"
            total={
              isUserCompany
                ? statistics?.messages
                : userStatistics?.totalMessages
            }
            icon={<BugReportIcon width={24} height={24} />}
          />{" "}
        </Grid>
        <Grid item md={8}>
          <Typography
            variant="h2"
            fontSize="26px"
            fontWeight="700"
            marginLeft="30px"
          >
           {isUserCompany ? "Punet e krijuara sipas muajit" : "Aplikiment e kryera sipas muajit" } 
          </Typography>
          <Chart
            data={isUserCompany ? statistics?.monthlyApplicants : userStatistics?.userApplicants}
            title="User Analytics"
            grid
            dataKey="count"
            type="area"
          />
        </Grid>
        <Grid item md={4}>
          <Typography
            variant="h2"
            fontSize="26px"
            fontWeight="700"
            marginLeft="30px"
          >
            {`Statusi i  ${isUserCompany ? `Aplikanteve` : `Aplikantit` }`}
            
          </Typography>
          <Chart
            data={isUserCompany ? parseCandidateApplyStatus(statistics?.applicantStatuses) : parseCandidateApplyStatus(userStatistics?.applicantStatuses)}
            title="User Analytics"
            grid
            dataKey="count"
            type="pie"
          />
        </Grid>
      </Grid>
    </>
  );
}
