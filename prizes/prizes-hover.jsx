"use strict";

import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import ResourceInstanceCleaner from "source/resources/resourceInstanceCleaner";
import IconCrystal from "source/resources/icon-crystal";
import IconMagic from "source/resources/icon-magic";

var PrizesHover = createReactClass({
    mixins: [ResourceInstanceCleaner],

    getDefaultProps: function() {
        return {
            className:  "",
            title:      "",
            additional: [],
        }
    },

    render: function() {
        var prizesData = Helper.prizesSetter.getPrizesById(this.props.prizesId);

        return (
            <div className={"bonus-detail " + this.props.className}>
                {this.props.title !== "" ?
                    <div className="title">
                        {this.props.title}
                    </div>
                :null}

                {!prizesData.hasOwnProperty("r") ||
                Object.keys(prizesData.r).map(function(value2,index){
                    if(prizesData.r[value2] > 0){

                        var image = Helper.Resources.getResourceImage(value2);
                        return (
                            <div key={index} className="g-box-s g-center-items item">
                                <div className="bonus-img" style={{backgroundImage: "url('" + image + "')"}}/>
                                <div className="bonus-title">
                                    {Model.getT("resource_" + value2)}
                                </div>
                                <div className="bonus-desc">
                                    {prizesData.r[value2]}
                                </div>
                            </div>
                        )
                    }
                })}

                {!this.props.additional.length ||
                    this.props.additional.map(function (value, index) {
                        return (
                            <div key={index} className="g-box-s g-center-items item">
                                <div className="bonus-img" style={{backgroundImage: "url('" + value.image + "')"}}/>

                                <div className="bonus-title">
                                    {value.title}
                                </div>

                                <div className="bonus-desc">
                                    {value.count}
                                </div>
                            </div>
                        )
                    })
                }


                {!prizesData.hasOwnProperty("frm") ||
                Object.keys(prizesData.frm).map(function(value2,index){
                    var iconName    = SD.frm.r[value2].k;
                    var image       = GSB.images.farmingIcons + iconName;
                    return (
                        <div key={index} className="g-box-s g-center-items item">
                            <div className="bonus-img" style={{backgroundImage: "url('" + image + ".png')"}}/>
                            <div className="bonus-title">
                                {Model.getT("frm_" + value2)}
                            </div>
                            <div className="bonus-desc">
                                {prizesData.frm[value2]}
                            </div>
                        </div>
                    )
                })
                }


                {!prizesData.hasOwnProperty("ar") ||
                Object.keys(prizesData.ar).map(function(value2,index){
                    var image       = GSB.images.armySM + value2;
                    return (
                        <div key={index} className="g-box-s g-center-items item">
                            <div className="bonus-img" style={{backgroundImage: "url('" + image + ".png')"}}/>
                            <div className="bonus-title">
                                {Model.getT("Army" + value2 + "_t")}
                            </div>
                            <div className="bonus-desc">
                                {prizesData.ar[value2]}
                            </div>
                        </div>
                    );
                })
                }



                {!(prizesData && prizesData.hasOwnProperty("he")) ||
                Object.keys(prizesData.he).map(function(itemId, index){
                    var item = Model.WarHelper.getWarHelpStaticInfo(itemId);
                    var image = GSB.images.armyExtend + item.ic;

                    return (
                        <div key={index} className="g-box-s g-center-items item">
                            <div className="bonus-img" style={{backgroundImage: "url('" + image + "')"}}/>

                            <div className="bonus-title">
                                {Model.getT("war_helper_" + itemId)}
                            </div>

                            <div className="bonus-desc">
                                {prizesData.he[itemId]}
                            </div>
                        </div>
                    );
                })
                }

                {!(prizesData && prizesData.hasOwnProperty("cr")) ||
                Object.keys(prizesData.cr).map(function(itemId, index){
                    var productType = Model.ClanCamps.getProductTypeAndKeyByCampInfo(itemId);
                    var crystalSD = SD.cr.in[productType.key];
                    if(!crystalSD || !crystalSD.hasOwnProperty('cti')){
                        return null;
                    }

                    return (
                        <div key={index} className="g-box-s g-center-items item">
                            <div className="bonus-img">
                                <IconCrystal crystalId={parseInt(itemId)} />
                            </div>

                            <div className="bonus-title">
                                {Model.getT("cc_name_" + productType.type + "_" + crystalSD.cti)}
                            </div>

                            <div className="bonus-desc">
                                {prizesData.cr[itemId]}
                            </div>
                        </div>
                    );
                })
                }

                {!(prizesData && prizesData.hasOwnProperty("mg")) ||
                Object.keys(prizesData.mg).map(function(itemId, index){
                    return (
                        <div key={index} className="g-box-s g-center-items item">
                            <div className="bonus-img">
                                <IconMagic magicId={parseInt(itemId)} />
                            </div>

                            <div className="bonus-title">
                                {Model.getT("magic")}
                            </div>

                            <div className="bonus-desc">
                                {prizesData.mg[itemId]}
                            </div>
                        </div>
                    );
                })
                }
            </div>
        )
    }

});

PrizesHover.propTypes = {
    className:  PropTypes.string,
    prizesId:   PropTypes.number.isRequired,
    title:      PropTypes.string,
    additional: PropTypes.array,
};

export default PrizesHover;