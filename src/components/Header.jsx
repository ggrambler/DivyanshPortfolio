import { useEffect, useState } from "react";
import Home from "../assets/home.png";
import Web from "../assets/web.png"

export function Header() {
  const name = "Divyansh_Bhardwaj         :)";
  const name2 = "Divyansh Bhardwaj";

  const [nameSubstr, setNameSubstr] = useState(0);
  const [increasing, setIncreasing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setNameSubstr((prev) => {
        if (increasing) {
          if (prev < name.length) {
            return prev + 1;
          } else {
            setIncreasing(false);
            return prev; 
          }
        } else {
          if (prev > 8) {
            return prev - 1;
          } else {
            setIncreasing(true); 
            return prev; 
          }
        }
      });
    }, 1000);

    return () => clearInterval(interval); 
  }, [increasing]); 
  return (
    <>
      <div className="headerbase">
        <div className="nn">
          {name2}
        </div>
        <div className="headerleft">
          <img src={Home} alt="home" className="homeicon" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}/>
          <div className="headername">{name.substring(0, nameSubstr)}<div className="blink">|</div></div>
        </div>
        <div className="headerright">
          
          <div className="headeritem" onClick={()=>{window.open("https://leetcode.com/u/divyansh02032003/","_blank")}}>Leetcode</div>
          <div className="headeritem" onClick={()=>{window.open("https://github.com/ggrambler","_blank")}}>Github</div>
          <div className="headeritem" onClick={() => window.open("https://wa.me/+916205795464", "_blank")}>Contact</div>
          <div className="headeritem" onClick={() => window.open("https://drive.google.com/file/d/1gr6LjxoQ8xfsqPQqmx0ij2X7CSrKTC90/view?usp=drive_link", "_blank")}>
            <img src={Web} alt="Dark/Light" />
          </div>
        </div>
      </div>
    </>
  );
}
