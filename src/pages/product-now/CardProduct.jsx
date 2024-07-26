import { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import ms1 from '../../assets/images/ms/ms-poli.png';
import ms2 from '../../assets/images/ms/ms-gaz.png';
import ms3 from '../../assets/images/ms/ms-oltin.png';
import ms4 from '../../assets/images/ms/ms-kondensat.png';
import ms5 from '../../assets/images/ms/ms-tovar.png';
import ms6 from '../../assets/images/ms/ms-birja.png';
import './Test.css'; // Ensure this file exists in the same directory

const CardProduct = () => {
  const swiperRef = useRef(null);
  const marks = [
    {
      id: 1,
      title: "Polietilen",
      subtitle: "Quick and Reliable Service",
      desc: "Ushbu texnologiyaning asosiy afzalligi bu — quvurli va avtoklav turdagi reaktorlarning ketma-ket rejimidan foydalangan holda polietilenning fizik-kimyoviy va reologik ko‘rsatkichlarni o‘zgartirish imkoniyati hisoblanadi.",
      productImg: ms1,
      btnText: "Batafsil ma'lumot",
    },
    {
      id: 2,
      title: "Suyultirilgan gaz",
      subtitle: "Quick and Reliable Service",
      desc: "Suyultirilgan gaz, tabiiy gazni chuqur qayta ishlash natijasida asosiy tarkibiy qismi propan-butan aralashmasidan iborat boʻlgan mahsulot boʻlib hisoblanadi.",
      productImg: ms2,
      btnText: "Batafsil ma'lumot",
    },
    {
      id: 3,
      title: "Oltingugurt",
      subtitle: "Quick and Reliable Service",
      desc: "Oltingugurt tabiiy gaz tarkibidan ajratib olingan vodorod sulfidni (H2S) toʻgʻridan-toʻgʻri oksidlash jarayoni yordamida ishlab chiqariladi. Hosil boʻlgan oltingugurt granulalar koʻrinishida 25kg dan polietilen qoplarga qadoqlanadi.",
      productImg: ms3,
      btnText: "Batafsil ma'lumot",
    },
    {
      id: 4,
      title: "Kondensat",
      subtitle: "Gaz kondensati",
      desc: "Gaz kondensati, tabiiy gazni chuqur qayta ishlash natijasida ogʻir uglevodorodlarni ajratib olish natijasida hosil boʻlgan mahsulot boʻlib hisoblanadi. Uning oʻrtacha zichligi 0,715 - 0,735 g/sm3 ni tashkil qiladi.",
      productImg: ms4,
      btnText: "Batafsil ma'lumot",
    },
    {
      id: 5,
      title: "Tovar gazi",
      subtitle: "Quick and Reliable Service",
      desc: "Tovar gazi, tabiiy gazni chuqur qayta ishlash natijasida asosiy tarkibiy qismi metandan iborat boʻlgan gaz boʻlib hisoblanadi. Tovar gazning sifati Oʻz DSt 948:2016 standarti shartlari asosida nazorat qilib boriladi. Tovar gazi “Oʻztransgaz” AJning magistral gaz quvurlariga yetkazib beriladi.",
      productImg: ms5,
      btnText: "Batafsil ma'lumot",
    },
    {
      id: 6,
      title: "Tovar gazi",
      subtitle: "Quick and Reliable Service",
      desc: "Tovar gazi, tabiiy gazni chuqur qayta ishlash natijasida asosiy tarkibiy qismi metandan iborat boʻlgan gaz boʻlib hisoblanadi. Tovar gazning sifati Oʻz DSt 948:2016 standarti shartlari asosida nazorat qilib boriladi. Tovar gazi “Oʻztransgaz” AJning magistral gaz quvurlariga yetkazib beriladi.",
      productImg: ms6,
      btnText: "Batafsil ma'lumot",
    },
  ];

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
        },
      });
    }
  }, []);

  return (
    <div ref={swiperRef} className="swiper slide-container mx-auto py-10" style={{ maxWidth: '1600px', marginBottom:"100px" }}>
      <div className="slide-content swiper-wrapper rounded-3xl overflow-hidden" >
        {marks.map((mark) => (
          <div key={mark.id} className="card swiper-slide bg-white rounded-3xl shadow-lg p-4 flex flex-col items-center" style={{ width: '350px', height: '600px' }}>
            <img className="lg:h-72 md:h-36 w-full object-cover object-center" src={mark.productImg} alt={mark.title} />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{mark.subtitle}</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{mark.title}</h1>
              <p className="leading-relaxed mb-3 line-clamp-3">{mark.desc}</p>
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">{mark.btnText}
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-button-next swiper-navBtn text-blue-400 hover:text-blue-600"></div>
      <div className="swiper-button-prev swiper-navBtn text-blue-400 hover:text-blue-600"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default CardProduct;
