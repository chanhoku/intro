import profileicon from "../images/profileicon.jpg";

export const Gallery = () => {
  const gallery = [
    {type:'website', img:profileicon, name:'HALUKA様ウェブ'},
    {type:'website', img:profileicon, name:'HALUKA様ウェブ'},
    {type:'website', img:profileicon, name:'HALUKA様ウェブ'},
    {type:'website', img:profileicon, name:'HALUKA様ウェブ'},
    {type:'website', img:profileicon, name:'HALUKA様ウェブ'},
    {type:'website', img:profileicon, name:'HALUKA様ウェブ'}
  ];
    return(
        <section id="gallery" className="py-24 px-4 bg-white text-main">
        <h2 className="text-5xl text-center font-semibold">Gallery</h2>
        <div className="mt-12 flex justify-center">
          <ul className="flex flex-col md:flex-row md:flex-wrap text-main w-7/12 md:w-full md:max-w-3xl justify-center">
            { gallery.map((gallerys) => 
              <li className="mt-4 md:mx-2 shadow-xl drop-shadow md:w-1/4 relative cursor-pointer hover:scale-110">
                <p className="bg-main text-white absolute top-0 p-1 text-xs">{gallerys.type}</p>
                <img src={gallerys.img} alt={gallerys.name} />
                <p className="text-center p-1">{gallerys.name}</p>
              </li>
            )}
          </ul>
        </div>
      </section>
    );
};