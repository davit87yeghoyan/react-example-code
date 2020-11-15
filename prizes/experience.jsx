"use strict";

import React from "react";
import PropTypes from "prop-types";
import createReactClass from "create-react-class";
import SimpleToolTip from "source/components/simple-tool-tip";

var PrizeExperience = createReactClass({
    mixins: [SimpleToolTip],
    render: function () {
        if(this.props.value <= 0){
            return null;
        }
        return (
            <div className="g-box-s g-click slider-item prizes-slider-item"
                 onMouseEnter={this.activateToolTips.bind(null, Model.getT("practice"), false)}
            >
                <div className="g-rel g-box-s g-gradient-shadow  prizes-item-inner">
                    <span className="g-icons tools-icon icon-exp-big" />
                    <div className="g-abs g-box-s g-black-gradient prizes-item-count g-yellow-text">
                        <span className="g-margin-left-5">{this.props.value}</span>
                    </div>
                </div>
            </div>
        )
    }
});

PrizeExperience.propTypes = {
    value:  PropTypes.number.isRequired,
    type:   PropTypes.string.isRequired,
};

export default PrizeExperience;