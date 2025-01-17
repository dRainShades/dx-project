import { useNavigate } from "react-router-dom";
import aru from "./img/profil/aru.jpg";
import adhan from "./img/profil/adhann.png";
import wisnu from "./img/profil/wisnu.jpeg";
import tubagus from "./img/profil/tubagus.jpg";
import dian from "./img/profil/Dian.jpg";
import beni from "./img/profil/beni.jpg";
import krisna from "./img/profil/krisna.jpg";
import albi from "./img/profil/albi.jpg";
import agung from "./img/profil/agung.jpg";

const OurTeam = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  return (
    <>
      <div className="xl:px-[400px]">
        <h1 className="text-center font-bold text-2xl mt-5">Our Team</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-0 items-center  justify-center">
          <div className="mt-10 bg-bg px-3 py-5 w-44 rounded-lg shadow-xl text-text mx-auto">
            <img alt="profil-1" src={aru} className="w-[150px] mx-auto h-[150px] rounded-lg" />
            <p className="text-center pt-1 font-bold">Aru Chevy Rasyid</p>
            <div className="flex justify-center">
              <a className="bg-text font-semibold px-3 py-2 mt-2 rounded-md text-bg shadow-2xl hover:text-white" href="https://hy-grou.github.io/" target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </div>
          </div>

          <div className="mt-10 bg-bg px-3 py-5 rounded-lg w-44 shadow-xl text-text mx-auto ">
            <img alt="profil-2" src={agung} className="w-[150px] h-[150px] rounded-lg mx-auto" />
            <p className="text-center pt-1 font-bold">Agung Saputra</p>
            <div className="flex justify-center">
              <a className="bg-text px-3 font-semibold py-2 mt-2 rounded-md text-bg shadow-2xl hover:text-white" href="https://difhaels.github.io/" target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </div>
          </div>

          <div className="mt-10 bg-bg px-3 py-5 rounded-lg w-44 shadow-xl text-text mx-auto ">
            <img alt="profil-3" src={albi} className="w-[150px] h-[150px] rounded-lg mx-auto" />
            <p className="text-center pt-1 font-bold">Salsabil Albi F</p>
            <div className="flex justify-center">
              <a className="bg-text font-semibold px-3 py-2 mt-2 rounded-md text-bg shadow-2xl hover:text-white" href="https://www.instagram.com/salfyura/" target="_blank" rel="noreferrer">
                Social Media
              </a>
            </div>
          </div>

          <div className="mt-10 bg-bg px-3 py-5 rounded-lg w-44 shadow-xl text-text mx-auto ">
            <img alt="profil-4" src={adhan} className="w-[150px] h-[150px] rounded-lg mx-auto" />
            <p className="text-center pt-1 font-bold">Chandra HR</p>
            <div className="flex justify-center">
              <a className="bg-text font-semibold px-3 py-2 mt-2 rounded-md text-bg shadow-2xl hover:text-white" href="https://www.youtube.com/@dhanzo2910/featured/" target="_blank" rel="noreferrer">
                Social Media
              </a>
            </div>
          </div>

          <div className="mt-10 bg-bg px-3 py-5 rounded-lg w-44 shadow-xl text-text mx-auto ">
            <img alt="profil-5" src={wisnu} className="w-[150px] h-[150px] rounded-lg mx-auto" />
            <p className="text-center pt-1 font-bold">Wisnu Hartono</p>
            <div className="flex justify-center">
              <a className="bg-text font-semibold px-3 py-2 mt-2 rounded-md text-bg shadow-2xl hover:text-white" href="https://Wsnuhrtno.github.io/Portfolio-Tailwind" target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </div>
          </div>

          <div className="mt-10 bg-bg px-3 py-5 rounded-lg w-44 shadow-xl text-text mx-auto ">
            <img alt="profil-6" src={beni} className="w-[150px] h-[150px] rounded-lg mx-auto" />
            <p className="text-center pt-1 font-bold">Beni Maryana</p>
            <div className="flex justify-center">
              <a className="bg-text font-semibold px-3 py-2 mt-2 rounded-md text-bg shadow-2xl hover:text-white" href="https://www.instagram.com/beni_mrn/" target="_blank" rel="noreferrer">
                Social Media
              </a>
            </div>
          </div>

          <div className="mt-10 bg-bg px-3 py-5 rounded-lg w-44 shadow-xl text-text mx-auto ">
            <img alt="profil-7" src={tubagus} className="w-[150px] h-[150px] rounded-lg mx-auto" />
            <p className="text-center pt-1 font-bold">Tubagus Habibi D.K</p>
            <div className="flex justify-center">
              <a className="bg-text font-semibold px-3 py-2 mt-2 rounded-md text-bg shadow-2xl hover:text-white" href="https://www.instagram.com/t_iwan07/" target="_blank" rel="noreferrer">
                Social Media
              </a>
            </div>
          </div>

          <div className="mt-10 bg-bg px-3 py-5 rounded-lg w-44 shadow-xl text-text mx-auto">
            <img alt="profil-8" src={krisna} className="w-[150px] h-[150px] rounded-lg mx-auto" />
            <p className="text-center pt-1 font-bold">Krisna Setyo R</p>
            <div className="flex justify-center">
              <a className="bg-text font-semibold px-3 py-2 mt-2 rounded-md text-bg shadow-2xl hover:text-white" href="https://www.youtube.com/@svx555/" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </div>
          </div>

          <div className="mt-10 bg-bg px-3 py-5 rounded-lg w-44 shadow-xl text-text mx-auto col-span-2 sm:col-span-1">
            <img alt="profil-9" src={dian} className="w-[150px] h-[150px] rounded-lg mx-auto" />
            <p className="text-center pt-1 font-bold">Dian Rivanno</p>
            <div className="flex justify-center">
              <a className="bg-text font-semibold px-3 py-2 mt-2 rounded-md text-bg shadow-2xl hover:text-white" href="https://drainshades.github.io/dR_portfolio1/" target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center text-text m-14">
          <button onClick={() => navigate("/")} className="bg-bg px-4 font-bold py-2 mt-9 rounded-md hover:text-white ">
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};
export default OurTeam;
