import Logo from "../assets/Logo.svg"
import Cart from "../assets/Cart.svg"
export default function NavBar() {

  return (
    <div className="p-10 mx-10">
      <nav className=" flex justify-between items-center">
        <img src={Logo} />
        <div className="flex gap-10 items-center">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact</a>
          <a href="#">
            <img className="w-10" src={Cart} />
          </a>
          <button className="rounded-full p-4 bg-white text-slate-900 font-bold">Booking Now</button>
        </div>
      </nav>
    </div>
  );
}
