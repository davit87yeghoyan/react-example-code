"use strict";

import React from "react";
import PropTypes from "prop-types";
import createReactClass from "create-react-class";
import IconMagic from "source/resources/icon-magic";
import SimpleToolTip from "source/components/simple-tool-tip";

var PrizeMagic = createReactClass({
    mixins: [SimpleToolTip],

    render: function () {
        if(this.props.count <= 0){
            return null;
        }

        return (
            <div
                className="g-rel g-box-s g-click slider-item prizes-slider-item"
                onMouseEnter={this.activateToolTips.bind(null, Model.getT("magic"), false)}
            >
                <div className="prizes-item-inner">
                    <IconMagic
                        magicId={this.props.itemId}
                        className="custom-icon"
                    />
                    <div className="g-abs g-box-s prizes-item-count">
                        {this.props.count}
                    </div>
                </div>
            </div>
        )
    }
});

PrizeMagic.propTypes = {
    itemId: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
};

export default PrizeMagic;