import { IconContext } from 'react-icons';
import {FaTwitter, FaGithub} from 'react-icons/fa';
import {SiSoundcloud} from 'react-icons/si';

export const Contact = () => {
    return (
      <section id="contact" className="py-24 px-4 bg-main text-white">
        <h2 className="text-5xl text-center font-semibold">contact</h2>
        <div className="flex mt-12 justify-center">
          <ul className="flex">
            <IconContext.Provider value={{ size: '50px' }}>
            <li className="mx-2 coursol-pointer"><a href="" target="_blank"><FaTwitter /></a></li>
            <li className="mx-2 coursol-pointer"><a href="https://github.com/chanhoku" target="_blank"><FaGithub /></a></li>
            <li className="mx-2 coursol-pointer"><a href="https://soundcloud.com/hokutys-1" target="_blank"><SiSoundcloud /></a></li>
            </IconContext.Provider>
          </ul>
        </div>
      </section>
    );
  };
  