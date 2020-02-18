import React, {Component} from "react";
import BoldCard from "../../components/card/boldcard/BoldCard";
import PlainChip from "../../components/chip/plainchip/PlainChip";

import { Steps, Button, message } from 'antd';

const { Step } = Steps;
const steps = [
    {
        title: 'Introduce Yourself',
        content: 'Make sure to give a friendly introduction to someone in the pits and ask them if you could ask some questions about their robot.',
    },
    {
        title: 'Team Basics',
        content: 'Second-content',
    },
    {
        title: 'Specifications',
        content: 'Last-content',
    },
    {
        title: 'Characteristics',
        content: 'Last-content',
    },
    {
        title: 'Misc',
        content: 'Last-content',
    },
    {
        title: 'Finish',
        content: 'Please thank the person for their time and offer that if they need anything, Team 100 is happy to help.',
    }
];
export default class PitScout extends Component{
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;
        return (
            <div>
                <br />
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <br />
                <div className="steps-content">{steps[current].content}</div>
                <br />
                <div className="steps-action">
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                            Previous
                        </Button>
                    )}
                </div>
            </div>
        );
    }
}
