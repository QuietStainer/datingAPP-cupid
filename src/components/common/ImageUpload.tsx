// src/components/ImageUpload.tsx
import React, { useState } from 'react';
interface sizeProps {
  size:string
}
const ImageUpload: React.FC<sizeProps> = ({size}) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // const handleRemoveImage = () => {
  //   setSelectedImage(null);
  //   setPreviewUrl(null);
  // };

  return (
    <div className="flex flex-col items-center justify-center">
      <label className={`w-${size} h-${size} flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer`}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Selected Preview"
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <span className="text-white text-4xl bg-[#FF5069] rounded-full px-2">+</span>
        )}
      </label>
    </div>
  );
};

export default ImageUpload;
