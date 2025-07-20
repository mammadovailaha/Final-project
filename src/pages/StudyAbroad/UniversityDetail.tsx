// import { FC } from "react";

import { useParams } from "react-router-dom";

const abroadData = [
  {
    id: 1,
    title: "Poland",
    image:
      "https://www.educompany.az/assets/front/image/abroad/15ffc49c05dff0346303a5be3c40c8b1.jpg",
    universityLogos: [
      {
        id: 1,
        name: "Warsaw University",
        logoUrl:
          "https://www.educompany.az/assets/front/image/abroad_uni/a37f27331107d768d27867b43072909b.png",
        description: "Polşanın ən prestijli ali təhsil müəssisələrindən biri.",
        faculties: ["Tibb", "İqtisadiyyat", "İnformasiya Texnologiyaları"]
      },
    ],
  },
  {
    id: 2,
    title: "Ukraine",
    image:
      "https://www.educompany.az/assets/front/image/abroad/f3d80a50841140cf3a2bd6730c41d828.jpg",
    universityLogos: [
      {
        id: 1,
        name: "Kyiv Medical",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/8b11c223bfa1fc643f61f227a1cdbd18.png",
        description: "Ukraynanın qabaqcıl tibb universitetlərindən biridir.",
        faculties: ["Ümumi Tibb", "Diş Həkimliyi", "Əczaçılıq"]
      },
      {
        id: 2,
        name: "Lviv National",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/7fa50b2225b99038f5597c5ed1e6c823.png",
        description: "Lviv şəhərində yerləşən klassik universitet.",
        faculties: ["Hüquq", "Biznes", "Tərcümə"]
      },
      {
        id: 3,
        name: "Odessa Academy",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/394bb6dfd7d0ac5c0db4d65af57141fa.png",
        description: "Qara dəniz sahilində yerləşən nüfuzlu akademiya.",
        faculties: ["Dənizçilik", "Menecment", "Riyaziyyat"]
      },
      {
        id: 4,
        name: "Kharkiv University",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/94dd1ba5dd6a600a3ab33705a08bc537.png",
        description: "Xarkovun aparıcı dövlət universiteti.",
        faculties: ["İnşaat", "Fizika", "Mexanika"]
      },
      {
        id: 5,
        name: "Dnipro Medical",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/0117483ce7b9c3d1d3deda5d14beb3a1.png",
        description: "Dnepr şəhərində fəaliyyət göstərən tibb universiteti.",
        faculties: ["Tibb", "Biotexnologiya"]
      },
      {
        id: 6,
        name: "Zaporizhzhia State",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/5632d0cff2ccd7050192133cc160fc81.png",
        description: "Sənaye yönümlü texniki universitet.",
        faculties: ["Maşınqayırma", "Elektrotexnika"]
      },
      {
        id: 7,
        name: "Sumy State",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/e97d831cd447af6e1ace6876e7f6d163.png",
        description: "Sumı şəhərində yerləşən dövlət universiteti.",
        faculties: ["Kompüter Elmləri", "İqtisadiyyat"]
      },
      {
        id: 8,
        name: "Vinnytsia Medical",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/550e31f7a4ee1e20d90bc15bb914bc62.png",
        description: "Vinnitsa şəhərində yerləşən ixtisaslaşmış tibb müəssisəsi.",
        faculties: ["Tibb", "Əczaçılıq"]
      },
      {
        id: 9,
        name: "Ternopil National",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/f4b61f70f19361ff503879154500828e.png",
        description: "Ternopil şəhərində yerləşən çoxprofilli universitet.",
        faculties: ["Siyasət", "Jurnalistika"]
      },
      {
        id: 10,
        name: "Ivano-Frankivsk University",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/960edbac23b7072b8651be4a179b0403.png",
        description: "İvano-Frankivsk bölgəsinin qabaqcıl universiteti.",
        faculties: ["Memarlıq", "Dizayn"]
      },
      {
        id: 11,
        name: "Uzhhorod National",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/afc02a68cfa06116a2835dc4f68a71ed.png",
        description: "Ujhorod şəhərində yerləşən dövlət universiteti.",
        faculties: ["Psixologiya", "Fəlsəfə"]
      },
      {
        id: 12,
        name: "Cherkasy University",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/d18367b4e691dc59da220c7373fda6c0.png",
        description: "Çerkassı bölgəsinin əsas ali məktəbi.",
        faculties: ["Biologiya", "Ekologiya"]
      },
      {
        id: 13,
        name: "Poltava Academy",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/d86863ca1bf8a87121cd64df67e2f40c.png",
        description: "Poltava şəhərində fəaliyyət göstərən ixtisaslaşmış akademiya.",
        faculties: ["Kənd təsərrüfatı", "Menecment"]
      },
      {
        id: 14,
        name: "Mykolaiv National",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/e0c3b48734c25b9a29d697173dd4139e.png",
        description: "Mykolaiv şəhərində yerləşən dövlət universiteti.",
        faculties: ["İqtisadiyyat", "Texnologiya"]
      }
    ],
  },
  {
    id: 3,
    title: "Turkey",
    image:
      "https://www.educompany.az/assets/front/image/abroad/0bbc554969beb8e99fd93b14410bf755.jpg",
    universityLogos: [
      {
        id: 1,
        name: "Istanbul University",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/c081baaacdfeeb7e89ccaf6c5c7753bb.png",
        description: "Türkiyənin ən qədim universitetlərindən biri.",
        faculties: ["Hüquq", "Sosiologiya"]
      },
      {
        id: 2,
        name: "Ankara University",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/e85b7e1166475244f34ddf5536f3f382.png",
        description: "Türkiyənin paytaxtında yerləşən dövlət universiteti.",
        faculties: ["Tibb", "Mühəndislik"]
      },
      {
        id: 3,
        name: "Hacettepe University",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/bbf17083d6e9eac93e5bfd80c85c3a59.png",
        description: "Tibb sahəsində ixtisaslaşmış universitet.",
        faculties: ["Tibb", "Əczaçılıq"]
      },
      {
        id: 4,
        name: "Ege University",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/87c0a7101984e1f085e5ee992e1c8505.png",
        description: "İzmir şəhərində yerləşən qabaqcıl ali təhsil müəssisəsi.",
        faculties: ["Ədəbiyyat", "İncəsənət"]
      },
      {
        id: 5,
        name: "Dokuz Eylul University",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/737fb19ed3ecdd0fbf08379c512f5d2f.png",
        description: "Türkiyənin aparıcı dövlət universitetlərindən biri.",
        faculties: ["İqtisadiyyat", "Sənaye mühəndisliyi"]
      },
      {
        id: 6,
        name: "Akdeniz University",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/84b7aedab7052412b7bd2532994de4cd.png",
        description: "Antalya şəhərində yerləşir.",
        faculties: ["Turizm", "Təbiət elmləri"]
      },
      {
        id: 7,
        name: "Karadeniz Technical",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/a6ab0fda4653c5a0a4c8d059e24a7808.png",
        description: "Trabzon şəhərində yerləşən texniki universitet.",
        faculties: ["İnşaat", "Mexanika"]
      },
      {
        id: 8,
        name: "Gazi University",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/2018261b9cbc6b7ad970d7e0cad23b75.png",
        description: "Ankarada yerləşən nüfuzlu universitet.",
        faculties: ["Pedaqogika", "İqtisadiyyat"]
      },
      {
        id: 9,
        name: "Selcuk University",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/e146ed1647d3354365254ca02e481342.png",
        description: "Konya bölgəsində yerləşən ali məktəb.",
        faculties: ["Sənət", "Təbiət elmləri"]
      },
      {
        id: 10,
        name: "Uludag University",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/506b6d6c742f6b8ba2b45061ba4587dd.png",
        description: "Bursa şəhərində yerləşir.",
        faculties: ["Texnologiya", "Sosial elmlər"]
      },
      {
        id: 11,
        name: "Marmara University",
        logoUrl: "https://www.educompany.az/assets/front/image/abroad_uni/948e5b49f6a692eb2e58346172e7ac81.png",
        description: "İstanbulun tanınmış dövlət universiteti.",
        faculties: ["Biznes", "Media"]
      }
    ],
  },
];

const UniversityDetail = () => {
const { id } = useParams<{ id: string }>();
  const country = abroadData.find((item) => item.id === Number(id));
  const data=country?.universityLogos
  return (
 <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{country?.title} Universitetləri</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((uni) => (
          <div key={uni.id} className="border p-4 rounded shadow">
            <img src={uni.logoUrl} alt={uni.name} className="h-20 mx-auto mb-2" />
            <h3 className="text-lg font-semibold mb-1">{uni.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{uni.description}</p>
            <ul className="list-disc list-inside text-sm text-gray-800">
              {uni.faculties.map((faculty, index) => (
                <li key={index}>{faculty}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UniversityDetail
