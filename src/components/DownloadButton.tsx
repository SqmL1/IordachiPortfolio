import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface DownloadButtonProps {
  href: string;
  icon: string; // This will now be the imported icon
  alt: string;
  label: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ href, icon, alt, label }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" 
      className="inline-flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded transition duration-300 ease-in-out">
      <Image 
        src={icon}
        alt={alt} 
        width={20} 
        height={20} 
        className="mr-2"
      />
      <span>{label}</span>
    </Link>
  );
};

export default DownloadButton;