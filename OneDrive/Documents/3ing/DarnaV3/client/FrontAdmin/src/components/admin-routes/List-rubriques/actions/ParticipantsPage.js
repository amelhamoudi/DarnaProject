import React,{useState,useEffect}from 'react';
import {  Link } from 'react-router-dom';
import ParticipantsList from "./ParticipantsList"
import '../../List-members/Member.css'

export default function MembersPage() {

    return (
  <div class="wrapper ">
    
  <div className="main-panel">
    
    <div className="content">
       
      <div className="container-fluid">
              
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header card-header-primary">
                <h4 className="card-title "> Participants</h4>
                <p className="card-category"> La liste des participants</p>
              </div>
              <ParticipantsList/>
            </div>
          </div>
        
        </div>
      </div>
    </div>
    
  </div>
</div>
       
    );
}
