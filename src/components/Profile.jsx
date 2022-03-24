import profileicon from "../images/profileicon.jpg";
export const Profile = () => {
    return(
        <section id="profile" className="py-24 px-4 bg-white text-main">
            <h2 className="text-5xl text-center font-semibold">Profile</h2>
            <div className="flex justify-center justify-items-center items-center mt-12 flex-col md:flex-row">
                <div>
                    <p className="text-3xl font-medium">Hi, I'm Hokuto Nakayama.</p>
                    <p className="mt-2">I'm a WevDeploper and WebDirector!<br />
                        The details in my profile is as follows↓<br />
                    Age: 29<br />
                    DoB: Novenber, 25, 1992<br />
                    hobby: Youtube,  League of Legends, compose Music</p>
                </div>
                <div className="mt-4 md:w-52 md:ml-12 border-main border-4 shadow drop-shadow"><img src={profileicon} alt="profileicon"/></div>
            </div>
        </section>
    );
};