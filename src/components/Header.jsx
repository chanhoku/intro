export const Header = () => {
  return (
    <header className="bg-main">
        <ul className="h-14 flex items-center text-white justify-center shadow drop-shadow">
            <li className="w-28 text-center"><a href="#profile">Profile</a></li>
            <li className="w-28 text-center"><a href="#skills">Skills</a></li>
            <li className="w-28 text-center"><a href="#gallery">Gallery</a></li>
            <li className="w-28 text-center"><a href="#contact">Contact</a></li>
        </ul>
    </header>
  );
};
