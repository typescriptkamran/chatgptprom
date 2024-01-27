'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [savedImages, setSavedImages] = useState([]);
  const handleImageUpload = async (event:any) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleSaveImage = async () => {
    if (!selectedImage) {
      console.error('No image selected.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const dataUrl = reader.result;

      try {
        const response = await axios.post('/api/save-image', {
          files: [dataUrl],
        });

        console.log('Image saved:', response.data);
        // Refresh the list of saved images
        fetchSavedImages();
        alert('Image saved successfully!');
      } catch (error) {
        console.error('Error saving image:', error);
        alert('Error saving image. Please try again.');
      }
    };

    reader.readAsDataURL(selectedImage);
  };

  const fetchSavedImages = async () => {
    try {
      const response = await axios.get('/api/get-saved-images');
      setSavedImages(response.data);
    } catch (error) {
      console.error('Error fetching saved images:', error);
    }
  };

  useEffect(() => {
    // Fetch saved images when the component mounts
    fetchSavedImages();
  }, []);

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={handleSaveImage}>Save Image</button>

      <div>
        <h2>Saved Images Thumbnails:</h2>
        <div>
          {savedImages.map((image, index) => (
            <img
              key={index}
              src={`/uploads/${image}`} // Update with the correct path
              alt={`Thumbnail ${index + 1}`}
              style={{ maxWidth: '100px', maxHeight: '100px', margin: '5px' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;

