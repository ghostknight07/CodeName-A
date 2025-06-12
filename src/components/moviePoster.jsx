// components/MoviePoster.tsx
'use client';

import Image from 'next/image';
import PropTypes from 'prop-types';
import { FaPlay } from 'react-icons/fa';

export default function MoviePoster({ posterUrl, movieName }: { posterUrl: string; movieName: string }) {
  return (
    <div
      className="flex flex-col w-full h-[325px] text-center relative cursor-pointer min-w-[140px] mt-[10px] mb-[10px] rounded-none transition-transform duration-300 ease-in-out shadow-[0px_4px_10px_rgba(0,0,0,0)] hover:scale-[1.05] hover:shadow-[0px_8px_20px_rgba(0,0,0,0.3)]"
    >
      <div
        className="flex justify-center items-center relative w-[210px] h-[293px] overflow-hidden mb-[5px] box-border rounded-none transition-transform duration-300 ease-in-out shadow-[0px_2px_6px_rgba(0,0,0,0.15)] hover:scale-[1.02] hover:shadow-[0px_6px_15px_rgba(0,0,0,0.25)] group"
      >
        <Image
          src={posterUrl}
          alt={`${movieName} poster`}
          fill
          className="object-cover transition-transform duration-500 ease-in-out filter-none rounded-none shadow-[0px_1px_24px_11px_rgba(0,0,0,0.14)] group-hover:scale-[1.1] group-hover:blur-sm"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 transition-colors duration-300 ease-in-out group-hover:bg-opacity-50 z-[1]" />
        <p className="hidden absolute z-[2] text-white text-[16px] font-bold pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 uppercase transition-transform duration-300 ease-in-out opacity-0 group-hover:block group-hover:scale-100 group-hover:opacity-100">
          <FaPlay />
        </p>
      </div>

      <div className="text-center text-[14px] text-[#333] pb-[5px]">
        <p>{movieName}</p>
      </div>
    </div>
  );
}

MoviePoster.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  movieName: PropTypes.string.isRequired,
};

