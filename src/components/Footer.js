import React from 'react'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub'
import AppleIcon from '@material-ui/icons/Apple'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <LinkedinIcon />
                <GithubIcon />
                <AppleIcon />
            </div>
            <p>&copy; 2022 abdusamedakgul.com</p>
        </div>
    )
}

export default Footer