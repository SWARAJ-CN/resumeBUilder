import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const title = "An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF. "
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor:"black"}}>
          <Toolbar>
            <Typography onClick={()=>navigate('/')} variant="h6" component="div" sx={{ flexGrow: 1 }} style={{cursor:"pointer"}}>
              Resume Builder.ai
            </Typography>
            <Tooltip title={title} sx={{cursor:'pointer'}} style={{cursor:"pointer"}}> ABOUT US </Tooltip>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
