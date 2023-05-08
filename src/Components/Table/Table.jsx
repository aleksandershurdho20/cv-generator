import React from "react";
import {
  Container,
  Box,
  Typography,
  Table as TableComponent,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  
} from "@mui/material";
import { Fragment } from "react";
import { TransitionGroup } from 'react-transition-group';

export default function Table({ data, actions, columns }) {
  return (
    <TableContainer
      sx={{
        background: "#FFF",
        borderRadius: "10px",
        marginTop: "15px",
        height: "100%",
      }}
    >
      <TableComponent>
        <TableHead>
          <TableRow>
            {columns.map((column, i) => (
              <TableCell key={i}>{column.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TransitionGroup
          transitionName="fade"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={300}
          transitionAppearTimeout={1000}
          transitionAppear={true}
          component={null}
        
        >

            <TableBody>
              {data.length > 0
                ? data.map((el) => {
                    return (
                      <TableRow key={el._id}>
                        {columns.map((column, index) => (
                          <TableCell key={index}>
                            {column.key === "actions"
                              ? actions && (
                                  <>
                                    {actions.map((component, index) => (
                                      <Fragment key={index}>
                                        {component.render(el)}
                                      </Fragment>
                                    ))}
                                  </>
                                )
                              : el[column.key]}
                          </TableCell>
                        ))}
                      </TableRow>
                    );
                  })
                : "Nuk ka te dhena!"}
              {/* {data.length > 0
              ? data.map((job) => (
                
                  <TableRow key={job._id}>
                    <TableCell>{job._id}</TableCell>
                    <TableCell>{job.title}</TableCell>
                    <TableCell>{job.jobType}</TableCell>
                    <TableCell>{job.location}</TableCell>
                    <TableCell>{job.createdAt}</TableCell>

                    {
                      actions && <>
                    
                    <TableCell>
                        {actions.map((component,index) => <Fragment key={index}>
                            {component.render(el)}
                        </Fragment>)}
                    </TableCell>
                    </> 
                  }
                
                  </TableRow>
                ))
              : "Nuk ka te dhena!"} */}
            </TableBody>
        </TransitionGroup>
      </TableComponent>
    </TableContainer>
  );
}
