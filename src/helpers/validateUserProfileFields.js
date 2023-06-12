
export const validateUserProfileFields = (state) => {
  const experienceValid = state.experience.every(el => {
    return parseInt(el.start_date) <= parseInt(el.end_date) && el.position && el.company;
  });

  const educationValid = state.education.every(el => {
    return el.diploma && el.university && parseInt(el.start_date) <= parseInt(el.end_date);
  });

  const languageValid = state.languages.filter(el => {
    return !el.title
  });

  const skillsValid = state.skills.filter(el => {
    return !el.title
  });
  return experienceValid && educationValid && languageValid.length === 0  && skillsValid.length === 0;
  ;
};