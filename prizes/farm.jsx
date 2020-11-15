"use strict";

import React from "react";
import PropTypes from "prop-types";
import createReactClass from "create-react-class";

var PrizeFarm = createReactClass({
    render: function () {
        if(this.props.farmCount <= 0){
            return null;
        }

        var itemKey =   SD.frm.r[this.props.farmKey].k;
        var image =     "url(" + GSB.images.farmingIcons + itemKey + ".png)";
        return (
            <div className="g-box-s g-click slider-item prizes-slider-item">
                <div style={{backgroundImage: image}} className="g-rel g-box-s g-gradient-shadow  prizes-item-inner">
                    <div className="g-abs g-box-s g-black-gradient prizes-item-count g-yellow-text">
                        <span className="g-margin-left-5">{this.props.farmCount}</span>
                    </div>
                </div>
            </div>
        )
    }
});

PrizeFarm.propTypes = {
    farmKey:        PropTypes.string.isRequired,
    farmCount:      PropTypes.number.isRequired
};

export default PrizeFarm;