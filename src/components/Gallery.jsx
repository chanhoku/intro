import webImage01 from "../images/gallery_web_01.png";
import musicImage01 from "../images/gallery_music_01.png";
import musicImage02 from "../images/gallery_music_02.jpg";
import musicImage03 from "../images/gallery_music_03.jpg";
import musicImage04 from "../images/gallery_music_04.jpg";

export const Gallery = () => {
  const gallery = [
    {type:'website', img:webImage01, name:'HALUKA様ウェブ', link:''},
    {type:'music', img:musicImage01, name:'同人CD：眠覚醒少女', link:'https://soundcloud.com/hokutys-1/arient-remix-demo-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'},
    {type:'music', img:musicImage02, name:'同人CD：こうまかん！', link:'https://soundcloud.com/hokutys-1/pru1kdwpj0ai?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'},
    {type:'music', img:musicImage03, name:'同人CD：Over current', link:'https://soundcloud.com/hokutys-1/unuplifting-trance-remix-2016?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'},
    {type:'music', img:musicImage04, name:'同人CD：SPICY TUNES', link:'https://soundcloud.com/hokutys-1/daily3?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'},
  ];
    return(
        <section id="gallery" className="py-24 px-4 bg-white text-main">
        <h2 className="text-5xl text-center font-semibold">Gallery</h2>
        <div className="mt-12 flex justify-center">
          <ul className="flex flex-col md:flex-row md:flex-wrap text-main w-7/12 md:w-full md:max-w-3xl justify-center">
            { gallery.map((gallerys) =>
              <li className="mt-4 md:mx-2 shadow-xl drop-shadow md:w-1/4 relative cursor-pointer hover:scale-110">
                <a href={gallerys.link} target="_blank" rel="noreferrer">
                  <p className="bg-main border border-white text-white absolute top-0 p-1 text-xs">{gallerys.type}</p>
                  <div className="object-cover"><img src={gallerys.img} alt={gallerys.name} /></div>
                  <p className="text-center p-1 text-sm">{gallerys.name}</p>
                </a>
              </li>
            )}
          </ul>
        </div>
      </section>
    );
};