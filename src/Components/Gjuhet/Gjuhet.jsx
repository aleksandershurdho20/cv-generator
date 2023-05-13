import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PublicIcon from '@mui/icons-material/Public';
import DeleteIcon from '@mui/icons-material/Delete';
import "./Gjuhet.scss";
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { useDispatch, useSelector } from "react-redux";
import {
    cvDataState,
    addMoreLangauges,
    handleChangeLanguageField,
    removeLanguageFields,
} from "../../redux/slices/createCv";


export default function Gjuhet() {
    const state = useSelector(cvDataState);

    const { languages } = state;
    const theme = useTheme()

    const dispatch = useDispatch();
    const addMoreLanguages = () => {
        dispatch(addMoreLangauges());
    };
    const deleteAddedLanguages = (index) => {
        dispatch(removeLanguageFields(index));
    };

    const handleLangaugeFields = (e, index) => {
        const { name, value } = e.target;
        dispatch(handleChangeLanguageField({ index, name, value }));
    };
    return (
        <Box
        flexGrow="1"
        
        >
            <Accordion style={{ marginTop: 15 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <PublicIcon />
                    <span style={{ paddingLeft: 10 }}>Njohuri Gjuhesore</span>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container>
                        <Grid container spacing={2}>
                            {languages.length > 0 &&
                                languages.map((data, index) => (
                                    <>
                                        <Grid item md={6} sm={12} xs={12}>
                                            <TextField
                                                id="outlined-basic"
                                                label="Gjuha  "
                                                variant="outlined"
                                                value={data.title}
                                                name="title"
                                                onChange={(value) =>
                                                    handleLangaugeFields(
                                                        value,
                                                        index
                                                    )
                                                }
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item md={6} sm={12} xs={12}>
                                            <select
                                                className="select"
                                                style={{
                                                    marginTop: 0,
                                                    width: "60%",
                                                }}
                                                name="level"
                                                value={data.level}
                                                onChange={(value) =>
                                                    handleLangaugeFields(
                                                        value,
                                                        index
                                                    )
                                                }
                                            >
                                                <option>Shum mire</option>
                                                <option>Mire</option>
                                                <option>Keq</option>
                                            </select>

                                            {index !== 0 && (
                                                <IconButton
                                                    aria-label="delete"
                                                    onClick={(index) =>
                                                        deleteAddedLanguages(
                                                            index
                                                        )
                                                    }
                                                    sx={{
                                                        marginLeft: theme.spacing(1),
                                                        background: "rgba(0, 0, 0, 0.04)",
                                                    }}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            )}
                                        </Grid>
                                    </>
                                ))}
                            <button
                                className="extra-info-btn"
                                onClick={addMoreLanguages}
                            >
                                Shto Njohuri
                            </button>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>{" "}
        </Box>
    );
}
