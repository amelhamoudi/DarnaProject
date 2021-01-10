import react, { useEffect } from "react";

import { fetchContact } from "../../actions/Contact.action";

import { connect } from "react-redux";

function FollowUs({ contacts, fetchContact }){
  useEffect(() => {
    fetchContact();
  });

    return(
        <div class="single-sidebar-widget share-widget">
              <h4 class="share-title">Abonnez-vous </h4>
              {contacts &&
         contacts.map((contact) => {
          return (
              <div class="social-icons mt-20">
                <a href={contact.lien_FB}>
                  <span class="ti-facebook"></span>
                </a>
                <a href={contact.lien_Twitter}>
                  <span class="ti-twitter"></span>
                </a>
                <a href={contact.lien_Youtube}>
                  <span class="ti-youtube"></span>
                </a>
                <a href={contact.lien_Insta}>
                  <span class="ti-instagram"></span>
                </a>
                <a href={contact.lien_Tumb}>
                  <span class="ti-tumblr"></span>
                </a>
              </div>
               );
              })}
            </div>
    )
}



const mapStateToProps = (state) => {
  

  return {
    contacts: state.ContactData.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContact: () => dispatch(fetchContact()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowUs);
