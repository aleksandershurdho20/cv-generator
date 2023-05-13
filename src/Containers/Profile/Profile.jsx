import CompanyProfile from "Components/Profile/CompanyProfile";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { api } from "utils/api/api";
import Carosel from "../../Components/Carosel/Carosel";

export default function Profile() {
  const [profileData, setProfileData] = useState({
    image: "",
    name: "",
    size: "",
    location: "",
    industry: "",
  });
  const { userInfo } = useSelector((state) => state.userSlice);
  // useEffect(() => {
  //   api
  //     .get(`/profile/${userInfo._id}`)
  //     .then((res) => {
  //       console.log(res, "resko");
  //     })
  //     .catch((err) => err);
  // }, []);

  const handleChangeProfileFields = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (!userInfo) return;
    const data = { ...profileData, user: userInfo?._id };
    api
      .post("profile/create", data)
      .then((res) => {
        console.log("resko");
      })
      .catch((err) => console.log("errko"));
  };
  return (
    <div>
      {userInfo.role[0] == "company" ? (
        <CompanyProfile
          data={userInfo.companyProfileId}
          handleChangeProfileFields={handleChangeProfileFields}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Carosel />
      )}
    </div>
  );
}
