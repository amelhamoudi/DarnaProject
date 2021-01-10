import react, { useEffect } from "react";

import { fetchSpot } from "../../action/Spot.action";

import { connect } from "react-redux";

function Spot({ spots, fetchSpot }) {
  useEffect(() => {
    fetchSpot();
  }, []);

  return (
    <div class="single-sidebar-widget popular-post-widget">
      {spots &&
        spots.map((spot) => {
          return (
            <div>
              <h5 class="popular-title">Spot by {spot.nom_entreprise} </h5>
              <div class="popular-post-list">
                <div class="single-post-list">
                  <div class="thumb">
                    <video
                      controls="true"
                      class="video-stream"
                      x-webkit-airplay="allow"
                      data-youtube-id="N9oxmRT2YWw"
                      src={spot.path}
                    ></video>
                  </div>
                  <div class="details mt-20">
                    <a href="blog-single.html">
                      <h6>
                        Retro-electric 1967 Ford Mustang revealed in Russia
                      </h6>
                    </a>
                    <p>Mate Winston | Dec 15</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    spots: state.SpotData.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpot: () => dispatch(fetchSpot()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Spot);
