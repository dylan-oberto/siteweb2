import React from 'react';

interface GalleryImage {
  before?: string;
  after?: string;
  image?: string;
  caption: string;
  description?: string;
}

interface ServiceGalleryProps {
  images: GalleryImage[];
}

const ServiceGallery = ({ images }: ServiceGalleryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((item, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg group">
          {item.before && item.after ? (
            // Before/After comparison
            <div className="relative h-64">
              <img
                src={item.after}
                alt="Après"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 w-1/2 overflow-hidden group-hover:w-0 transition-all duration-500">
                <img
                  src={item.before}
                  alt="Avant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Avant / Après
                </span>
              </div>
            </div>
          ) : (
            // Single image
            <div className="relative h-64">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{item.caption}</h3>
            {item.description && (
              <p className="text-gray-600 text-sm">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceGallery;