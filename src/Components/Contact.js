import React, { Component } from 'react';
import ContactForm from "./ContactForm.js";

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var postal = this.props.data.address.postal;
      var country = this.props.data.address.country;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">
               <ContactForm/>
           </div> 
            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {postal}<br />
                     {country}<br />
					   </p>

				   </div>

            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
