
import  { useEffect, useRef , useState} from "react";
interface PublishCardProps {
  src: string;
  alt: string;
  title: string;
  onClick: () => void; 
}

const PublishCard = ({ src, alt, title,  onClick }: PublishCardProps) => {
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
    className={`w-40 md:w-74 h-53 md:h-96 rounded-lg shadow-md flex flex-col items-center justify-center  group bg-[#e4f4de] transition-all duration-700 ease-out transform perspective 
        ${visible ? "rotate-y-0 opacity-100" : "rotate-y-90 opacity-0"}`}>
    <div className="w-[65%] h-[70%] top-4 flex justify-center items-center rounded-md shadow-lg">
          <img
        className="w-full h-full object-cover rounded-md"
        src={src}
        alt={alt}
        
      />
    </div>
      <div className="w-full flex-grow flex flex-col items-center justify-center gap-4">
        <h2 className="text-xs md:text-lg font-medium  text-black  transition-all duration-500">{title}</h2>
       <button onClick={onClick} className="w-30 h-9 rounded-4xl border border-[#58a53c] hover:bg-[#58a53c] hover:text-white transition-all duration-500 ">Ətraflı</button>
      </div>
    </div>
  );
};

export default PublishCard;
