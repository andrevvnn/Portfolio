import React, { useCallback, useEffect } from 'react';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentImage: {
    url: string;
    title: string;
    caption?: string;
  } | null;
  onPrevious: () => void;
  onNext: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
  totalImages: number;
  currentImageIndex: number;
}
export function Modal({
  isOpen,
  onClose,
  currentImage,
  onPrevious,
  onNext,
  hasNext,
  hasPrevious,
  totalImages,
  currentImageIndex
}: ModalProps) {
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (!isOpen) return;
    switch (event.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        if (hasPrevious) onPrevious();
        break;
      case 'ArrowRight':
        if (hasNext) onNext();
        break;
    }
  }, [isOpen, onClose, onPrevious, onNext, hasNext, hasPrevious]);
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);
  if (!isOpen || !currentImage) return null;
  return <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white z-50 p-2" aria-label="Close modal">
          <XIcon size={24} />
        </button>
        {/* Navigation buttons */}
        {hasPrevious && <button onClick={onPrevious} className="absolute left-4 text-white/70 hover:text-white z-50 p-2" aria-label="Previous image">
            <ChevronLeftIcon size={36} />
          </button>}
        {hasNext && <button onClick={onNext} className="absolute right-4 text-white/70 hover:text-white z-50 p-2" aria-label="Next image">
            <ChevronRightIcon size={36} />
          </button>}
        {/* Image container */}
        <div className="w-full h-full p-8 flex flex-col items-center justify-center">
          <div className="relative max-w-7xl w-full h-full">
            <img src={currentImage.url} alt={currentImage.title} className="w-full h-full object-contain" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-white text-xl font-bold mb-2">
                {currentImage.title}
              </h3>
              <p className="text-gray-300 text-sm">
                Image {currentImageIndex + 1} of {totalImages}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}