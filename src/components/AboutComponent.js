import React from 'react';
import { Card, CardBody, Media } from 'reactstrap';

    const imgStyle = {
        maxHeight: 140,
        maxWidth: 140
      }

    function RenderEmployee({employee}) {
        return(
            <div key={employee.id} className="col-12 mt-5">
                <Media tag="li">
                        <Media left middle>
                        <div class="col-md-2 text-md-left text-center">
                            <Media object src={employee.image} style={imgStyle} alt={employee.name} />
                        </div>
                        </Media>
                        <Media body className="ml-2">
                            <div>{employee.name}</div>
                            <p><strong>{employee.designation}</strong></p>
                        </Media>
                </Media>  
            </div>
        );
    }
    
    function About(props) {
        const employees = props.employees.map((employee) => {
            return (
                <div key={employee.id} className="col-12 col-md-3">
                <RenderEmployee employee={employee} />
                </div>
            );
        });

        
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>It all started with one idea</h2>
                    <p>In 2015, Oscar Bjørn-Rosager got a good idea. The idea was to offer Danish cycling exercisers and fans the cycling clothing that the professional cycling teams were no longer allowed to wear. He had been a part of cycling for several years and discovered that every year the pro teams were left with excess equipment and clothes that needed replacement due to new sponsors.</p>
                    <p>Together with the professional cycling industry, Oscar invented a solution that creates a more sustainable consumption and production pattern in modern cycling. Everyone interested could now get hold of the unique professional cycling clothing - without it costing a fortune. The first cycling clothing sold was from the professional cyclist, Casper Pedersen, who was also co-founder the first year. In addition to recycling the clothes, the sustainable idea has meant that the Danish company, together with the professional cycling teams, has saved the globe a water consumption of two million litres of water per year.</p>
                </div>
                <div className="col-12 col-md-6">
                        <img src='assets/images/about.png'  alt='ProOwnedCycling' />
                </div>
                
                <div className="col-12">
                <br></br><br></br>
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Cycling gear from pro teams and cyclists
                                Here is a selection of our pro team partners. We sell pro team cycling clothing for World Tour, Pro Continental and Continental teams. 
                                We cooperate with well-known pro teams like <cite title="Source Title">Team Sky, Dimension Data, Israel Cycling Academy, Mitchelton-Scott</cite> and many more.</p>
                            <div className="col-12 col-md-12">
                                <br></br>
                                <a href="/"><img src='assets/images/teamsky.png' width="140px" alt='ProOwnedCycling' /></a>
                                <a href="/"><img src='assets/images/tramdimensiadata.png' width="140px" alt='ProOwnedCycling' /></a>
                                <a href="/"><img src='assets/images/Mitchelton.png' width="140px" alt='ProOwnedCycling' /></a>
                                <a href="/"><img src='assets/images/scicon.png' width="140px" alt='ProOwnedCycling' /></a>
                                <a href="/"><img src='assets/images/wahoo.png' width="140px" alt='ProOwnedCycling' /></a>
                                <a href="/"><img src='assets/images/Pinarello.png' width="140px" alt='ProOwnedCycling' /></a>
                            </div>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>People behind ProOwnedCycling</h2>
                </div>
                <div className="row">
                        {employees}
                </div>
            </div>
        </div>
    );
}

export default About;