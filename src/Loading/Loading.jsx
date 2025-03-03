import { useEffect } from 'react';
import './Loading.css';
const Loading = () => {
  return (
    <div className="card" style={{ '--bg-color': '#060606' }}>
      <div className="loader">
        <p>I'm Sachin</p>
        <div className="words">
          <span className="word"></span>
          <span className="word">BCA Student</span>
          <span className="word">Web Developer</span>
          <span className="word">Figma Designer</span>
          <span className="word">Web Designer</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;