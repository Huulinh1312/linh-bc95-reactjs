import React from "react";

export const ProductCart = (props) => {
  const { cart } = props;

  return (
    <div id="product-cart-modal" className="modal" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Giỏ Hàng</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <table className=" table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Thành tiền</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <img src={item.image} alt={item.name} className="w-20" />
                    </td>
                        <td>
                                            <button className="btn btn-outline-danger">-</button>{' '}
                                            {item.cartQuantity}{' '}
                                            <button className="btn btn-outline-success">+</button>
                                        </td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price * item.quantity}</td>
                    <td>
                      <button className="btn btn-danger">Xóa</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
