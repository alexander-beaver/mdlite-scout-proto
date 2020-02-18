import React, {Component} from "react";
import BoldCard from "../../components/card/boldcard/BoldCard";
import PlainChip from "../../components/chip/plainchip/PlainChip";
import {Tag} from "antd";

export default class Home extends Component{
    render(){
        return(

            <div>
                <br />
                <div>
                    <BoldCard title={"Event Status"}>
                        <h4>Hello Alex K.</h4>
                        <h5>2020 San Francisco</h5>
                        <Tag color="geekblue">Qualification Matches</Tag>

                    </BoldCard>

                </div>



            </div>
        );
    }
}
