"use strict";

import React from "react";
import PropTypes from "prop-types";
import createReactClass from "create-react-class";
import PrizeResource from "source/prizes/resource";
import PrizeArmy from "source/prizes/army";
import PrizeFarm from "source/prizes/farm";
import PrizeTechnology from "source/prizes/technology";
import PrizeExperience from "source/prizes/experience";
import PrizeCrystal from "source/prizes/crystal";
import PrizeMagic from "source/prizes/magic";
import PrizeWarHelp from "source/prizes/war-help";

var OnlyPrizes = createReactClass({
    getDefaultProps: function () {
        return {
            showArmyLevel: true,
            shortNumber: true,
            chunk: false
        }
    },

    render: function () {
        var _self = this;

        var result = [];

        if(_self.props.prizesObj){
            
            if(_self.props.prizesObj.hasOwnProperty("r")){
                var resources = Object.keys(_self.props.prizesObj.r).map(function(value, index) {
                    return (
                        <PrizeResource
                            key={'r-'+index}
                            resourceKey={value}
                            resourceValue={parseInt(_self.props.prizesObj.r[value])}
                            shortNumber={_self.props.shortNumber}
                        />
                    );
                });
                result.push(resources);
            }

            if(_self.props.prizesObj.hasOwnProperty("ar")){
                var army = Object.keys(_self.props.prizesObj.ar).map(function(value, index) {
                    return (
                        <PrizeArmy
                            key={'ar-'+index}
                            armyId={parseInt(value)}
                            armyCount={parseInt(_self.props.prizesObj.ar[value])}
                            showItemLevel={_self.props.showArmyLevel}
                        />
                    );
                });
                result.push(army);
            }

            if(_self.props.prizesObj.hasOwnProperty("tc") && _self.props.prizesObj.tc){
                var technology = _self.props.prizesObj.tc.map(function(value, index) {
                    return (
                        <PrizeTechnology
                            key={'tc-'+index}
                            value={value}
                        />
                    );
                });
                result.push(technology);
            }


            if(_self.props.prizesObj.hasOwnProperty("frm")){
                var farming = Object.keys(_self.props.prizesObj.frm).map(function(value, index) {
                    return (
                        <PrizeFarm
                            key={'frm-'+index}
                            farmKey={value}
                            farmCount={parseInt(_self.props.prizesObj.frm[value])}
                        />
                    );
                });
                result.push(farming);
            }

            if(_self.props.prizesObj.hasOwnPropertyAll("ex")){
                var experience = Object.keys(_self.props.prizesObj.ex).map(function(value, index) {
                    return (
                        <PrizeExperience
                            key={'exp-'+index}
                            type={value}
                            value={_self.props.prizesObj.ex[value]}
                        />
                    );
                });
                result.push(experience);
            }

            if(_self.props.prizesObj.hasOwnProperty("he")){
                var warHelp = Object.keys(_self.props.prizesObj.he).map(function(itemId, index) {
                    return (
                        <PrizeWarHelp
                            key={'he-' + index}
                            itemId={parseInt(itemId)}
                            count={_self.props.prizesObj.he[itemId]}
                        />
                    );
                });
                result.push(warHelp);
            }

            if(_self.props.prizesObj.hasOwnProperty("cr")){
                var crystals = Object.keys(_self.props.prizesObj.cr).map(function(itemId, index) {
                    return (
                        <PrizeCrystal
                            key={'cr-' + index}
                            itemId={parseInt(itemId)}
                            count={_self.props.prizesObj.cr[itemId]}
                        />
                    );
                });
                result.push(crystals);
            }

            if(_self.props.prizesObj.hasOwnProperty("mg")){
                var magics = Object.keys(_self.props.prizesObj.mg).map(function(itemId, index) {
                    return (
                        <PrizeMagic
                            key={'mg-' + index}
                            itemId={parseInt(itemId)}
                            count={_self.props.prizesObj.mg[itemId]}
                        />
                    );
                });
                result.push(magics);
            }
        }

        if(this.props.chunk){
           var chunkResult = [];
           result.map(function (item, index) {
               // console.error("QQQQQ", item, index);

               if(index !== 0){
                   chunkResult.push(<br key={"chunk"+index} />);
               }

               chunkResult.push(item);
           });
           return chunkResult;
        }

        return result;
    }
});

OnlyPrizes.propTypes = {
    prizesObj: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
    showArmyLevel: PropTypes.bool.isRequired,
    chunk: PropTypes.bool.isRequired,
};

export default OnlyPrizes;