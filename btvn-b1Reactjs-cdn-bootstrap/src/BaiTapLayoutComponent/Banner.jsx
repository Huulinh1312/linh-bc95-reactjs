import React from 'react';

export default function Banner() {
  return (
    <header className="py-5">
      <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
        <div className="m-4 m-lg-5">
          <h1 className="display-5 fw-bold" style={{ fontSize: '3rem' }}>A Warm Welcome!</h1>
          <p className="fs-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.
          </p>
          <a className="btn btn-primary btn-lg" href="#!">Call to action!</a>
        </div>
      </div>
    </header>
  );
}