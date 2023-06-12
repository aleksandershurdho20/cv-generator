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

export default function EdukimiFormFields() {
  const state = useSelector((state) => state.userSlice.userInfo.userProfileId);
  
  const { start_date,
    diploma,
    university,
     } = useSelector((state) => state.cvFieldsError);
    const dispatch = useDispatch()

    const { education } = state;
    const addEducationDataFields =() =>{
        dispatch(addEducationFields())
      }
      const handleEducationFields = (e,index) =>{
        const {name,value}= e.target;
        dispatch(handleChangeEducationFields({index,name,value}))
        dispatch(resetFormFields({key:name}))
      }
      const removeEducationDataFields = (index) =>{
        dispatch(removeEducationFields(index))
      }
   console.log(university,'university')
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
                error={diploma ? true : false}
                helperText={diploma}
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
                error={university ? true : false}
                helperText={university}
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
