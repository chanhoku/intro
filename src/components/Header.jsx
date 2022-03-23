// 画像をそれぞれimportします。パスに注意してください。
import CoverImage from '../images/cover-image.jpg';
import ProfileImage from '../images/profile-image.png';
import {FaTwitter, FaGithub} from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="bg-black">
        <ul className="h-14 flex items-center shadow-sm text-white justify-center">
            <li className="w-28 text-center">profile</li>
            <li className="w-28 text-center">skills</li>
            <li className="w-28 text-center">contact</li>
            <li className="w-28 text-center flex justify-center">
                <FaTwitter color="white" size="2rem" />
            </li>
            <li className="w-32 text-center flex justify-center">
                <FaGithub color="white" size="2rem" />
            </li>
        </ul>
    </header>
  );
};
