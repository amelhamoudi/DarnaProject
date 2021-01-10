import { fetchActions } from "../../actions/Actions.action";
import Pagination from "../Pagination/Pagination";
import BlogSideBar from "./BlogSideBar";
import React,{useEffect} from 'react';

import {connect } from 'react-redux'
import ActionNew from "./ActionNew";

function Blog({actions, fetchActions}){
    return(
        <section class="blog-post-area section-gap relative">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
            {
                                  
                               
                                  actions && actions.map( (action) => {
                                   
                                    return(
                                      <ActionNew 
                                        key={action.id_Action} 
                                        objectif={action} />
                                    )
                                                    
                                  
                                 }) 
                                 
                                }

             


              <div class="col-lg-6 col-md-6">
                <div class="single-amenities">
                  <div class="amenities-thumb">
                    <img
                      class="img-fluid w-100"
                      src="assets/img/blog-post/blog-post2.jpg"
                      alt=""
                    />
                  </div>
                  <div class="amenities-details">
                    <h5>
                      <a href="#"
                        >There's goting to be a musical about meghan
                      </a>
                    </h5>
                    <div class="amenities-meta mb-10">
                      <a href="#" class=""
                        ><span class="ti-calendar"></span>20th Nov, 2018</a
                      >
                      <a href="#" class="ml-20"
                        ><span class="ti-comment"></span>05</a
                      >
                    </div>
                    <p>
                      Creepeth green light appear let rule only you're divide
                      and lights moving and isn't given creeping deep.
                    </p>
                    <br></br>
                    <button class="btn btn-info"> Inscrire</button>
                    <div class="d-flex justify-content-between mt-20">
                      <div>
                        <a href="#" class="blog-post-btn">
                          Read More <span class="ti-arrow-right"></span>
                        </a>
                      </div>
                      <div class="category">
                        <a href="#">
                          <span class="ti-folder mr-1"></span> Travel
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
           
         
                
               
              </div>
            </div>
            <Pagination></Pagination>
          </div>
          <BlogSideBar></BlogSideBar>
          </div>
           </div>
            </section>
     

    )
}


const mapStateToProps = state => {
    return {
      actions : state.ActionData.data
      
    }
    
  
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchActions : () => dispatch(fetchActions())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Blog);
  