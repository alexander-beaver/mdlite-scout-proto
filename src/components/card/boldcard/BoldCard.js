import React, {Component} from "react";
import "./BoldCard.css";
import {Card} from "antd";
export default class BoldCard extends Component{
    render(){
        return(
            <Card title={this.props.title}>{this.props.children}</Card>


        );
    }
}
