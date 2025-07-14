// components/client-slider.jsx
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { useState, useEffect, useCallback, useMemo } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// Define client logos with unique IDs
const clientLogos = [
  { id: "tata-1", src: "/Tata.png", alt: "TATA Company Logo" },
  { id: "rover-1", src: "/Rover.png", alt: "Rover Company Logo" },
  { id: "ravmek-1", src: "/RAVMEK.jpg", alt: "RAVMEK Company Logo" },
  { id: "capucinne-1", src: "/1549527618.jpg", alt: "Capucinne Company Logo" },
  // Add more unique logos as needed
];

// Fallback image for broken logos
const FALLBACK_IMAGE = "/fallback-logo.png";

export default function ClientSlider() {
  const [isClient, setIsClient] = useState(false);
  const [failedImages, setFailedImages] = useState(new Set()); // Track failed images

  useEffect(() => {
    setIsClient(true);
    return () => {
      // Cleanup if needed
    };
  }, []);

  // Memoize clientLogos to prevent recreation
  const memoizedClientLogos = useMemo(() => clientLogos, []);

  // Handle image loading errors
  const handleImageError = useCallback(
    (e, id) => {
      console.error("Failed to load image:", e.target.src);
      setFailedImages((prev) => new Set([...prev, id]));
      e.target.src = FALLBACK_IMAGE; // Use fallback image
    },
    []
  );

  // Check if all images failed
  const allImagesFailed = failedImages.size === memoizedClientLogos.length && memoizedClientLogos.length > 0;

  if (!isClient || allImagesFailed) {
    return (
      <section className="mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-blue-50 to-gray-200"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 via-gray-700 to-blue-900 bg-clip-text text-transparent mb-4">
              Our Trusted Clients
            </h2>
          </div>
          <div className="flex justify-center items-center h-40">
            {allImagesFailed ? (
              <div className="text-red-500" role="alert">
                Unable to load client logos. Please try again later.
              </div>
            ) : (
              <div className="animate-pulse text-gray-500">Loading partners...</div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Disable loop if insufficient slides
  const enableLoop = memoizedClientLogos.length >= 5;

  return (
    <section className="mb-12 relative overflow-hidden" role="region" aria-labelledby="partners-heading">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] animate-gradient-x"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-[var(--particle-color)] rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2
            id="partners-heading"
            className="text-4xl font-bold bg-gradient-to-r from-[var(--text-gradient-start)] via-[var(--text-gradient-mid)] to-[var(--text-gradient-end)] bg-clip-text text-transparent mb-4 relative"
          >
            <span className="relative z-10">Our Trusted Clients</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--text-gradient-start)] via-[var(--text-gradient-mid)] to-[var(--text-gradient-end)] rounded-lg blur-lg opacity-30 animate-pulse-slow"></div>
          </h2>
        </div>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={enableLoop}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              effect: "slide",
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              effect: "slide",
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              effect: "slide",
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              effect: "coverflow",
              spaceBetween: 0,
            },
          }}
          className="mySwiper pb-16"
          a11y={{
            prevSlideMessage: "Previous client logo",
            nextSlideMessage: "Next client logo",
            firstSlideMessage: "This is the first client logo",
            lastSlideMessage: "This is the last client logo",
            paginationBulletMessage: "Go to slide {{index}}",
          }}
        >
          {memoizedClientLogos.map((client) => (
            <SwiperSlide key={client.id} className="max-w-[200px] flex justify-center items-center">
              <div className="group relative w-full h-full">
                <div className="bg-white/20 backdrop-blur-sm border border-[var(--border-color)] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 relative overflow-hidden h-full flex flex-col justify-center items-center">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--border-gradient-start)] via-[var(--border-gradient-mid)] to-[var(--border-gradient-end)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-pulse"></div>
                  <div className="absolute inset-[2px] rounded-2xl bg-[var(--card-bg)] backdrop-blur-sm"></div>

                  <div className="relative z-10 flex justify-center items-center h-20 w-full">
                    <Image
                      src={client.src}
                      alt={client.alt}
                      width={120}
                      height={80}
                      className="object-contain max-h-16 transition-all duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                      onError={(e) => handleImageError(e, client.id)}
                      loading="lazy"
                    />
                  </div>

                  <div className="absolute inset-0 -top-4 -left-4 bg-gradient-to-r from-transparent via-[var(--shine-color)] to-transparent transform -skew-x-12 group-hover:animate-shine"></div>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--glow-start)] via-[var(--glow-mid)] to-[var(--glow-end)] opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 -z-10 animate-glow-fade"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-16 overflow-hidden bg-gradient-to-r from-[var(--banner-start)] to-[var(--banner-end)] text-[var(--banner-text)] py-4 relative" aria-hidden="true">
          <div className="animate-scroll-left flex items-center space-x-8 whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <div key={`scroll-text-group-${i}`} className="flex items-center space-x-8">
                <span className="text-lg font-semibold">✦ Trusted by Industry Leaders</span>
                <span className="text-lg font-semibold">✦ Excellence in Partnership</span>
                <span className="text-lg font-semibold">✦ Innovation Together</span>
                <span className="text-lg font-semibold">✦ Global Collaboration</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        :root {
          /* Refined Background Gradient */
          --gradient-start: #e0e7ed; /* Light blue-gray */
          --gradient-mid: #f0f4f7;   /* Lighter, almost white blue-gray */
          --gradient-end: #e0e7ed;

          /* Refined Text Gradient for Heading */
          --text-gradient-start: #1a237e; /* Deep professional blue */
          --text-gradient-mid: #4a5a70;   /* Charcoal gray */
          --text-gradient-end: #0d47a1;   /* Slightly brighter professional blue */

          /* Particle Color */
          --particle-color: #a7c0d9; /* Subtle blue-gray */

          /* Card Styling */
          --border-color: rgba(220, 230, 240, 0.5); /* Subtle off-white for borders */
          --card-bg: rgba(255, 255, 255, 0.9);      /* Keep inner card background nearly opaque white */

          /* Border Gradient (on hover) */
          --border-gradient-start: #2196f3; /* Vibrant blue */
          --border-gradient-mid: #64b5f6;   /* Lighter blue */
          --border-gradient-end: #1976d2;   /* Deeper blue */

          /* Shine Color */
          --shine-color: rgba(255, 255, 255, 0.2); /* Subtle white shine */

          /* Glow Colors (on hover) */
          --glow-start: #42a5f5; /* Light blue glow */
          --glow-mid: #90caf9;   /* Even lighter blue glow */
          --glow-end: #2196f3;   /* Main blue glow */

          /* Banner Colors */
          --banner-start: #263238; /* Dark charcoal for banner */
          --banner-end: #37474f;   /* Slightly lighter charcoal */
          --banner-text: #e0e0e0;   /* Light gray text for banner */

          /* Swiper Pagination and Navigation */
          --pagination-bullet: #3c5078;
          --pagination-bullet-active: #c8c8c8;
          --nav-button-bg-start: #283c64;
          --nav-button-bg-end: #e6e6e6;
          --nav-button-color: #ffffff;
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes border-pulse {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes glow-fade {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-shine {
          animation: shine 1.5s ease-out forwards;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
          width: 200%;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-border-pulse {
          animation: border-pulse 1s ease-in-out infinite alternate;
        }

        .animate-glow-fade {
          animation: glow-fade 2s ease-in-out infinite alternate;
        }

        .mySwiper {
          padding: 20px 0;
        }

        .mySwiper .swiper-pagination-bullet {
          background: linear-gradient(45deg, var(--pagination-bullet), var(--pagination-bullet-active));
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .mySwiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }

        .mySwiper .swiper-button-next,
        .mySwiper .swiper-button-prev {
          background: linear-gradient(45deg, var(--nav-button-bg-start), var(--nav-button-bg-end));
          color: var(--nav-button-color);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          margin-top: -20px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .mySwiper .swiper-button-next:hover,
        .mySwiper .swiper-button-prev:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
        }

        .mySwiper .swiper-button-next:after,
        .mySwiper .swiper-button-prev:after {
          font-size: 16px;
        }

        .mySwiper .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-gradient-x,
          .animate-float,
          .animate-shine,
          .animate-scroll-left,
          .animate-pulse-slow,
          .animate-border-pulse,
          .animate-glow-fade {
            animation: none;
          }

          .group-hover\\:scale-105,
          .group-hover\\:rotate-3,
          .group-hover\\:scale-110 {
            transform: none;
            transition: none;
          }

          .group-hover\\:opacity-100 {
            opacity: 0.8; /* Static opacity for visual feedback */
          }

          .mySwiper .swiper-button-next:hover,
          .mySwiper .swiper-button-prev:hover {
            transform: none;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Static shadow */
          }
        }

        /* Dark theme support */
        @media (prefers-color-scheme: dark) {
          :root {
            /* Dark mode adjusted colors */
            --gradient-start: #1f2937;
            --gradient-mid: #374151;
            --gradient-end: #1f2937;
            --text-gradient-start: #60a5fa;
            --text-gradient-mid: #d1d5db;
            --text-gradient-end: #3b82f6;
            --particle-color: #6b7280;
            --card-bg: rgba(31, 41, 55, 0.9);
            --border-color: rgba(209, 213, 219, 0.3);
            --banner-text: #d1d5db;
            --pagination-bullet: #4b5563;
            --pagination-bullet-active: #9ca3af;
            --nav-button-bg-start: #374151;
            --nav-button-bg-end: #6b7280;
            --nav-button-color: #e5e7eb;
          }
        }
      `}</style>
    </section>
  );
}