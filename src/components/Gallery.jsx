import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import FilterBar from './FilterBar';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentFilter, setCurrentFilter] = useState('All');

  const categories = ['All', 'Nature', 'People', 'Tech'];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('https://picsum.photos/v2/list?page=1&limit=20');
        const data = await res.json();

        const categorizedData = data.map((img, index) => {
          const category = categories[(index % (categories.length - 1)) + 1]; // Skip "All"
          return { ...img, category };
        });

        setImages(categorizedData);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const filteredImages = currentFilter === 'All'
    ? images
    : images.filter((img) => img.category === currentFilter);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <FilterBar
        categories={categories}
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
      />

      <div className="gallery">
        {filteredImages.map((img) => (
          <ImageCard key={img.id} image={img} />
        ))}
      </div>
    </>
  );
}

export default Gallery;
