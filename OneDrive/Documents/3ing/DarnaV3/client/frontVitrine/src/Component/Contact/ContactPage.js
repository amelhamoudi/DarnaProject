import React , {useEffect} from "react";

import {connect } from 'react-redux'

import { fetchContact } from '../../actions/Contact.action'

import ContactForm from "./ContactForm";

function ContactPage({contacts, fetchContact}){

    useEffect(() => {
        fetchContact()
       
      })
  
      
    return(
        <section id="contact" class="contact">
        <div class="container">
          <div class="section-title">
            <h2>Contact Us</h2>
          </div>
  
         

           
          {
                                  
                                  contacts && contacts.map( (contact) => {
                                   
                                    return(
                                      <div class="row">
                                      <div class="col-lg-6 d-flex align-items-stretch" data-aos="fade-up">
                                      <div class="info-box">
                                        <i class="bx bx-map"></i>
                                        <h3>Our Address</h3>
                                        <p>{contact.adresse}</p>
                                      </div>
                                    </div>
                          
                                    <div
                                      class="col-lg-3 d-flex align-items-stretch"
                                      data-aos="fade-up"
                                      data-aos-delay="100"
                                    >
                                      <div class="info-box">
                                        <i class="bx bx-envelope"></i>
                                        <h3>Email Us</h3>
                                        <p>
                                        {contact.email}
                                        </p>
                                      </div>
                                    </div>
                          
                                    <div
                                      class="col-lg-3 d-flex align-items-stretch"
                                      data-aos="fade-up"
                                      data-aos-delay="200"
                                    >
                                      <div class="info-box ">
                                        <i class="bx bx-phone-call"></i>
                                        <h3>Call Us</h3>
                                        <p>
                                        {contact.tél}
                                        </p>
                                      </div>
                                    </div>
                                    </div>
                                    )
                                                    
                                 }) 
                                } 

  
           
  
          
          <ContactForm></ContactForm>
        </div>
      </section>
    )
}


const mapStateToProps = state => {
    console.log(state)
    console.debug(state)
    
    return {
      contacts : state.ContactData.data
      
    }
    
  
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchContact : () => dispatch(fetchContact())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
  
  
  