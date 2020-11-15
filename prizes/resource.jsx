"use strict";

import React from "react";
import PropTypes from "prop-types";
import createReactClass from "create-react-class";
import SimpleToolTip from "source/components/simple-tool-tip";

var PrizeResource = createReactClass({
    getDefaultProps: function(){
        return {
            shortNumber: true
        }
    },

    mixins: [SimpleToolTip],

    render: function () {
        if(this.props.resourceValue <= 0){
            return null;
        }

        var image = "url(" + Helper.Resources.getResourceImage(this.props.resourceKey, true) + ")";

        var count = this.props.resourceValue;
        if(this.props.shortNumber){
            count = count.shortNumber(true);
        }

        return (
            <div
                className="g-box-s g-click slider-item prizes-slider-item"
                onMouseEnter={this.activateToolTips.bind(null, Model.getT("resource_" + this.props.resourceKey), false)}
            >
                <div style={{backgroundImage: image}} className="g-rel g-box-s prizes-item-inner">
                    <div className="g-abs g-box-s prizes-item-count">
                        {count}
                    </div>
                </div>
            </div>
        )
    }
});

PrizeResource.propTypes = {
    resourceKey:    PropTypes.string.isRequired,
    resourceValue:  PropTypes.number.isRequired,
    shortNumber:    PropTypes.bool.isRequired,
};

export default PrizeResource;