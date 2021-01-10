export default function Footer(){
    return(
        <footer class="footer-area section-gap">
        <div class="container">
          <div class="row">
            <div class="col-lg-3  col-md-6 col-sm-6">
              <div class="single-footer-widget">
                <h6>About Us</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore
                  magna aliqua.
                </p>
              </div>
            </div>
            <div class="col-lg-4  col-md-6 col-sm-6">
              <div class="single-footer-widget">
                <h6>Newsletter</h6>
                <p>Restez à jour avec nos dernières</p>
                <div class="" id="mc_embed_signup">
    
                  <form target="_blank" novalidate="true"
                   method="get" class="form-inline">
    
                    <div class="d-flex flex-row">
    
                      <input class="form-control" name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '"
                       required="" type="email" />
    
    
                      <button class="click-btn btn btn-default"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                      <div style={{ position: "absolute", left: "-5000px"}}>
                        <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text"/>
                      </div>
    
                      <div class="col-lg-4 col-md-4">
                            <button class="bb-btn btn"><span class="lnr lnr-arrow-right"></span></button>
                          </div>  
                    </div>
                    <div class="info"></div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-3  col-md-6 col-sm-6">
              <div class="single-footer-widget mail-chimp">
                <h6 class="mb-20">Instragram Feed</h6>
                <ul class="instafeed d-flex flex-wrap">
                  <li><img src="assets/img/instagram/i1.jpg" alt=""/></li>
                  <li><img src="assets/img/instagram/i2.jpg" alt=""/></li>
                  <li><img src="assets/img/instagram/i3.jpg" alt=""/></li>
                  <li><img src="assets/img/instagram/i4.jpg" alt=""/></li>
                  <li><img src="assets/img/instagram/i5.jpg" alt=""/></li>
                  <li><img src="assets/img/instagram/i6.jpg" alt=""/></li>
                  <li><img src="assets/img/instagram/i7.jpg" alt=""/></li>
                  <li><img src="assets/img/instagram/i8.jpg" alt=""/></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-6">
              <div class="single-footer-widget">
                <h6>Follow Us</h6>
                <p>Let us be social</p>
                <div class="footer-social d-flex align-items-center">
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                  <a href="#"><i class="fa fa-behance"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
            <p class="footer-text m-0">Copyright <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="#" target="_blank">Darna</a> </p>
          </div>
        </div>
      </footer>
    )
}