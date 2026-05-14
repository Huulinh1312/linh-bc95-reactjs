import React from 'react';

export default function Item() {
  return (
    <div className="card h-100">
      <img className="card-img-top" src="https://placehold.co/500x325/e0e0e0/666666?text=500+x+325" alt="..." />
      <div className="card-body text-center p-4">
        <h4 className="card-title fw-bold">Card title</h4>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.
        </p>
      </div>
      <div className="card-footer bg-transparent border-top-0 p-4 pt-0 text-center">
        <a href="#!" className="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  );
}
