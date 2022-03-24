import { IconContext } from 'react-icons'
import {FaHtml5, FaCss3Alt, FaJs, FaPhotoVideo, FaFigma, FaGitAlt, FaTools} from 'react-icons/fa';

export const Skills = () => {
  const skillData = [
    { name:'html', detail:'ejs, pug', icon:<FaHtml5 /> },
    { name:'css', detail:'sass, stylus, Tailwind css', icon:<FaCss3Alt /> },
    { name:'javascript', detail:'es6, jquery, node.js, react', icon:<FaJs /> },
    { name:'Photoshop', detail:'', icon:<FaPhotoVideo /> },
    { name:'Figma', detail:'', icon:<FaFigma /> },
    { name:'Git', detail:'sourcetree, github', icon:<FaGitAlt /> },
    { name:'other', detail:'python, excel(vba)...', icon:<FaTools /> },
  ];
    return (
      <section id="skills" className="py-24 px-4 bg-main text-white">
        <h2 className="text-5xl text-center font-semibold">Skills</h2>
        <div className="mt-12 flex justify-center">
          <ul className="flex flex-col md:flex-row md:flex-wrap text-main w-7/12 md:w-full md:max-w-3xl justify-center">
            { skillData.map((skills) => 
              <li className="mt-4 md:mx-2 bg-white shadow-xl drop-shadow p-4 md:w-1/4 h-52 flex justify-center flex-col text-center">
                <IconContext.Provider value={{ size: '50px' }}>
                  <div className='flex justify-center'>{skills.icon}</div>
                </IconContext.Provider>
                <p className="mt-4 font-medium">{skills.name}</p>
                <p className="mt-2 text-xs">{skills.detail}</p>
              </li> 
            )}
            <li className=""></li>
          </ul>
        </div>
      </section>
    );
};