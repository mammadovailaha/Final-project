import { useState } from "react";
import Modal from "./Modal";
import type { FC } from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import QuickRegistration from "../../pages/Auth/QuickRegistration";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: FC<Props> = ({ isOpen, onClose }) => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };
  return (
    <div>
      <Modal title="  Sifariş et" isOpen={isOpen} onClose={onClose}>
        <div className="w-full flex  flex-col md:flex-row justify-around items-center">
          <div className="flex  justify-center items-center gap-4">
            <p className="font-medium font-[averta] text-lg md:text-xl text-[#015715]">
              Ədəd
            </p>
            <div className="flex justify-center items-center gap-1 md:gap-2">
              <button
                className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-gray-200 flex justify-center items-center"
                onClick={handleDecrement}
              >
                <CgMathMinus className="text-xs md:text-sm text-black" />
              </button>
              <span
                className="w-8 md:w-11 h-8 md:h-11  rounded-full flex justify-center items-center text-xs md:text-sm text-white   bg-[linear-gradient(to_right,_#606060,_#849561,_#eed690)]
    bg-[length:200%_200%]
    bg-left
    hover:bg-[linear-gradient(to_left,_#eed690,_#849561,_#606060)]
    hover:bg-right
    transition-all duration-700 ease-in-out"
              >
                {count}
              </span>
              <button
                className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-gray-200 flex justify-center items-center"
                onClick={handleIncrement}
              >
                <CgMathPlus className="text-xs md:text-sm text-black" />
              </button>
            </div>
          </div>
          <div className="w-[97%] md:w-[55%]">
            <QuickRegistration title="" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default OrderModal;
