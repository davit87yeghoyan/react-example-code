"use strict";

import React from "react";
import PropTypes from "prop-types";
import createReactClass from "create-react-class";
import SoldierItem from "source/army/soldierItem";

var PrizeArmy = createReactClass({
    getDefaultProps: function () {
        return {
            showItemLevel: true
        }
    },

    render: function () {
        if(this.props.armyCount <= 0){
            return null;
        }

        var soldierInfo = {
            i: this.props.armyId,
            c: this.props.armyCount,
            u: GSB.userId
        };

        return (
            <div className="g-box-s g-click slider-item prizes-slider-item">
                <div className="prizes-item-inner">
                    <SoldierItem
                        showItemLevel={this.props.showItemLevel}
                        soldierInfo={soldierInfo}
                    />
                </div>
            </div>
        );
    }
});

PrizeArmy.propTypes = {
    armyId:         PropTypes.number.isRequired,
    armyCount:      PropTypes.number.isRequired,
    showItemLevel:  PropTypes.bool.isRequired,
};

export default PrizeArmy;