import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import {
    cvDataState,
    addEducationFields,
    handleChangeEducationFields,
    removeEducationFields
} from "../../redux/slices/createCv";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import InputLabel from "@material-ui/core/InputLabel";
import { years,monthNames } from 'utils/PdfGenerator/generateDate';

export default function EdukimiFormFields() {
    const state = useSelector(cvDataState);
    const dispatch = useDispatch()

    const { edukimi } = state;
    const addEducationDataFields =() =>{
        dispatch(addEducationFields())
      }
      const handleEducationFields = (e,index) =>{
        const {name,value}= e.target;
        dispatch(handleChangeEducationFields({index,name,value}))
      }
      const removeEducationDataFields = (index) =>{
        dispatch(removeEducationFields(index))
      }
   
  return (
    <Grid container>
    {edukimi &&
      edukimi.map((data, index) => (
        <div key={index} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                id="outlined-basic"
                label="Diploma/Titulli i kualifikimit  "
                variant="outlined"
                name="diploma"
                value={data.diploma}
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
                label="Universiteti"
                variant="outlined"
                name="universiteti"
                value={data.universiteti}
                onChange={(value) =>
                  handleEducationFields(value, index)
                }
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
                name="educationQyteti"
                value={data.educationQyteti}
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
                name="educationMuajiFillimit"
                value={data.educationMuajiFillimit}
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
                name="educationDataeFillimit"
                value={data.educationDataeFillimit}
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
                name="educationMuajiMbarimit"
                value={data.educationMuajiMbarimit}
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
                name="educationDataeMbarimit"
                value={data.educationDataeMbarimit}
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
                name="educationPershkrimi"
                value={data.educationPershkrimi}
                onChange={(value) =>
                  handleEducationFields(value, index)
                }
                id="outlined-basic"
                className="textarea-description"
              />
            </Grid>
          </Grid>
          <Grid container justify="center">
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
