
import  { useEffect, useRef , useState} from "react";
interface PublishCardProps {
  src: string;
  alt: string;
  title: string;
  price: number;
  onClick?: () => void; 
}

const PublishCard = ({ src, alt, title, price, onClick }: PublishCardProps) => {
    const [visible, setVisible] = useState(false);
      const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.observe(ref.current);
    };
  }, []);

  return (
    <div 
    ref={ref}
    style={{padding:"20px"}}
    className={`w-40 md:w-78 h-53 md:h-96 bg-white rounded-lg shadow-md flex flex-col items-center justify-center  group hover:bg-[#22caba] transition-all duration-700 ease-out transform perspective 
        ${visible ? "rotate-y-0 opacity-100" : "rotate-y-90 opacity-0"}`}>
    <div className="w-[65%] h-[70%] top-4 flex justify-center items-center">
          <img
        className="w-full h-full object-cover"
        src={src}
        alt={alt}
        onClick={onClick}
      />
    </div>
      <div className="w-full flex-grow flex flex-col items-center justify-center">
        <h2 className="text-xs md:text-lg font-medium font-[averta] text-black group-hover:text-white transition-all duration-500">{title}</h2>
        <p className="text-[10px] md:text-sm font-[averta] text-black group-hover:text-white transition-all duration-500">{price} AZN</p>
      </div>
    </div>
  );
};

export default PublishCard;
