import React from "react";
import { FaBuildingColumns } from "react-icons/fa6";

const branches = [
  {
    name: "Elmlər A filialı",
    phone1: "+994 12 539 40 23",
    phone2: "+994 77 412 12 02",
  },
  {
    name: "Nizami filialı",
    phone1: "+994 77 567 12 02",
    phone2: "+994 77 478 12 02",
  },
  {
    name: "28 May filialı",
    phone1: "+994 70 876 78 05",
    phone2: "+994 70 438 12 02",
  },
  {
    name: "N.Nərimanov filialı",
    phone1: "+994 12 564 93 67",
    phone2: "+994 70 844 12 02",
  },
  {
    name: "Neftçilər filialı",
    phone1: "+994 77 485 12 02",
    phone2: "+994 77 410 12 02",
  },
  {
    name: "Xalqlar filialı",
    phone1: "+994 77 432 12 02",
    phone2: "+994 77 412 02 71",
  },
  {
    name: "Sumqayıt filialı",
    phone1: "+994 77 677 12 02",
    phone2: "+994 77 395 12 02",
  },
  {
    name: "Gəncə filialı",
    phone1: "+994 70 565 12 02",
    phone2: "+994 77 556 05 02",
  },
  {
    name: "Göyçay filialı",
    phone1: "+994 20 274 61 42",
    phone2: "+994 51 444 10 44",
  },
  {
    name: "Xırdalan filialı",
    phone1: "+994 77 407 12 02",
    phone2: "+994 77 244 12 02",
  },
  {
    name: "Elmlər B filialı",
    phone1: "+994 77 588 53 56",
    phone2: "+994 77 424 12 02",
  },
];

const ContactCard = () => {
  return (
    <div>
      {branches.map((branch) => (
        <div
          className="w-80  h-72 flex flex-col justify-center items-center gap-2.5 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
          key={branch.name}
        >
          <div>
            <div>
              <FaBuildingColumns className="text-lg" />
            </div>
            <p>{branch.name}</p>
          </div>
          <p>{branch.phone1}</p>
          <p>{branch.phone2}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
