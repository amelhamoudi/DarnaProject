import React , { useState,useRef }from "react";
import { useSelector,useDispatch } from 'react-redux'

import { connect } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input"

import { addSponsor } from "../../../../../actions/rubriques.actions";

function CreateSponsor(){
    const [intitule_sponsor, setIntitule] = useState("")
    const [logo, setFile] = useState("")
    // const [loading, setLoading] = useState(false)
    
    const [successful,setSuccessful]=useState(false);


    // const {message} = useSelector(state => state.messageReducer)
    const message = "Ajout avec succès"
    const dispatch = useDispatch()
    const form = useRef();

    


    const required = (value) => {
        if (!value) {
          return (
            <div className="alert alert-danger" role="alert">
              Ce champ est obligatoire !
            </div>
          );
        }
      };

      const handleAdd = e => {
        e.preventDefault()
        var formData = new FormData();
        formData.append('intitule_sponsor', intitule_sponsor);
        formData.append( 
            "logo", 
            logo, 
            logo.name 
          ); 
          
        // for (var value of formData.values()) {
        // console.log(value); 
        // }
        // debugger;
        form.current.validateAll();
            dispatch(
                addSponsor(formData)
              )
              .then(() => {
                setSuccessful(true);
                
              })
              .catch(() => {
                setSuccessful(false)
              });
      }
      
   
      
    //   const handleAdd=(e) =>{
    //     e.preventDefault();
    //     setSuccessful(false);
    //     const data = new FormData(form.current)
    //     console.log("hhhhh",data)
    //     debugger
    //     form.current.validateAll();
    //         dispatch(
    //             addSponsor()
    //           )
    //           .then(() => {
    //             setSuccessful(true);
    //             // console.log("message",message)
    //             // debugger
    //           })
    //           .catch(() => {
    //             setSuccessful(false)
    //           });
     
    //   }


      return (
        <>
         <div className="wrapper ">
    
            <div className="main-panel">
    
           
          
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card card-profile">
                        <div className="card-header card-header-primary">
                          <h4 className="card-title">Ajouter un sponsor</h4>
                        </div>
                    <div className="card-body">
                        
                    {successful && message && (
                          <div className="form-group">
                            <div className={successful
                                  ? "alert alert-success"
                                  : "alert alert-danger"
                              }
                              role="alert"
                            >
                              {message}
                            </div>
                          </div>
                            )}
                      <Form  ref={form}>
                       
                          <div>
                          
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                <Input
                                    aria-label="intitule"
                                    type="text"
                                    className="form-control"
                                    name="intitule"
                                    placeholder="Intitulé sponsor"
                                    value={intitule_sponsor}
                                    onChange={(e) => setIntitule(e.target.value)}
                                  />
                                  
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                              <div className="form-group">
                                </div>
                                <Input  type="file" onChange={(e) => setFile(e.target.files[0])} />
                                {/* <img src={logo} />  */}
                                  
                              </div>
                            </div>
                            <br/>
                            <button 
                            data-testid="signupbtn" 
                            type="submit"
                            className="btn btn-round" 
                            onClick={handleAdd}>
                              Créer
                            </button>
                           
                          </div>
                        
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
            </div>
        </>
      );      
  }

 
export default CreateSponsor;