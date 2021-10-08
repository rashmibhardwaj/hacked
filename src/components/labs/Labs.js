import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../labs/labs.scss'

const Labs = () => {
    const [activeTab, setActiveTab] = useState('Pro Labs')
    const active = labsData.filter(lab => lab.name === activeTab)[0];
    return (
        <div className="labsTabs pt-5 pb-5">
            <Container fluid>
                <Row>
                    <Col md="3" className="leftContentLabs">
                        <ul>  {
                            labsData.map(
                                tab => <li className={`${active.name === tab.name && 'active'}`} onClick={() => setActiveTab(tab.name)}>
                                    <p>{tab.name}</p>
                                </li>
                            )
                        }</ul>
                    </Col>
                    <Col md="9" className="rightContentLabs">
                     
                        <a href="/" target="_blank" className="joinuslink">More Details</a>
                        <div>                           
                            <h2>{active.title} </h2>
                            <p>{active.subTitle || 'Interactive, hands-on, complex scenarios that give players the chance to penetrate enterprise infrastructure and hone their offensive engagement skills. Pick any of our Pro Labs, own it, and get your certificate of completion.'}</p>
                           
                            <ul>
                                {
                                    active.list.map(li => <li style={{ listStyle: 'none'}}>
                                        <h5>{li.title}</h5>
                                        <p>{li.text}</p>
                                    </li>)
                                }
                            </ul>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const labsData = [
    {
        name: 'Pro Labs',
        title: 'What are pro labs',
        subTitle: 'Interactive, hands-on, complex scenarios that give players the chance to penetrate enterprise infrastructure and hone their offensive engagement skills. Pick any of our Pro Labs, own it, and get your certificate of completion.',
        list: [
            {
                title: 'Realistic Scenerios',
                text: 'Created by seasoned industry practitioners with many years of experience attacking and defending enterprise networks. The skills learned here are directly applicable to real-life engagements.'
            },
            {
                title: 'Advanced Infrastructure',
                text: 'Advanced enterprise infrastructure that cannot be replicated on a single machine. Hone your offensive tradecraft and gain experience with the latest TTPs.'
            },
            {
                title: 'Multiple Machines',
                text: 'Breach the perimeter, gain a foothold in the enterprise, and pivot through multiple machines and networks to achieve the mission objectives. Prepare for a masterclass in pivoting and lateral movement.'
            },
            {
                title: 'Simulated Users',
                text: 'Even if the network is secure, the human firewall is still the weakest link. Leveraging interactive users will help you move laterally and vertically, and get domain admin.'
            }
        ]
    },
    {
        name: 'Hacking Labs',
        title: 'What are Hacking labs',
        list: [
            {
                title: 'Realistic Scenerios',
                text: 'Lorem'
            },
            {
                title: 'Advanced Infrastructure',
                text: 'ipsum the mission objectives. Prepare for a masterclass in pivoting and lateral movement.'
            },
            {
                title: 'Multiple Machines',
                text: 'Even if the network is secure, the human firewall is still the weakest link. Leveraging interactive users will help you move laterally and vertically the mission objectives. Prepare for a masterclass in pivoting and lateral movement.'
            },
            {
                title: 'Simulated Users',
                text: 'Even if the network is secure, the human firewall is still the weakest link. Leveraging interactive users will help you move laterally and vertically, and get domain admin.'
            }
        ]
    },
    {
        name: 'Academy',
        title: 'What is Academy',
        list: [
            {
                title: 'Realistic Scenerios',
                text: 'Created by seasoned industry practitioners with many years of experience attacking and defending enterprise networks. The skills learned here are directly applicable to real-life engagements.'
            },
            {
                title: 'Advanced Infrastructure',
                text: 'Advanced enterprise infrastructure that cannot be replicated on a single machine. Hone your offensive tradecraft and gain experience with the latest TTPs.'
            },
            {
                title: 'Multiple Machines',
                text: 'Breach the perimeter, gain a foothold in the enterprise, and pivot through multiple machines and networks to achieve the mission objectives. Prepare for a masterclass in pivoting and lateral movement.'
            },
            {
                title: 'Simulated Users',
                text: 'Even if the network is secure, the human firewall is still the weakest link. Leveraging interactive users will help you move laterally and vertically, and get domain admin.'
            }
        ]
    },
    {
        name: 'Infosec Career',
        title: 'Infosec Career',
        list: [
            {
                title: 'Realistic Scenerios',
                text: 'lorem'
            },
            {
                title: 'Advanced Infrastructure',
                text: 'Advanced enterprise infrastructure that cannot be replicated on a single machine. Hone your offensive tradecraft and gain experience with the latest TTPs.'
            },
            {
                title: 'Multiple Machines',
                text: 'Breach the perimeter, gain a foothold in the enterprise, and pivot through multiple machines and networks to achieve the mission objectives. Prepare for a masterclass in pivoting and lateral movement.'
            },
            {
                title: 'Simulated Users',
                text: 'Even if the network is secure, the human firewall is still the weakest link. Leveraging interactive users will help you move laterally and vertically, and get domain admin.'
            }
        ]
    },
    {
        name: 'Capture the flag',
        title: 'Capture the flag',
        list: [
            {
                title: 'Realistic Scenerios',
                text: 'lorem'
            },
            {
                title: 'Advanced Infrastructure',
                text: 'Advanced enterprise infrastructure that cannot be replicated on a single machine. Hone your offensive tradecraft and gain experience with the latest TTPs.'
            },
            {
                title: 'Multiple Machines',
                text: 'The mission objectives. Prepare for a masterclass in pivoting and lateral movement.'
            },
            {
                title: 'Simulated Users',
                text: 'You move laterally and vertically, and get domain admin.'
            }
        ]
    }
];

export default Labs;