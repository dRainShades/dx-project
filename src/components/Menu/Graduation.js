import { useNavigate } from "react-router-dom";

import graduation1 from "./img/graduation1.jpg";
import graduation2 from "./img/graduation2.jpg";
import graduation3 from "./img/graduation3.jpg";
import graduation4 from "./img/graduation4.jpg";

const Graduation = () => {
  const navigate = useNavigate();
  const storedUsername = localStorage.getItem("username");

  const paket = {
    nama: "Graduation",
    jenis: ["Reguler", "Eksklusif", "Member"],
    harga: ["499.000", "799.000", "749.000"]
  }

  function text (nama, jenis, harga){
    let pesan = `Checkout,%20${nama}%20Paket%20${jenis}%20Rp.${harga},-`;
    return pesan;
  }
  
  return (
    <>
      <div className="px py-10 bg-slate-100">
        <h1 className="font-bold text-2xl text-center pb-10">Graduation</h1>
        <div className="flex flex-wrap justify-center gap-7 sm:gap-14 pb-10">
          <img src={graduation1} alt="img-gallery" className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
          <img src={graduation2} alt="img-gallery" className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
          <img src={graduation3} alt="img-gallery" className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
          <img src={graduation4} alt="img-gallery" className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
        </div>
        <div>
          <h1 className="font-bold text-3xl text-center py-10">Paket penjualan</h1>
        </div>

        <div className="flex flex-wrap gap-6 justify-center  ">

          <div className=" text-center shadow-lg bg-[#F9F5F6] rounded-lg">
            <div className="bg-slate-400  rounded-t-xl py-6 px-32 text-white ">
              <h1 className="font-bold text-2xl mb-2">Graduation</h1>
              <p>Paket Reguler</p>
            </div>
            <div className="bg-[#F9F5F6] rounded-b-lg">
              <h1 className="pt-3">
                Rp.<span className="text-4xl">499</span>.000
              </h1>
              <p className="mt-4">45 Menit Pemrotetan</p>
              <div className="line-paket"></div>
              <p className="mt-4">Unlimitied photoshoot</p>
              <div className="line-paket"></div>
              <p className="mt-4">Maks. 30 orang (Charge 25.000/orang)</p>
              <div className="line-paket"></div>
              <p className="mt-4 ">1 Background </p>
              <div className="line-paket"></div>
              <p className="mt-4 pb-10">All file copy ke HP/Google Drive </p>
            </div>
            <a href={"http://wa.me/+62895337305533?text=" + text(paket.nama, paket.jenis[0], paket.harga[0])} target="_blank" rel="noreferrer">
              <button className="button-paket" >Book Now!!</button>
            </a>
            <p className="pb-5 text-text">Make ur Different Moment</p>
          </div>

          <div className=" text-center shadow-lg bg-[#F9F5F6] rounded-lg ">
            <div className="bg-slate-400  rounded-t-xl py-6 px-32 text-white ">
              <h1 className="font-bold text-2xl mb-2">Graduation</h1>
              <p>Paket Eksklusif</p>
            </div>
            <div className="bg-[#F9F5F6]  rounded-b-lg">
              <h1 className="pt-3">
                Rp.<span className="text-4xl">799</span>.000
              </h1>
              <p className="mt-4">1 Jam Pemrotetan</p>
              <div className="line-paket"></div>
              <p className="mt-4">Unlimitied photoshoot</p>
              <div className="line-paket"></div>
              <p className="mt-4">Maks. 35 orang (Charge 25.000/orang)</p>
              <div className="line-paket"></div>
              <p className="mt-4 ">2 Background </p>
              <div className="line-paket"></div>
              <p className="mt-4 pb-10">All file copy ke HP/Google Drive </p>
            </div>
            <a href={"http://wa.me/+62895337305533?text=" + text(paket.nama, paket.jenis[1], paket.harga[1])} target="_blank" rel="noreferrer">
              <button className="button-paket" >Book Now!!</button>
            </a>          
            <p className="pb-5 text-text">Make ur Different Moment</p>
          </div>

          {storedUsername !== "undefined" || undefined? 
            <div className=" text-center shadow-lg bg-[#F9F5F6] rounded-lg">
              <div className="bg-orange-500  rounded-t-xl py-6 px-32 text-white ">
                <h1 className="font-bold text-2xl mb-2">Graduation</h1>
                <p>Paket Khusus Member</p>
              </div>
              <div className="bg-[#F9F5F6]  rounded-b-lg">
                <h1 className="pt-3">
                  Rp.<span className="text-4xl">749</span>.000
                </h1>
                <p className="mt-4">1 Jam Pemrotetan</p>
                <div className="line-paket"></div>
                <p className="mt-4">Unlimitied photoshoot</p>
                <div className="line-paket"></div>
                <p className="mt-4">Maks. 35 orang (Charge 25.000/orang)</p>
                <div className="line-paket"></div>
                <p className="mt-4 ">2 Background </p>
                <div className="line-paket"></div>
                <p className="mt-4 pb-10">All file copy ke HP/Google Drive </p>
              </div>
              <a href={"http://wa.me/+62895337305533?text=" + text(paket.nama, paket.jenis[2], paket.harga[2])} target="_blank" rel="noreferrer">
                <button className="button-member" >Book Now!!</button>
              </a>
              <p className="pb-5 text-text">Make ur Different Moment</p>
            </div>:
            <div></div>
            }
          

          
        </div>

        <div className="flex justify-center">
          <button onClick={() => navigate("/")} className="bg-bg px-4 py-2 mt-10 rounded-md text-text hover:text-white">
            Back to Home
          </button>
        </div>

      </div>
    </>
  );
};
export default Graduation;
