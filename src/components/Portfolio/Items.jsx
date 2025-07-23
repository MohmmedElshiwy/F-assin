import React from 'react'

export default function Items({ item, onClick }) {
  return (
    <div
      className={`item position-relative ${item.bg} p-5 overflow-hidden`}
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      <img src={item.img} className="w-100 rounded-circle" alt="" />

      <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ background: "rgba(0,0,0,0.4)" }}>
        <i className="fa-solid fa-plus text-light" style={{ fontSize: 40 }}></i>
      </div>
    </div>
  );
}
