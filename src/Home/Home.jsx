import { BsFillEnvelopeFill } from "react-icons/bs";

const Home = () => {
    return (
        <div className="w-2/3 ml-8">
            <h1 className="text-5xl m-5 p-5 font-bold">Get Smarter about your<br/> career</h1>
            
            <p className="font-20 m-5 ">Get the <span className="font-bold">5-minute newsletter</span> keeping about smart career</p>

           

           
            <div className="card shadow-2xl w-96 lg-m-2">
                <label className="flex">
                    <span className="bg-gray-300"><BsFillEnvelopeFill className="w-12 h-12 p-1 bg-white rounded "/></span>
                    <input type="text" placeholder="Your E-mail address" className="input input-bordered " required />
                    <a className="btn btn-secondary w-16 text-sm h-auto">Join Fere</a>
                </label>
            </div>

           
            
            < p className="m-5 w-2/3">We're committed to your privacy. DashCareer uses the information you provide to contact you about our relevant content and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.</p>
        </div>
    );
};

export default Home;