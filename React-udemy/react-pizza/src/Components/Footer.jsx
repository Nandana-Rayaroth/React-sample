import React from "react";

function Footer(){

    const openHour = 12
    const closeHour = 22
    const Hour = new Date().getHours()
    const isOpen = Hour >= openHour && Hour <= closeHour    

    return (
      <footer className="footer">
        <div className="order">
          {isOpen ? (
            <>
              <p>
                We are open from {openHour}:00 to {closeHour}:00. Come visit us
                or order online.
              </p>
              <button className="btn">Order</button>
            </>
          ) : (
            <>
              We're happy to welcome you between {openHour}:00 and {closeHour}
              :00.
            </>
          )}
        </div>
      </footer>
    );
}

export default Footer