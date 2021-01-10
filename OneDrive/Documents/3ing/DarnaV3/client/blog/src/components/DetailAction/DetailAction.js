import React,{useEffect} from 'react';
import BannerArea from './Banner/BannerArea';
import CommentList from './Banner/CommentList/CommentList';
export default function DetailAction(){
    return(
        <body>
        <BannerArea></BannerArea>
        <section class="blog_area section-gap single-post-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                       <div class="main_blog_details">
                           <img class="img-fluid" src="https://lasultanemag.tn/wp-content/uploads/2020/06/DarnaCup-2.jpg" alt=""/>
                           <a href="#"><h4>DARNA CUP 2: LE SPORTIF POUR L’ASSOCIATIF </h4> </a>
                           <div class="user_details">
                               <div class="float-left">
                                   <a href="#">Inscrire</a>
                                   <a href="#">Commenter</a>
                               </div>
                               <div class="float-right mt-sm-0 mt-3">
                                   <div class="media">
                                       <div class="media-body">
                                           
                                           <p>12 Dec, 2017 11:21 am</p>
                                       </div>
                                       <div class="d-flex">
                                           <img src="img/blog/user-img.jpg" alt=""/>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <p>Le Samedi 14 Mai 2016, l’association caritative DARNA  organisera, pour la  deuxième année consécutive  l’évènement DARNAcup. DARNA est une association qui cherche à venir en  aide aux  enfants abandonnés n’ayant pas encore trouvé de soutien familial. À cette occasion l’association DARNA souhaite sensibiliser le monde à sa cause, en vue de pourvoir créer des unités de vie et procurer des foyers avec  les prises en charge dont les enfants ont besoin.</p>
                        <blockquote class="blockquote">
                            <p class="mb-0"> 
                            En Tunisie, les enfants abandonnés  sont pris en charge par l’INPE (Institut national de protection de l’enfance. Ils sont soit adoptés par des familles de substitution, soit recueillies au sein d’une pouponnière associative jusqu’à ce que viennent leurs tour.

Cependant, après quelques temps passé à l’INPE certains enfants ne parviennent pas à trouver de famille, en particulier ceux qui souffrent de légers handicaps. C’est dans ce contexte que DARNA a été fondée en mars 2014.
                            </p>
                        </blockquote>
                        <p>Les enfants sont des adeptes de foot. C’est pourquoi l’année dernière un mini-tournoi de foot a été organisé pour faire connaître l’association : DARNAcup. De nombreuses célébrités se sont prêtées au jeu devant les enfants autour d’un match de football. L’évènement était ouvert au public de tout âge.

Cette année encore l’évènement DARNAcup  sera organisé pour sa deuxième édition, avec de nouvelles activités divertissantes pour encore beaucoup plus de distractions. Au programme: un mini tournoi de football en partenariat avec l’association des anciens joueurs de l’équipe nationale et une partie de Babyfoot Humain avec des personnalités publiques tunisiennes du showbiz et du sport. De plus, le jeu de  piñata sera installé pour les enfants et un DJ se produira entre les pauses des matchs pour animer l’évènement.</p>
                          <div class="news_d_footer flex-column flex-sm-row">
                              <a href="#"><i class="lnr lnr lnr-heart"></i>Lily and 4 people like this</a>
                              <a class="justify-content-sm-center ml-sm-auto mt-sm-0 mt-2" href="#"><i class="lnr lnr lnr-bubble"></i>06 Comments</a>
                              <div class="news_socail ml-sm-auto mt-sm-0 mt-2">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-youtube-play"></i></a>
                                <a href="#"><i class="fa fa-pinterest"></i></a>
                                <a href="#"><i class="fa fa-rss"></i></a>
                            </div>
                          </div>
                       </div>
                       <div class="navigation-area">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                                <div class="thumb">
                                    <a href="#"><img class="img-fluid" src="img/blog/prev.jpg" alt=""/></a>
                                </div>
                                <div class="arrow">
                                    <a href="#"><span class="lnr text-white lnr-arrow-left"></span></a>
                                </div>
                                <div class="detials">
                                    <p>Prev Post</p>
                                    <a href="#"><h4>Action darna 3</h4></a>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                                <div class="detials">
                                    <p>Next Post</p>
                                    <a href="#"><h4>Action Darna 2</h4></a>
                                </div>
                                <div class="arrow">
                                    <a href="#"><span class="lnr text-white lnr-arrow-right"></span></a>
                                </div>
                                <div class="thumb">
                                    <a href="#"><img class="img-fluid" src="img/blog/next.jpg" alt=""/></a>
                                </div>										
                            </div>									
                        </div>
                    </div>
                    <div class="comments-area">
                        <h4>05 Comments</h4>
                        <div class="comment-list">
                            <div class="single-comment justify-content-between d-flex">
                                <div class="user justify-content-between d-flex">
                                    <div class="thumb">
                                        <img src="img/blog/c1.jpg" alt=""/>
                                    </div>
                                    <div class="desc">
                                        <h5><a href="#">Emilly Blunt</a></h5>
                                        <p class="date">December 4, 2017 at 3:12 pm </p>
                                        <p class="comment">
                                            Never say goodbye till the end comes!
                                        </p>
                                    </div>
                                </div>
                                <div class="reply-btn">
                                       <a href="" class="btn-reply text-uppercase">reply</a> 
                                </div>
                            </div>
                        </div>	
                        <div class="comment-list left-padding">
                            <div class="single-comment justify-content-between d-flex">
                                <div class="user justify-content-between d-flex">
                                    <div class="thumb">
                                        <img src="img/blog/c2.jpg" alt=""/>
                                    </div>
                                    <div class="desc">
                                        <h5><a href="#">Elsie Cunningham</a></h5>
                                        <p class="date">December 4, 2017 at 3:12 pm </p>
                                        <p class="comment">
                                            Never say goodbye till the end comes!
                                        </p>
                                    </div>
                                </div>
                                <div class="reply-btn">
                                       <a href="" class="btn-reply text-uppercase">reply</a> 
                                </div>
                            </div>
                        </div>	
                      
                       
                    </div> </div>
                   <CommentList></CommentList>
                </div>
                
              
            </div>
        

    </section>
    </body>
    )
}