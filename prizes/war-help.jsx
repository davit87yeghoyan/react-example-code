"use strict";

import React from "react";
import PropTypes from "prop-types";
import createReactClass from "create-react-class";
import SimpleToolTip from "source/components/simple-tool-tip";

var PrizeWarHelp = createReactClass({
    mixins: [SimpleToolTip],

    render: function () {
        if(this.props.count <= 0){
            return null;
        }

        var item = Model.WarHelper.getWarHelpStaticInfo(this.props.itemId);
        var image = GSB.images.armyExtend + item.ic;


        return (
            <div
                className="g-box-s g-click slider-item prizes-slider-item"
                onMouseEnter={this.activateToolTips.bind(null, Model.Buildings.getBuildingTitleById(Model.WarHelper.getHelpBuildingRel(this.props.itemId)), false)}
            >
                <div style={{backgroundImage: "url('" + image + "')"}} className="g-rel g-box-s prizes-item-inner">
                    <div className="g-abs g-box-s prizes-item-count">
                        {this.props.count}
                    </div>
                </div>
            </div>
        )
    }
});

PrizeWarHelp.propTypes = {
    itemId: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
};

export default PrizeWarHelp;