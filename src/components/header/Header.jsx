import "./header.css";
import video from '../../Videos/vid1.mp4';
import { Button, Typography } from '@mui/material'
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate()
  return (
    <div className="header" style={{position: 'relative'}}>
      <div>
        <div style={{position: 'absolute', width: '100%', top: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Button onClick={() => navigate('/write')} style={{zIndex: 9}} variant="contained">Write</Button>
          <h3 style={{color: 'white', marginTop: '20px'}}>"Experiences are the ink in the pen of our life's story."</h3>
        </div>
      </div>      
      <video className="headerImg" src={video} muted autoPlay loop type="vid1/mp4"> </video>
    </div>
  );
}
