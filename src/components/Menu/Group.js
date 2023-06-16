import { useNavigate } from "react-router-dom";

import group1 from "./img/group1.jpg"
import group2 from "./img/group2.jpg"
import group3 from "./img/group3.jpg"
import group4 from "./img/group4.jpg"

const Group = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="px py-10 bg-slate-100">
        <h1 className="font-bold text-2xl text-center pb-10">Group</h1>
        <div className="flex flex-wrap justify-center gap-7 sm:gap-14 pb-10">
          <img src={group1} alt="img-gallery" className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
          <img src={group2} alt="img-gallery" className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
          <img src={group3} alt="img-gallery" className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
          <img src={group4} alt="img-gallery" className="h-[300px] w-[420px] border-[15px] border-b-[40px] border-stone-50 shadow-2xl" />
        </div>
        <div>
          <h1 className="font-bold text-2xl text-center py-10">Paket penjualan</h1>
        </div>
        <div className="flex justify-center">
          <button onClick={() => navigate("/")} className="bg-bg px-4 py-2 mt-5 rounded-md hover:text-white">
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};
export default Group;