import React from 'react'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub'
import AppleIcon from '@material-ui/icons/Apple'
import IconButton from "@material-ui/core/IconButton";
import '../styles/Footer.css'

const handleClick = (link) => {
    window.open(link);
};
function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <IconButton onClick={() => handleClick("https://www.linkedin.com/in/abd%C3%BC-samed-akg%C3%BCl-383906173/")}>
                    <LinkedinIcon />
                </IconButton>
                <IconButton onClick={() => handleClick("https://www.linkedin.com/in/abd%C3%BC-samed-akg%C3%BCl-383906173/")}>
                    <GithubIcon />
                </IconButton>
                <IconButton onClick={() => handleClick("https://www.linkedin.com/in/abd%C3%BC-samed-akg%C3%BCl-383906173/")}>
                    <AppleIcon />
                </IconButton>
            </div>
            <p>&copy; 2022 abdusamedakgul.com</p>
        </div>
    )
}

export default Footer