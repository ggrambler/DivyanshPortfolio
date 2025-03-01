import { useState } from 'react';
import './Skills.css';

import Cpp from '../skillsimages/cpp.png'
import Pyp from '../skillsimages/python.png'
import Jav from '../skillsimages/java.png'
import Jsc from '../skillsimages/jsc.png'
import Sqi from '../skillsimages/sql.png'
import Htm from '../skillsimages/html.png'
import Nod from '../skillsimages/node.png'
import Rea from '../skillsimages/react.png'
import Git from '../skillsimages/git.png'
import MyS from '../skillsimages/mysql.png'
import AWS from '../skillsimages/aws.png'
import Psq from '../skillsimages/postsql.png'
import Nlp from '../skillsimages/nlp.png'
import Gen from '../skillsimages/genai.png'
import Dep from '../skillsimages/deep.jpeg'
import Dsa from '../skillsimages/dsa.jpeg'
import Oop from '../skillsimages/oop.png'



export function Skills() {
    let SkillsList = [
        "C/C++", "Python", "Java", "JavaScript", "SQL", "HTML",
        "NodeJS", "React/NextJS", "Git", "MySQL", "AWS", 
        "PostgresSQL", "NLP", "Gen AI", "Deep Learning", "DSA", "OOPS"
    ];

    let baseimgs = [
        Cpp, Pyp, Jav, Jsc,
        Sqi, Htm, Nod, Rea,
        Git, MyS, AWS, Psq,
        Nlp, Gen, Dep, Dsa, Oop
    ];

    let description = ["⭐⭐⭐","⭐⭐⭐⭐⭐","⭐⭐","⭐⭐⭐⭐","⭐⭐⭐⭐","⭐⭐⭐⭐⭐","⭐⭐⭐⭐","⭐⭐⭐","⭐⭐⭐","⭐⭐⭐⭐","⭐⭐","⭐⭐","⭐⭐","⭐⭐⭐","⭐⭐⭐⭐","⭐⭐⭐⭐","⭐⭐⭐⭐"]

    return (
        <>
            <div className="skillbase">
            <div className="sktext">
                    LANGs / SKILLS
                </div>
                <div className="langcarosal">
                
                    {SkillsList.map((item, index) => {
                        return (
                            <div className="itemcard" key={index}>
                                <div className="imgcard">
                                    <img src={baseimgs[index]} alt={item} className="skill-icon" />
                                </div>
                                <div className="imgtext">
                                    <div className="skillname">
                                    {item}
                                    </div>
                                    <div className="descimg">
                                        {description[index]}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="skillcarosal"></div>
            </div>
        </>
    );
}
