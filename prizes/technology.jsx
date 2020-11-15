"use strict";

import React from "react";
import PropTypes from "prop-types";
import createReactClass from "create-react-class";
import TechnologyElementItem from "source/technology/element-item";

var PrizeTechnology = createReactClass({
    render: function () {
        return (
            <div className="g-box-s g-click slider-item prizes-slider-item">
                <div className="prizes-item-inner">
                    <TechnologyElementItem
                        elementId={this.props.value.i}
                        elementCount={1}
                        elementPart={this.props.value.n}
                    />
                </div>
            </div>
        )
    }
});

PrizeTechnology.propTypes = {
    value: PropTypes.object.isRequired,
};

export default PrizeTechnology;