import React, { useRef } from "react";
import "./contact.css"
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_p42y1ho', 
        'template_omey387', 
        form.current, 
        'nYlMugt9MwzROyHj_')
      .then(
        (result) => {
          console.log(result.text);
        }, 
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };
  return (
    
      <section className="contact">
        <div className="content"> 
          <h2 className="--text-center">Contact Us</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit qui autem nulla obcaecati architecto voluptate, in repellendus repellat consequatur, explicabo aperiam vero! Nostrum voluptatibus, deserunt dicta nesciunt in sequi quasi expedita ea animi laborum eum commodi, qui dolorum quidem sapiente ad pariatur vero enim possimus esse molestias temporibus? Quisquam, aliquid.</p>
        </div>
        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
              <div className="text">
                  <h3>Address</h3>
                  <p>9271 ATM bar Road,</p>
                  <p>Owatonna, Minnesota, </p>
                  <p>55060</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
              <div className="text">
                  <h3>Phone</h3>
                  
                  <p>01996666834</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><i class="fa fa-envelope" aria-hidden="true"></i></div>
              <div className="text">
                  <h3>Email</h3>
                  <p>sumaiyajannati200207@gmail.com</p>
              </div>
            </div>
          </div>
        <div className="contactForm">
         <form ref={form} onSubmit={sendEmail} className="--form-control --card --flex-center --dir-column">
           <div className="inputBox">
           <input type="text"
            placeholder="Full Name"
            name="user_name" required/>
           </div>

            <div className="inputBox">
            <input type="email"
            placeholder="Email"
            name="user_email" required/>
            </div>

            <div className="inputBox">
            <input type="text"
            placeholder="Subject"
            name="subject" required/>
            </div>

            <div className="inputBox">
            <textarea name="message" cols="30"
            rows="10"></textarea>
            </div>
            
            <div className="inputBox">
            <button type="submit" className="--btn --btn-primary">Send</button>
      
            </div>
            </form>
        </div>
      </div>
      </section>
      
  );
}
export default Contact;
