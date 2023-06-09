import Logo from "../assets/short-logo.png"

const Header = () => {
    return (
        <div className="">
              <div className="navbar bg-base-100 shadow ">
                <div className="navbar-start">
                  <a className="w-[200px] h-[100px] p-5"><img src={Logo} /></a>
                  <div className="dropdown">
                    <label tabIndex={0} className=" btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu menu-lx dropdown-content mt-5 p-5 bg-base-100 ">
                    <li><a className=" mx-auto">Home</a></li>
                    <li><a className=" mx-auto">Privacy Policy</a></li>
                    <li><a className=" mx-auto">Terms Condition</a></li>
                    <li><a className=" mx-auto">About Us</a></li>
                    <li><a className=" mx-auto">Contact Us</a></li>
                    <li><a className=" mx-auto">Advertise</a></li>
                      <li><a className=" btn-secondary m-2 py-3 px-5 ">Join Now</a></li>
                    </ul>
                  </div>
               
                </div>
                <div className="navbar-center mt-6 ml-10 hidden lg:flex">
                  <ul className="menu menu-horizontal">
                    <li><a className=" ">Home</a></li>
                    <li><a className=" ">Privacy Policy</a></li>
                    <li><a className=" ">Terms Condition</a></li>
                    <li><a className=" ">About Us</a></li>
                    <li><a className=" ">Contact Us</a></li>
                    <li><a className=" ">Advertise</a></li>
                    <li><a className=" btn-secondary py-3 px-5">Join Now</a></li>
                  </ul>
                </div>
                    <div className="navbar-end">
                    </div>
              </div>
        </div>
    );
};

export default Header;