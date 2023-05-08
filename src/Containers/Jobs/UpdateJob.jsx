import { Container } from '@mui/material'
import UpdateJobForm from 'Components/CreateJobForm/CreateJobForm'
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { api } from 'utils/api/api'

export default function UpdateJob() {
    const {id} = useParams()
    const [jobData, setJobData] = useState({});
    const [errors, setErrors] = useState({});
  useEffect(() => {
    api
      .get(`job/${id}`)
      .then((res) => setJobData(res.data))
      .catch((err) => err);
  }, [id]);
  const handleFormFields = (e) => {
    const { name, value } = e.target;
    setJobData({
      ...jobData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSkillsFields = (e, i) => {
    const { name, value } = e.target;

    const fields = [...jobData.skills];

    fields[i][name] = value;

    setJobData({
      ...jobData,
      skills: fields,
    });
  };
  const handleAddSkills = () =>
    setJobData({
      ...jobData,
      skills: [...jobData.skills, { name: "aftesi", value: "" }],
    });

  const removeSkils = (i) => {
    const removedSkills = [...jobData.skills].splice(i, 1);
    setJobData({
      ...jobData,
      skills: removedSkills,
    });
  };


  const handleSubmit = () =>{
    api.put(`job/${id}`,jobData).then(res =>{
      console.log("res",res)
    }).catch(err => err)
  }
  return (
    <Container>
        <UpdateJobForm
        
        jobData={jobData}
        errors={errors}
        handleFormFields={handleFormFields}
        handleSkillsFields={handleSkillsFields}
        removeSkils={removeSkils}
        handleAddSkills={handleAddSkills}
        handleSubmit={handleSubmit}
        isEditing
        />

    </Container>
    )
}
