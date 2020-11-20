import React from "react";
import "./top.css";
import TopCard from "./topCard";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    isPending: state.movieHero.isPending,
    error: state.movieHero.error,
    baseUrl: state.movieHero.heroAssets.baseUrl,
    posterSize: state.movieHero.heroAssets.posterSize,
    backdropSize: state.movieHero.heroAssets.backdropSize,
    heroGallery: state.movieHero.heroGallery,
  };
};

const Top = ({ heroGallery, posterSize, baseUrl }) => {
  if (heroGallery.length > 0) {
    heroGallery.map((i) => console.log(i));
  }
  return (
    <div className="mt-10">
      <h2 className="font-semibold text-lg">Popular Now</h2>
      <div className="mt-3 py-3 flex topCards">
        {heroGallery.length > 0 ? (
          heroGallery.map((heroGallery) => (
            <TopCard
              key={heroGallery.id}
              heroGallery={heroGallery}
              posterSize={posterSize}
              baseUrl={baseUrl}
            />
          ))
        ) : (
          <div>please wait</div>
        )}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Top);