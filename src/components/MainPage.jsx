import {useState} from 'react';
import './mainpage.css';
import DivyPP from '../assets/DivyanshPP.jpg'
import YT from '../icons/youtube.svg'
import LI from '../icons/linkedin.svg'
import Xx from '../icons/x.svg'
import IN from '../icons/instagram.svg'

export function MP(){

    return (
        <>
        <div className="mainbase">
            <div className="mainb">
            <div className="mainleft">
                <div className="ppphoto">
                    <img src={DivyPP} alt="DivyPP" className='Dpp'/>
                </div>
                <div className="namediv">
                    <div className="maintext">
                    <div className="mtext">Divyansh Bhardwaj</div>
                    <div className="mtext">(he/him)</div>
                    <div className="mtext">Software Developer</div>
                    </div>
                    <div className="condiv"
                     onClick={() => window.open("https://wa.me/+916205795464", "_blank")}>
                        Contact Me
                    </div>

                    <div className="mainSocials">
                        <div className="msicons"
                        onClick={()=>{window.open("https://www.youtube.com/@divyanshbhardwaj5740","_blank")}}
                        >
                        <img src={YT} alt="YouTube" />
                        </div>
                        <div className="msicons"
                        onClick={()=>{window.open("https://www.linkedin.com/in/divyansh-bhardwaj-9a30591bb/","_blank")}}
                        >
                        <img src={LI} alt="LinkedIn" />
                        </div>
                        <div className="msicons"
                        onClick={()=>{window.open("https://x.com/DivyanshDevFun","_blank")}}
                        >
                        <img src={Xx} alt="X" />
                        </div>
                        <div className="msicons"
                        onClick={()=>{window.open("https://www.instagram.com/justsomeoneasdb/","_blank")}}
                        >
                        <img src={IN} alt="Instagram" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainright">
                <div className="rightcont">
                    <div className="aboutme">
                        About Me
                    </div>
                    <div className="introright">
                    I am a tech-savvy and passionate developer with a Bachelor's degree in Software Development, actively seeking opportunities to apply my skills. My expertise spans Web Development, Game Development, and AI, areas that fuel my creativity and drive for innovation.I am committed to continuous learning, always exploring new technologies and refining my craft. I have attended multiple seminars and boot camps on Software Development, expanding my knowledge and staying ahead in the ever-evolving tech landscape. With a deep passion for problem-solving and building impactful solutions, I am eager to contribute to a dynamic team and push the boundaries of technology!
                    </div>
                    <div className="resumebut"
                    onClick={() => window.open("https://drive.google.com/file/d/1gr6LjxoQ8xfsqPQqmx0ij2X7CSrKTC90/view?usp=drive_link", "_blank")}>
                        Resume
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}



