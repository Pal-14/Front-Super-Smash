import "../../assets/smashbros-2.mp4";
import './HomePage.css';

export default function HomePage() {
  return (
      <div className="homePageMain">
    <div className="videoBox">
      <video
        src="https://anima-uploads.s3.amazonaws.com/projects/61640aa7ec40be1e8d8b8b26/files/smashbros-2.mp4"
        anima-src="https://anima-uploads.s3.amazonaws.com/projects/61640aa7ec40be1e8d8b8b26/files/smashbros-2.mp4"
        loop=""
        autoplay="autoplay"
        playsinline=""
        muted="muted"
        top="50%"
        left="50%"
        
      ></video>
    </div>
    </div>
  );
}
