import React from "react";
import recieps from "../recipes";
import Swal from "sweetalert2";
const Menu = () => {
  const handleOrder = (id) => {
    Swal.fire({
      title: "are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, order it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Ordered", "Your Order has been processing.", "success");
      }
    });
  };
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This week specials!</h2>
        <button>Order Menu</button>
      </div>

      {/* menu-card */}
      <div className="cards">
        {recieps.map(({ id, title, image, price, description }) => {
          return (
            <div key={id} className="menu-items">
              <img src={image} alt={title} />
              <div className="menu-content">
                <div className="heading">
                  <h2>{title}</h2>
                  <p>{price}</p>
                </div>
                <p>{description}</p>
                <button
                  className="orderbtn"
                  onClick={() => handleOrder(id, title)}
                >
                  Order Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;