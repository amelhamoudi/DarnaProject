import React, { useState } from  'react'
import '../../../List-members/Member.css'
import {connect } from 'react-redux'
import { editSponsor, deleteSponsor } from '../../../../../actions/rubriques.actions'




function Sponsor(props){

    const [updateMode, setUpdateMode] = useState(false)
    const [idToUpdate, setidToUpdate] = useState(props.sponsor.id_Sponsor)
    const [IntituléToUpdate, setIntituléToUpdate] = useState(props.sponsor.intitule_sponsor)
    const [LogoToUpdate, setLogoToUpdate] = useState(props.sponsor.logo)
    const [pathToUpdate, setPathToUpdate] = useState(props.sponsor.path_logo)

  


    
   
    const handleDelete = (id) => {
        props.onDelete(id)     
    }
    const handleUpdate = () => {
        props.onUpdate(
            {
                id_Sponsor: props.sponsor.id_Sponsor,
                intitule_sponsor: IntituléToUpdate,
                logo: LogoToUpdate,
                path_logo: pathToUpdate
                
            })
        setUpdateMode(false)
        
    }
    

    return(
        <>
        {!updateMode ? (
            <>
        
            
                <tr>
                        <td>
                            {props.sponsor.id_Sponsor}
                        </td>
                        <td>
                            {props.sponsor.intitule_sponsor}
                        </td>
                        <td>
                            {/* {props.sponsor.logo} */}
                            <img  src="https://www.livenewsalgerie.com/wp-content/uploads/2017/04/LOGO-Ooredoo1-790x347-660x330.jpg"
                                   ></img>
                        </td>
                        {/* <td>
                            {props.sponsor.path_logo}
                        </td> */}
                       
                        
                       
                        
                        <td>
                           <i className="material-icons  button" onClick={()=>setUpdateMode(true)} >edit</i>
                        </td>
                        <td>
                           <i className="material-icons button" onClick={()=>handleDelete(props.sponsor.id_Sponsor)} >delete</i>
                        </td>
                        
                </tr>
            </>
            ) : (
                <>
                    <tr>
                        <td>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="id" value={props.sponsor.id_Sponsor}
                                            disabled />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="intitule" value={IntituléToUpdate}
                                        onChange={(e) => setIntituléToUpdate(e.target.value)}  />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="id" value={LogoToUpdate}
                                         onChange={(e) => setLogoToUpdate(e.target.value)}     />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"  name="id" value={pathToUpdate}
                                             onChange={(e) => setPathToUpdate(e.target.value)} />
                                </div>
                            </div>
                        </td>
                        
                        <td>
                            <button className="btn btn-success" onClick={handleUpdate}>Mettre à jour</button>
                        </td>
                        <td>
                        <button  className="btn btn-default" onClick={()=>setUpdateMode(false)}>Cancel</button>
                        </td>
                 </tr>
                </>
        
        
        
               )}
                </>

                     
    )


}

const mapStateToProps = state => {
    return {
        sponsors : state.data
      
    }
    console.log("state", state);
  
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onUpdate : (sponsor) => dispatch(editSponsor(sponsor)), 
        onDelete : (id_Sponsor) => dispatch(deleteSponsor(id_Sponsor))
    }
  };
  
export default connect(mapStateToProps,mapDispatchToProps)(Sponsor);