import { BsFillEnvelopeFill } from "react-icons/bs";

const Home = () => {
    return (
        <div className="w-50 mx-5">
            <h1 className="text-5xl m-5 font-bold">Get Smarter about your<br/> career</h1>
            
            <p className="font-20 m-5">Get the <span className="font-bold">5-minute newsletter</span> keeping about smart career</p>

            <div className="form-control ">
                <label className="input-group">
                    <span className="w-15 h-12"><BsFillEnvelopeFill/></span>
                    <input type="text" placeholder="Your E-mail address" className="input input-bordered" required />
                    <a className="btn-secondary  rounded font-bold">Join Fere</a>
                </label>
            </div>

            < p className="m-5">We're committed to your privacy. DashCareer uses the information you provide to contact you about our relevant content and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.</p>
        </div>
    );
};

export default Home;