import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import Grid from '@mui/material/Grid';
import {
    cvDataState,
    addEducationFields,
    handleChangeEducationFields,
    removeEducationFields
} from "../../redux/slices/User";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import InputLabel from '@mui/material/InputLabel';
import { years,monthNames } from 'utils/PdfGenerator/generateDate';
import { resetFormFields } from 'redux/slices/cvFieldsError';
import { getFieldErrorMessage } from 'helpers/getFieldsErrorMessage';
import { getNonEmptyKey, getNonEmptyObject } from 'helpers/validateObjectKeys';

export default function EdukimiFormFields() {
  const state = useSelector((state) => state.userSlice.userInfo.userProfileId);
  
  const { 
    diploma,
    university,
    edukimi_start_date
     } = useSelector((state) => state.cvFieldsError);
    const dispatch = useDispatch()

    const { education } = state;
//     function getNonEmptyKey(obj) {
//       for (let key in obj) {
//           const value = obj[key];
//           if (typeof value !== "undefined" && Object.keys(value).length > 0) {
//               return key;
//           }
//       }
//       return null; // Return null if no non-empty key is found
//   }
//   function getNonEmptyObject(...objects) {
//     for (let object of objects) {
//         if (typeof object !== "undefined" && Object.keys(object).length > 0) {
//             return object;
//         }
//     }
//     return null; // Return null if no non-empty object is found
// }


  
    const addEducationDataFields =() =>{
        dispatch(addEducationFields())
      }
      const handleEducationFields = (e,index) =>{
        const {name,value}= e.target;
        const  params = {    diploma,
          university,
          edukimi_start_date}
        dispatch(handleChangeEducationFields({index,name,value}))
        // dispatch(resetFormFields({key:name}))
        const nonEmptyKey = getNonEmptyKey(params);
        const objectValue = getNonEmptyObject(params)
        if(nonEmptyKey){
          dispatch(resetFormFields({key:objectValue[index],params:{index,key:nonEmptyKey}}))
    
      }
      }
      const removeEducationDataFields = (index) =>{
        dispatch(removeEducationFields(index))
      }
      
  

  return (
    <Grid container>
    {education &&
      education.map((data, index) => (
        <div key={index} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                id="outlined-basic"
                label="Diploma/Titulli i kualifikimit * "
                variant="outlined"
                name="diploma"
                value={data.diploma}
                error={ getFieldErrorMessage(diploma,index) ? true : false}
                helperText={getFieldErrorMessage(diploma,index)}
                // onChange={props.handleCVFields}
                onChange={(value) =>
                  handleEducationFields(value, index)
                }
                fullWidth
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                id="outlined-basic"
                label="Universiteti *"
                variant="outlined"
                name="university"
                value={data.university}
                onChange={(value) =>
                  handleEducationFields(value, index)
                }
                error={ getFieldErrorMessage(university,index) ? true : false}
                helperText={getFieldErrorMessage(university,index)}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={12} style={{ marginTop: 15 }}>
              <TextField
                id="outlined-basic"
                label="Qyteti"
                variant="outlined"
                name="city"
                value={data.city}
                onChange={(value) =>
                  handleEducationFields(value, index)
                }
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={6} sm={12} xs={12}>
              <InputLabel
                id="demo-simple-select-label"
                style={{ marginTop: 10 }}
              >
                Data e fillimit
              </InputLabel>

              <select
                className="select"
                name="month_start_date"
                value={data.month_start_date}
                onChange={(value) =>
                  handleEducationFields(value, index)
                }
              >
                {monthNames.map((value, index) => (
                  <option value={value} key={index}>
                    {value}
                  </option>
                ))}
              </select>
              <select
                className="select"
                style={{ marginLeft: 20 }}
                name="start_date"
                value={data.start_date}
                onChange={(value) =>
                  handleEducationFields(value, index)
                }
              >
                {years.map((value, index) => (
                  <option value={value} key={index}>
                    {value}
                  </option>
                ))}
              </select>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <InputLabel
                id="demo-simple-select-label"
                style={{ marginTop: 10 }}
              >
                Data e mbarimit
              </InputLabel>

              <select
                className="select"
                name="month_end_date"
                value={data.month_end_date}
                onChange={(value) =>
                  handleEducationFields(value, index)
                }
              >
                {monthNames.map((value, index) => (
                  <option value={value} key={index}>
                    {value}
                  </option>
                ))}
              </select>
              <select
                className="select"
                style={{ marginLeft: 20 }}
                name="end_date"
                value={data.end_date}
                onChange={(value) =>
                  handleEducationFields(value, index)
                }
              >
                {years.map((value, index) => (
                  <option value={value} key={index}>
                    {value}
                  </option>
                ))}
              </select>
            </Grid>
            {getFieldErrorMessage(edukimi_start_date,index) && <span style={{color:"red",margin:10}}>{getFieldErrorMessage(edukimi_start_date,index)}</span>}

          </Grid>
          <Grid container>
            <InputLabel
              id="demo-simple-select-label"
              style={{ marginTop: 10 }}
            >
              Pershkrimi
            </InputLabel>
            <Grid item md={12}>
              <textarea
                name="description"
                value={data.description}
                onChange={(value) =>
                  handleEducationFields(value, index)
                }
                id="outlined-basic"
                className="textarea-description"
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            {index !== 0 && (
              <IconButton
                aria-label="delete"
                onClick={() => removeEducationDataFields(index)}
              >
                <DeleteIcon />
              </IconButton>
            )}
          </Grid>
        </div>
      ))}
    <button
      className="extra-info-btn"
      onClick={addEducationDataFields}
    >
      Shto Njohuri
    </button>
  </Grid>
  )
}
