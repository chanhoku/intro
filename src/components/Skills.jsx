import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
export const Skills = () => {
    const [data, setData] = useState(null);
    useEffect(()=> { axios.get('https://api.github.com/users/chanhoku/repos').then((respons)=>console.log(respons))},[]);
    return (
      <div id="skills">
        <div className="container">
          <div className="heading">
            <h2>Skills</h2>
          </div>
          <div className="skills-container">
          </div>
        </div>
      </div>
    );
  };
  