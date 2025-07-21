import { IoCloseSharp } from "react-icons/io5";

interface Props {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="w-full fixed inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm bg-opacity-50 z-[1002] flex justify-center items-center 	transition-transform duration-300 scale-100">
      <div className="bg-white  rounded-lg shadow-lg w-[85%] h-[400px] lg:h-[450px]  flex flex-col justify-center items-center gap-5  md:gap-6 mx-4 relative p-5 ">
        <div className="w-[93%] h-16 border-b border-gray-400 flex justify-between items-center">
          <p className="text-base md:text-2xl font-medium">{title}</p>
          <button onClick={onClose}>
            <IoCloseSharp className="text-lg md:text-2xl text-gray-600 " />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
