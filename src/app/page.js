"use client"

import React, { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  // Function to handle file selection
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log(file,'file')
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result); // Set the base64 URL of the image
      };
      reader.readAsDataURL(file); // Convert the file to a base64 string
    }
  };

  console.log(image,'image');

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='h-[300px] w-[400px]'>
        {/* File Input */}
        <input 
          type='file' 
          accept='image/*' 
          onChange={handleImageUpload} 
          className='mb-4'
        />

        {/* Image Preview Box */}
        <div className='h-[250px] w-[200px] border border-black'>
          {image ? (
            <img src={image} alt='Uploaded Preview' className='h-full w-full object-cover' />
          ) : (
            <p className='text-center mt-[100px]'>No Image</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
