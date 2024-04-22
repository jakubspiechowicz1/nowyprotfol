import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import TextReader from '../components/TextReader';
import '../components/i18n';
import { useTranslation } from 'react-i18next'; // Import hooka useTranslation

const Reviews = () => {
  const { t } = useTranslation();
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    if (swiper) {
      const updateNavigation = () => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      };
      swiper.on('slideChange', updateNavigation);
      updateNavigation();  // Initial update

      return () => {
        swiper.off('slideChange', updateNavigation);
      };
    }
  }, []);

  const reviewsData = [
    {
      avatar: '/reviews/kobieta.webp',
      name: 'Anna Nowak',
      job: t('job1'),
      review: t('testimonial1'),
    },
    {
      avatar: '/reviews/mezczyzna.webp',
      name: 'Piotr Wiśniewski',
      job: t('job2'),
      review: t('testimonial2'),
    },
    {
      avatar: '/reviews/kobieta.webp',
      name: 'Ewa Kubiak',
      job: t('job3'),
      review: t('testimonial3'),
    },
    {
      avatar: '/reviews/mezczyzna.webp',
      name: 'Piotr Skuza',
      job: t('job4'),
      review: t('testimonial4'),
    },
  ];

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className='mb-12 xl:mb-32'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 text-center mx-auto'>
          {t('testimonials')} <TextReader text={t('testimonials')} />
        </h2>
        {/* slider */}
        <div className='relative'>
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1400: { slidesPerView: 3 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className='h-[350px] custom-swiper-reviews'
          >
            {reviewsData.map((person, index) => (
              <SwiperSlide key={index}>
                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                  <CardHeader className='p-0 mb-10'>
                    <div className='flex items-center gap-x-4'>
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=''
                        priority
                      />
                      {/* name and job */}
                      <div className='flex flex-col'>
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className='text-lg text-muted-foreground'>
                    {person.review}
                  </CardDescription>
                  {/* TextReader button */}
                  <TextReader text={person.review} />
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
  onClick={goPrev}
  disabled={isBeginning}
  className="swiper-button-prev swiper-custom-left"
  aria-label="Previous"
>
  {/* Zawartość jest zarządzana przez CSS ::after */}
</button>
<button
  onClick={goNext}
  disabled={isEnd}
  className="swiper-button-next swiper-custom-right"
  aria-label="Next"
>
  {/* Zawartość jest zarządzana przez CSS ::after */}
</button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;