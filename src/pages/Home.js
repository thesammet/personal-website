import React from 'react'
import { LinkedIn, Email, GitHub } from '@material-ui/icons'
import '../styles/Home.css'
function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hi There, I'm Samed Akgul</h2>
                <div className='prompt'>
                    <p>A software developer with a passion for learning and building.</p>
                    <LinkedIn />
                    <Email />
                    <GitHub />
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Frontend</h2>
                        <span>
                            React Native, Flutter, Unity
                        </span>

                    </li>
                    <li className='item'>
                        <h2>Backend</h2>
                        <span>
                            Nodejs, Django Rest Framework
                        </span>
                    </li>
                    <li className='item'>
                        <h2>Languages</h2>
                        <span>
                            JavaScript, Dart, Python
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home