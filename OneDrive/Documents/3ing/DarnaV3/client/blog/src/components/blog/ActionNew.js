export default function ActionNew(props){
    return(
        <div class="col-lg-6 col-md-6">
        <div class="single-amenities">
          <div class="amenities-thumb">
            <img
              class="img-fluid w-100"
              src={props.action.path_photo}
              alt=""
            />
          </div>
          <div class="amenities-details">
            <h5>
              <a href="#"
                >{props.action.nom_action}
              </a>
            </h5>
            <div class="amenities-meta mb-10">
              <a href="#" class=""
                ><span class="ti-calendar"></span>{props.action.datedebut_action}</a
              >
              <a href="#" class="ml-20"
                ><span class="ti-comment"></span>à {props.action.datefin_action} </a
              >
            </div>
            <p>
             {props.action.description_action}
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
                  <span class="ti-folder mr-1"></span> {props.action.etat_action}
                </a>
              </div>
            </div>
          </div>
        </div>

    


       
      </div>

    )
}