


import { FaFacebook } from "react-icons/fa";
import { FaInstagram,FaLinkedinIn } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

    const Footer = () => {
        return (
            <div className="bg-gray-950 text-white ">
              <div className="max-w-7xl mx-auto px-4 py-10">
                 <div className=" grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-14  ">
                <div className="space-y-3">
                    <h2 className='text-5xl text-center '> 
               
                         <FiBookOpen className="border border-2 rounded-full p-2 bg-gray-700" />
                
                    </h2>
                    <div className="space-y-3">
                        <h3 className="text-3xl">StudyNook</h3>
                        <p>Find and book the perfect study room for foucesd learing, 
                            group discussions,and productive study, sessions </p>
                        
                    </div>

                    
                   
                </div>
            <div className="space-y-3">
                <h3>Useful Links</h3>
                <ul className="space-y-3">
                    <li>Home</li>
                    <li>Rooms</li>
                    <li>Contact Us</li>
                   
                </ul>
            </div>
             <div className="space-y-3">
            <h2 className="text-2xl">Contact Us</h2>
            <p>Email: 📧support@studynook.com</p>
            <p>Phone: 📞+880 1xxxxxxx</p>
            
            </div>
            <div className="space-y-3">
            <h2 className="text-2xl">Social Links</h2>
            <div className="flex gap-3 mr-3">
           
            <FaFacebook size={28}/>
            <FaInstagram size={28}/>
              <FaXTwitter size={28}/>
               <FaLinkedinIn size={28}/>
            </div>
            </div>
            </div>
                      <div className="mt-4">
                <hr />
            </div>
            <div className="">
                <p className="text-center mt-2 py-3">@2026 studynook .All rights reversed</p>
            </div>
                </div> 
           
           
           
    </div>
        );
    };
    export default Footer;

   
  
