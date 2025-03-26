import React from 'react';
interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  images: Array<{
    url: string;
    caption: string;
  }>;
  onImageClick: (imageIndex: number) => void;
}
export function ProjectCard({
  title,
  category,
  description,
  images,
  onImageClick
}: ProjectCardProps) {
  return <div className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all">
      <div className="relative">
        {/* Main image */}
        <div className="h-64 overflow-hidden cursor-pointer" onClick={() => onImageClick(0)} role="button" tabIndex={0} aria-label={`View ${title} gallery`} onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onImageClick(0);
        }
      }}>
          <img src={images[0].url} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
        {/* Thumbnail strip */}
        {images.length > 1 && <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex gap-2 justify-center">
              {images.map((image, index) => <button key={index} onClick={e => {
            e.stopPropagation();
            onImageClick(index);
          }} className={`w-12 h-12 rounded-md overflow-hidden border-2 transition-colors
                    ${index === 0 ? 'border-white' : 'border-gray-400 hover:border-white'}`}>
                  <img src={image.url} alt={`${title} - ${image.caption}`} className="w-full h-full object-cover" />
                </button>)}
            </div>
          </div>}
      </div>
      <div className="p-6">
        <span className="text-sm text-gray-500 font-medium tracking-wider">
          {category}
        </span>
        <h3 className="text-xl font-bold text-white mt-2 mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>;
}