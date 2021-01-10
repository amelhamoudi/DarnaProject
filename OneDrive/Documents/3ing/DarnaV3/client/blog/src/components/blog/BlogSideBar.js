import Category from "../Category/Category";
import FollowUs from "../FollowUs/FollowUs";
import Instagram from "../Instagram/Instagram";
import Newsletter from "../Newslatter/Newslatter";
import PopularPost from "../PoPularPost/PopularPost";


export default function BlogSideBar(){
    return(
        <div class="col-lg-4 sidebar-widgets">
        <div class="widget-wrap">
          <div class="single-sidebar-widget search-widget">
            <form class="search-form" action="#">
              <input placeholder="Search Posts" name="search" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Posts'" />
              <button type="submit"><i class="fa fa-search"></i></button>
            </form>
          </div>

          <Instagram></Instagram>
         
          <PopularPost></PopularPost>
      
          
          <FollowUs></FollowUs>

        

         

         

            
          </div>
        </div>
     

    )
}