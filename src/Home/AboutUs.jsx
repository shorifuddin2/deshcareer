import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold px-20">About Us</h1>
           <div className="text-0 w-2/3 px-20 font-xl">
           <p className="py-3">Desh Career is Career based newsletter in Bengali language. This newsletter has published weekly. This is published in every Saturday at 12.00 PM.</p>
            <p className="py-2">We focus on Career trend, news, smart job etc.</p>
            <p className="py-2">If you want to contact us: you can send an email to <Link className=" hover:link text-blue-500">contact.deshcareer@gmail.com</Link></p>
            <p className="py-2">If you want to meet with us, you can come to our office based on an appointment. </p>
            <p className="py-2">Our Office address:</p>
            <p className="py-2">House: 13/3,</p>
            <p className="py-2">Road: 2,</p>
            <p className="py-2">Shyamoly, Dhaka-1207</p>
            <p className="py-2">+8801880811047</p>
           </div>
        </div>
    );
};

export default AboutUs;