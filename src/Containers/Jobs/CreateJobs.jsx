import Container from "@mui/material/Container";
import CreateJobForm from "Components/CreateJobForm/CreateJobForm";
import { jobData as jobDataState } from "constants/jobs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createJob } from "redux/slices/Jobs";

export default function CreateJob() {
  const dispatch = useDispatch();
  const [jobData, setJobData] = useState(jobDataState);
  const { error } = useSelector((state) => state.jobSlice);
  const { userInfo } = useSelector((state) => state.userSlice);

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

  const [errors, setErrors] = useState({});
  const handleSubmit = () => {
    let errors = {};
    if (!jobData.title) {
      errors.title = "Titulli nuk mund te jete bosh!";
      setErrors(errors);

      return;
    } else if (!jobData.description) {
      errors.description = "Pershkrimi nuk mund te jete bosh!";
      setErrors(errors);

      return;
    } else if (!jobData.jobType) {
      errors.jobType = "Tipi i punes nuk mund te jete bosh!";
      setErrors(errors);

      return;
    } else if (!jobData.category) {
      errors.category = "Kategoria nuk mund te jete bosh!";
      setErrors(errors);
      return;
    }

    const params = {
      ...jobData,
      company:userInfo?._id,
      skills: jobData.skills.map((job) => job.value),
    };

    dispatch(createJob(params));
    if (!error) {
      setJobData({ ...jobDataState, skills: [{ name: "aftesi", value: "" }] });
      toast.success("Njoftimi u krijua me sukses!");
    }
  };
  return (
    <Container>
      <CreateJobForm
        jobData={jobData}
        errors={errors}
        handleFormFields={handleFormFields}
        handleSkillsFields={handleSkillsFields}
        removeSkils={removeSkils}
        handleAddSkills={handleAddSkills}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}
