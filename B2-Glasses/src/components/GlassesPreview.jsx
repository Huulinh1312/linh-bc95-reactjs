function GlassesPreview({ selectedGlasses }) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center align-items-stretch gx-5">
        {/* Người mẫu bên trái (Có thông tin kính) */}
        <div className="col-md-5">
          <div
            className="card bg-light shadow-lg position-relative overflow-hidden"
            style={{ borderRadius: "20px", minHeight: "380px" }}
          >
            <img
              src="/glassesImage/model.jpg"
              alt="Model Gốc"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", minHeight: "380px" }}
            />
            <div
              className="position-absolute bottom-0 start-0 w-100 text-white"
              style={{
                background: "rgba(255, 152, 0, 0.5)", /* Đã giảm từ 0.95 xuống 0.5 để làm trong suốt */
                padding: "1.5rem",
              }}
            >
              {selectedGlasses && (
                <>
                  <h5 className="fw-bold mb-2">{selectedGlasses.name}</h5>
                  <p className="small mb-3">{selectedGlasses.desc}</p>
                  {/* Đã đổi text-warning thành text-white cho dễ nhìn trên nền trong suốt */}
                  <h4 className="fw-bold text-white">
                    ${selectedGlasses.price}
                  </h4>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Người mẫu bên phải (Đeo kính) */}
        <div className="col-md-5">
          <div
            className="card bg-light shadow-lg position-relative overflow-hidden"
            style={{ borderRadius: "20px", minHeight: "380px" }}
          >
            <img
              src="/glassesImage/model.jpg"
              alt="Model Thay Đổi"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", minHeight: "380px" }}
            />
            {selectedGlasses && (
              <img
                src={selectedGlasses.url}
                alt={selectedGlasses.name}
                className="position-absolute"
                style={{
                  width: "300px",
                  height: "auto",
                  top: "34%", 
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                  opacity: 0.85,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlassesPreview;