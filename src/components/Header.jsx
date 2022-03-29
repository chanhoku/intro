import { Link } from 'react-scroll';
export const Header = () => {
  return (
    <header className="bg-main fixed w-full border-b border-white text-sm z-10">
        <ul className="h-14 flex items-center text-white justify-center shadow drop-shadow">
            <li className="w-28 text-center cursor-pointer hover:opacity-40"><Link to="profile" smooth={true}>Profile</Link></li>
            <li className="w-28 text-center cursor-pointer hover:opacity-40"><Link to="skills" smooth={true}>Skills</Link></li>
            <li className="w-28 text-center cursor-pointer hover:opacity-40"><Link to="gallery" smooth={true}>Gallery</Link></li>
            <li className="w-28 text-center cursor-pointer hover:opacity-40"><Link to="contact" smooth={true}>Contact</Link></li>
        </ul>
    </header>
  );
};