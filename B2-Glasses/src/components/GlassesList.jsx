function GlassesList({ glasses, selectedId, onSelectGlasses }) {
  return (
    <div>
      <div className="row gx-3 gy-3 justify-content-center">
        {glasses.map((item) => (
          <div key={item.id} className="col-4 col-sm-3 col-md-2">
            <div
              onClick={() => onSelectGlasses(item)}
              className="card h-100 shadow-sm"
              style={{
                border: selectedId === item.id ? '3px solid #ff9900' : '2px solid #ddd',
                backgroundColor: selectedId === item.id ? '#fff8f0' : 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderRadius: '10px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div className="card-body text-center p-2" style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={item.url}
                  alt={item.name}
                  className="img-fluid"
                  style={{ maxHeight: '80px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GlassesList;
