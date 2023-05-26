import CompanyProfile from "Components/Profile/CompanyProfile";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { api } from "utils/api/api";
import Carosel from "../../Components/Carosel/Carosel";
import { toast } from "react-toastify";

export default function Profile() {

  const state = useSelector((state) => state.userSlice.userInfo.companyProfileId);

  const { userInfo } = useSelector((state) => state.userSlice);
  const isInEditMode = state?._id ? "Modifiko" : "Krijo"



  console.log(userInfo,'userInfo')

  const handleSubmit = () => {
    if (!userInfo) return;
    if(isInEditMode === "Modifiko"){
      api.put(`/profile/${userInfo?._id}`,state).then(res =>{
        toast.success("Profili u modifikua me sukses!")
      }).catch(err =>err)
    }
    else{
      console.log("should be here")
      const params = {...state,user: userInfo?._id}
      console.log(params,'params')
      api
      .post("profile/create", params)
      .then((res) => {
        toast.success("Profili u krijua me sukses!")

      })
      .catch((err) => console.log("errko"));
    }
  };
  return (
    <div>
      {userInfo.role[0] == "company" ? (
        <CompanyProfile
          data={userInfo.companyProfileId}
          handleSubmit={handleSubmit}
          isInEditMode={isInEditMode}
        />
      ) : (
        <Carosel />
      )}
    </div>
  );
}
