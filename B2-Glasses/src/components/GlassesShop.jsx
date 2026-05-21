import { useState } from 'react';
import GlassesPreview from './GlassesPreview';
import GlassesList from './GlassesList';
import glassesData from '../data/glassesData.json';

function GlassesShop() {
  const [selectedGlasses, setSelectedGlasses] = useState(glassesData[0]);

  const handleSelectGlasses = (glasses) => {
    setSelectedGlasses(glasses);
  };

  return (
    <div style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      paddingTop: '20px',
      paddingBottom: '40px',
      position: 'relative'
    }}>
      {/* Overlay for better text visibility */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: -1,
        pointerEvents: 'none'
      }}></div>

      {/* Title */}
      <h1 className="text-center text-white mb-5" style={{ fontSize: '3rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
        TRY GLASSES APP ONLINE
      </h1>

      {/* Preview Section */}
      <GlassesPreview selectedGlasses={selectedGlasses} />

      {/* List Section */}
      <div className="container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: '15px', padding: '30px', marginTop: '40px' }}>
        <h2 className="text-center mb-4 fw-bold" style={{ color: '#333', fontSize: '1.8rem' }}>
          Choose Your Glasses
        </h2>
        <GlassesList
          glasses={glassesData}
          selectedId={selectedGlasses.id}
          onSelectGlasses={handleSelectGlasses}
        />
      </div>
    </div>
  );
}

export default GlassesShop;
