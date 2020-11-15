"use strict";

import React from "react";
import PropTypes from "prop-types";
import createReactClass from "create-react-class";
import OurCustomCarousel from "source/components/our-custom-carousel";
import OnlyPrizes from "source/prizes/only-prizes";

var PrizesSlider = createReactClass({
    getDefaultProps: function () {
        return {
            prizesObj: false
        }
    },

    handleNextPrevClick: function () {
        AudioPlayer.defaultSounds.clickSound();
    },

    render: function () {
        var sliderId =      this.props.idPrefix + '-prizes-slider';
        var prevButtonId =  sliderId + '-prev',
            nextButtonId =  sliderId + '-next',
            sliderContent = sliderId + '-content',
            wrapper =       sliderId + '-wrapper';

        return (
            <OurCustomCarousel
                id={sliderId}
                sliderClass="prizes-slider"
                sliderContent={sliderContent}
                sliderWrapper={wrapper}
                slideLeftButton={nextButtonId}
                slideRightButton={prevButtonId}
                slidePage={false}
                sliderItem="prizes-slider-item"
            >

                <div className="g-abs slider-navigation navigation-left prizes-slider-navigation">
                    <div id={prevButtonId}
                         onClick={this.handleNextPrevClick}
                         className="g-rel g-click slide-button prizes-prev prizes-slider-prev">
                        <i className="fa fa-angle-double-left"/>
                    </div>
                </div>

                <div id={sliderContent} className="prizes-slider-content">
                    <div id={wrapper} className="slider-wrapper">

                        <OnlyPrizes
                            prizesObj={this.props.prizesObj}
                        />

                    </div>
                </div>

                <div className="g-abs slider-navigation navigation-right prizes-slider-navigation">
                    <div id={nextButtonId}
                         onClick={this.handleNextPrevClick}
                         className="g-rel g-click slide-button prizes-next prizes-slider-next">
                        <i className="fa fa-angle-double-right"/>
                    </div>
                </div>
            </OurCustomCarousel>
        )
    }
});

PrizesSlider.propTypes = {
    idPrefix:       PropTypes.string.isRequired,
};

export default PrizesSlider;