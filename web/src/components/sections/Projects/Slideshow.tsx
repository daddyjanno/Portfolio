import styles from './Slideshow.module.scss';

interface SlideshowProps {
  images: string[];
  title: string;
  currentIndex?: number;
  onIndexChange?: (index: number) => void;
  onImageClick?: () => void;
}

export const Slideshow: React.FC<SlideshowProps> = ({
  images,
  title,
  currentIndex = 0,
  onIndexChange,
  onImageClick,
}) => {
  // Show navigation controls only if there are multiple images
  const showControls = images.length > 1;

  // Check if we're at the first or last slide
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === images.length - 1;

  // Handle left navigation with circular logic
  const handlePrevious = () => {
    if (!onIndexChange) return;

    if (isFirstSlide) {
      onIndexChange(images.length - 1);
    } else {
      onIndexChange(currentIndex - 1);
    }
  };

  // Handle right navigation with circular logic
  const handleNext = () => {
    if (!onIndexChange) return;

    if (isLastSlide) {
      onIndexChange(0);
    } else {
      onIndexChange(currentIndex + 1);
    }
  };

  return (
    <div className={styles.container}>
      {/* Left Arrow */}
      {showControls && (
        <button
          className={styles.arrow}
          onClick={handlePrevious}
          aria-label="Previous image"
          title="Image précédente"
        >
          ❮
        </button>
      )}

      {/* Main Image */}
      <div className={styles.imageContainer}>
        <img
          src={images[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          className={styles.image}
          onClick={onImageClick}
        />
      </div>

      {/* Right Arrow */}
      {showControls && (
        <button
          className={styles.arrow}
          onClick={handleNext}
          aria-label="Next image"
          title="Image suivante"
        >
          ❯
        </button>
      )}

      {/* Image Counter */}
      {showControls && (
        <div className={styles.counter}>
          {currentIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
};
