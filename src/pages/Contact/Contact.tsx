import React from 'react'
import ContactCard from './ContactCard'

const branches = [
  {
    id: 3,
    name: "Elmlər A filialı",
    phone1: "+994 12 539 40 23",
    phone2: "+994 77 412 12 02",
  },
  {
    id: 2,
    name: "Nizami filialı",
    phone1: "+994 77 567 12 02",
    phone2: "+994 77 478 12 02",
  },
  {
    id: 10,
    name: "28 May filialı",
    phone1: "+994 70 876 78 05",
    phone2: "+994 70 438 12 02",
  },
  {
    id: 16,
    name: "N.Nərimanov filialı",
    phone1: "+994 12 564 93 67",
    phone2: "+994 70 844 12 02",
  },
  {
    id: 15,
    name: "Neftçilər filialı",
    phone1: "+994 77 485 12 02",
    phone2: "+994 77 410 12 02",
  },
  {
    id: 14,
    name: "Xalqlar filialı",
    phone1: "+994 77 432 12 02",
    phone2: "+994 77 412 02 71",
  },
  {
    id: 13,
    name: "Sumqayıt filialı",
    phone1: "+994 77 677 12 02",
    phone2: "+994 77 395 12 02",
  },
  {
    id: 12,
    name: "Gəncə filialı",
    phone1: "+994 70 565 12 02",
    phone2: "+994 77 556 05 02",
  },
  {
    id: 11,
    name: "Göyçay filialı",
    phone1: "+994 20 274 61 42",
    phone2: "+994 51 444 10 44",
  },
  {
    id: 10,
    name: "Xırdalan filialı",
    phone1: "+994 77 407 12 02",
    phone2: "+994 77 244 12 02",
  },
  {
    id: 1,
    name: "Elmlər B filialı",
    phone1: "+994 77 588 53 56",
    phone2: "+994 77 424 12 02",
  },
];

const Contact = () => {
  return (
    <div  style={{padding:"25px"}} className='flex flex-col items-center justify-center gap-8 min-h-screen  bg-[#F7FCFF] '>
      <h1 className='text-4xl leading-14 font-medium text-black'>Filiallar</h1>
      <div className='flex flex-wrap justify-center items-center gap-10'>
        {branches.map((branch) => (
          <ContactCard
            key={branch.id}
            name={branch.name}
            phone1={branch.phone1}
            phone2={branch.phone2}
            onClick={() => window.location.href = `/contact/branches/${branch.id}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Contact
