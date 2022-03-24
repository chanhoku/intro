import profileicon from "../images/profileicon.jpg";
export const Profile = () => {
    return(
        <section id="profile" className="py-24 px-4 bg-main text-white">
            <h2 className="text-5xl text-center font-semibold">profile</h2>
            <div className="flex justify-center justify-items-center items-center mt-12 flex-col md:flex-row">
                <div>
                    <p className="text-3xl font-semibold">Hi, i'm Hokuto Nakayama.</p>
                    <p className="text-xl font-semibold">I'm a WevDeploper and WebDirector!<br />
                        The details in my profile is as follows↓<br /> </p>
                    <p>Age: 29<br />
                    DoB: Novenber, 25, 1992<br />
                    hobby: Youtube,  League of Legends, compose Music</p>
                </div>
                <div className="mt-4 md:w-44 md:ml-12 border-4"><img src={profileicon} alt="profileicon"/></div>
            </div>
        </section>
    );
};