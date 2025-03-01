import {useState} from 'react'
import './Project.css'
import AiImg from './projectsSS/aichat.png'
import Libmg from './projectsSS/libmg.png'

export function Projects(){

    const [projNum,setprojNum] = useState(0)

    const renderproj = ()=>{
        switch(projNum){
            case 0:
                return <AIRAG/>;
            case 1:
                return <LIBMG/>;
            case 2:
                return <SIH2023/>;
            case 3:
                return <CHESSEN/>;
            default:
                return <div>Select a project</div>;
        }
    }

    return (
        <>
        <div className="projbase">
        <div className="projname">
            Projects
        </div>
        <div className="projcont">
            <div className="projleft">
                <div className="projtitle" onClick={()=>setprojNum(0)}>
                    Ai-RAG ChatBot
                    <div className="descproj">
                        Next.js, Google CLoud and Llama-3 used to create your personal RAG.
                    </div>
                </div>
                <div className="projtitle" onClick={()=>setprojNum(1)}>
                    Library Manager
                    <div className="descproj">
                    Implemented a WhatsApp-based system using Twilio for library interactions
                    </div>
                </div>
                <div className="projtitle" onClick={()=>setprojNum(2)}>
                    SIH 2023
                    <div className="descproj">
                    Super Resolution Hazard Map for Lunar Lander Navigation.
                    </div>
                </div>
                <div className="projtitle" onClick={()=>setprojNum(3)}>
                    Chess Engine
                    <div className="descproj">
                        Based on the data from <i>Lichess</i> and trained using PyTorch.
                        Model hosted online at "↗️Divchess"
                    </div>
                </div>
            </div>
            <div className="projright">
                {renderproj()}
            </div>
        </div>

        </div>
        </>
    )
}

const LIBMG = ()=>{
    return (
      <div className="project-container">
        <div className="imgprojcont">
        <img
          src={Libmg}
          alt="AI-RAG ChatBot"
          className="project-image"
          />
          </div>
        <div className="projtextin">
          Library Manager Online
        </div>
        <div className="project-links">
          <a href="https://github.com/VibhorSaxena2302/LibraryManager" target="_blank" rel="noopener noreferrer">
            GitHub Repo 
          </a>
          <div
            className="visit-site"
            onClick={() => window.open("https://github.com/VibhorSaxena2302/LibraryManager", "_blank")}
          >
            Visit Site
          </div>
        </div>
      </div>
    );
  };

  const SIH2023 = ()=>{
    return (
      <div className="project-container">
        <div className="imgprojcont">

        <img
          src={Libmg}
          alt="AI-RAG ChatBot"
          className="project-image"
          />
        </div>
        <div className="projtextin">
          SIH-2023 Project on using Super Resolution techniques to create a Hazard Map for Lunar Lander Navigation.
        </div>
        <div className="project-links">
          <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
            GitHub Repo 
          </a>
          <div
            className="visit-site"
            onClick={() => window.open("https://your-hosted-site.com", "_blank")}
          >
            Visit Site
          </div>
        </div>
      </div>
    );
  };

  const CHESSEN = ()=>{
    return (
      <div className="project-container">
        <div className="imgprojcont">

        <img
          src={Libmg}
          alt="AI-RAG ChatBot"
          className="project-image"
          />
          </div>
        <div className="projtextin">
          Self Trained Chess Engine: Elo- about <i>1500</i>
        </div>
        <div className="project-links">
          <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
            GitHub Repo 
          </a>
          <div
            className="visit-site"
            onClick={() => window.open("https://your-hosted-site.com", "_blank")}
          >
            Visit Site
          </div>
        </div>
      </div>
    );
  };

  const AIRAG = ()=>{
    return (
      <div className="project-container">
        <div className="imgprojcont">

        <img
          src={AiImg} 
          alt="AI-RAG ChatBot"
          className="project-image"
          />
          </div>
        <div className="projtextin">
          Ai-RAG chat bot for your PDFs.
        </div>
        <div className="project-links">
          <a href="https://github.com/VibhorSaxena2302/FetchAI" target="_blank" rel="noopener noreferrer">
            GitHub Repo 
          </a>
          <div
            className="visit-site"
            onClick={() => window.open("https://uchat-ivory.vercel.app/", "_blank")}
          >
            Visit Site
          </div>
        </div>
      </div>
    );
  };
  