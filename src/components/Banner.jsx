import Vid from '../assets/banvid.mp4'
import './Banner.css'
import GitImg from "../assets/Githubimg.png"

export default function Banner() {
    return (
        <div className='bannerbase'>
        <div className="videocont" >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", 
          }}
        >
          <source src={Vid} type="video/mp4" />
        </video>
      </div>
    
    <div className="raincont">
<div className="textbanner">
          <img src={GitImg} alt="Github Img" 
          onClick={()=>{window.open("https://github.com/ggrambler","_blank")}}/>
</div>
    </div>

      </div>
    );
  }