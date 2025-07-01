import React from "react";
import FaqItem from "../../components/FaqItem";

const faqData = [
  {
    id: 1,
    question: '"EDU Company" Təhsil Şirkətində iş saatları necədir?',
    answer:
      '"EDU Company" Təhsil Şirkətinin filialları şənbə günü daxil olmaqla, həftə içi hər gün 09:00-dan 21:00-a qədər fəaliyyət göstərir.',
  },
  {
    id: 2,
    question: "Şirkətin neçə filialı var?",
    answer:
      '"EDU Company" Təhsil Şirkəti hazırda 12 filialda fəaliyyət göstərir. Filiallarımız: Elmlər A, Elmlər B, Nizami, 28 May, N.Nərimanov, Neftçilər, Xalqlar, Xırdalan, Sumqayıt, Gəncə, Göyçay, Əcəmi.',
  },
  {
    id: 3,
    question: "Dərslərin keyfiyyətindən necə əmin ola bilərəm?",
    answer:
      '"EDU Company" Təhsil Şirkətində bütün xidmət sahələri üzrə ilk dərslər tamamilə ödənişsizdir. İlk dərsdə iştirak edərək müəllimin metodikası ilə tanış ola və keyfiyyətə əmin ola bilərsiniz. "EDU Company" təhsildə ən etibarlı bələdçinizdir!',
  },
  {
    id: 4,
    question: "Abituriyent hazırlığında üstünlükləriniz nələrdir?",
    answer: `- Qəbula 100% yazılı zəmanət  
- Təqaüd proqramı  
- Peşəkar müəllim heyəti  
- A, B, C səviyyə qrupları  
- Əlavə dərs saatları  
- Valideyn iclasları və əlaqə  
- Ödənişsiz sınaq dərsi  
- Kamera nəzarəti  
- Aylıq sınaqlar  
- Onlayn valideyn sistemi  
- Motivasiya seminarları  
- Sosial fəaliyyətlər və gəzintilər`,
  },
  {
    id: 5,
    question: 'Magistr hazırlığında niyə "EDU Company"ni seçməliyəm?',
    answer: `- Azərbaycan və rus bölməsi üzrə hazırlıq  
- Həm onlayn, həm əyani dərslər  
- Məntiq, informatika və dil fənləri üzrə müəllimlər  
- Aylıq 2 ödənişsiz sınaq imtahanı  
- 90+ bal toplayanlara 1 ay ödənişsiz hazırlıq  
- Dərs videoları ilə dəstəkləmə  
- 100% yazılı zəmanət  
- Ödənişsiz ilk dərslər  
- Yay aylarında pulsuz dərslər  
- Yüksək nəticə toplayanlara əməkdaşlıq təklifi  
- Respublika birincilərinə mükafat`,
  },
  {
    id: 6,
    question: 'Dövlət Qulluğuna hazırlıqda niyə "EDU Company"ni seçməliyəm?',
    answer: `- Qəbulun hər iki mərhələsinə hazırlıq  
- 4 əsas fənn üzrə tədris  
- 100% yazılı zəmanət  
- Sadə izah və qısa konspektlər  
- Dərs vəsaiti təminatı  
- Peşəkar müəllim heyəti  
- Ödənişsiz ilk dərs`,
  },
  {
    id: 7,
    question: "Şirkətdə aktiv vakansiya varmı? Necə müraciət edə bilərəm?",
    answer:
      '"EDU Company" Təhsil Şirkətində müəllim vakansiyası üzrə imtahan may ayında keçirilir. Vakansiyalar sosial şəbəkələrdə elan olunur. Müraciət üçün: https://www.educompany.az/vacancy',
  },
  {
    id: 8,
    question: "Şirkətdə təhsil haqqı nə qədərdir?",
    answer:
      '"EDU Company" 12 filialda fəaliyyət göstərir. Təhsil haqqı ilə bağlı ətraflı məlumatı uyğun filialdan əldə edə bilərsiniz.',
  },
];

const FAQ = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#f0f8ff] ">
      <h1 className="text-2xl leading-8 font-bold md:text-3xl md:leading-16">
        TEZ-TEZ VERİLƏN SUALLAR (FAQ)
      </h1>
      <div className="w-full flex flex-col items-center justify-center gap-5 px-5 md:px-10">
        {faqData.map((item) => (
          <FaqItem
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
