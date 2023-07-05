import CompanyProfile from "Components/Profile/CompanyProfile";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api } from "utils/api/api";
import Carosel from "../../Components/Carosel/Carosel";
import { toast } from "react-toastify";
import { validateCompanyFields } from "redux/slices/User";

export default function Profile() {

  const state = useSelector((state) => state.userSlice.userInfo.companyProfileId);
  const { userInfo,companyProfileErrors } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch()
  const isInEditMode = state?._id ? "Modifiko" : "Krijo"


  const handleSubmit = () => {
    if (!userInfo) return;
    const {_id,user,...rest}=state ?? {}
    dispatch(validateCompanyFields(state));
    const hasErrors = Object.values(rest).some((error) => error.length  === 0);
    // If there are errors, return or handle them as needed
    if (hasErrors) {
      return;
    }
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
  console.log(userInfo.companyProfileId,'oo')
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
