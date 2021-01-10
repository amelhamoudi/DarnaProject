export default function Project(props){
    return(
    <div class="portfolio-wrap">
        <img src={props.project.path_image}  class="img-fluid" alt=""/>
        <div class="portfolio-info">
          <p>{props.project.description_projet}</p>
          <div class="portfolio-links">
            <a href={props.project.path_image} data-gall="portfolioGallery" class="venobox" title="App 1"><i class="icofont-eye"></i></a>
            <a href="portfolio-details.html" title="More Details"><i class="icofont-external-link"></i></a>
          </div>
        </div>
      </div>
    )
}