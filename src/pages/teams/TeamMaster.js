import React, {Component} from "react";
import BoldCard from "../../components/card/boldcard/BoldCard";
import PlainChip from "../../components/chip/plainchip/PlainChip";
import Biglist from "../../components/lists/biglist/Biglist";
import {Redirect} from "react-router-dom";

export default class TeamMaster extends Component{
    componentWillMount() {
        this.navigateToTeam = this.navigateToTeam.bind(this);
        this.setState({toNav: false});
    }

    navigateToTeam(team){
        this.setState({toNav: true, team:team})

    }
    render(){
        if (this.state.toNav === true) {
            return <Redirect to={`/t/${this.state.team}`} />
        }
        return(

            <Biglist items={[{avatar: "person", name: "100", body: "Rank 1"},{avatar: "person", name: "199", body: "Rank 2"}]} callback={(team)=>this.navigateToTeam(team)
            }/>


        );
    }
}
