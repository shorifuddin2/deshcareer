import { Link } from "react-router-dom";
import Logo from "../assets/short-logo.png"

const Header = () => {
    return (
        <div className="">
              <div className="navbar bg-base-100 shadow ">
                <div className="navbar-start">
                  <Link className="w-[200px] h-[100px] p-5"><img src={Logo} /></Link>
                  <div className="dropdown">
                    <label tabIndex={0} className=" btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu menu-lx dropdown-content mt-5 p-5 bg-base-100 ">
                    <li><Link to="/" className=" font-bold mx-auto  hover:link-error">Home</Link></li>
                    <li><Link className=" font-bold mx-auto  hover:link-error">Privacy Policy</Link></li>
                    <li><Link className=" font-bold mx-auto  hover:link-error">Terms Condition</Link></li>
                    <li><Link to="/aboutus" className=" font-bold mx-auto  hover:link-error">About Us</Link></li>
                    <li><Link className=" font-bold mx-auto  hover:link-error">Contact Us</Link></li>
                    <li><Link className=" font-bold mx-auto  hover:link-error">Advertise</Link></li>
                      <li><Link className=" btn-secondary m-2 py-3 px-5 ">Join Now</Link></li>
                    </ul>
                  </div>
               
                </div>
                <div className="navbar-center mt-6 ml-10 hidden lg:flex">
                  <ul className="menu menu-horizontal">
                    <li><Link to="/" className="font-bold  hover:link-error ">Home</Link></li>
                    <li><Link className="font-bold  hover:link-error ">Privacy Policy</Link></li>
                    <li><Link className="font-bold  hover:link-error ">Terms Condition</Link></li>
                    <li><Link to="/aboutus" className="font-bold  hover:link-error ">About Us</Link></li>
                    <li><Link className="font-bold  hover:link-error ">Contact Us</Link></li>
                    <li><Link className="font-bold  hover:link-error active:bg-violet-700">Advertise</Link></li>
                    <li><Link className=" btn-secondary m-auto py-3 px-8 rounded font-bold">Join Fere</Link></li>
                  </ul>
                </div>
                    <div className="navbar-end">
                    </div>
              </div>
        </div>
    );
};

export default Header;