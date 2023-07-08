import React from "react";
import {Feature} from "../../components"
import './features.css';


const featuresData = [{
    title: 'Improving end distrusts instantly',
    text:'From they fine john the green gardener'
    
},
{    title: 'Become the tended active',
    text:'From they fine john the green gardener'
    
},
{
    title: 'Message or aim nothing',
    text:'From they fine john the green gardener'
    
},
{
    title: 'Really boy law county',
    text:'From they fine john the green gardener'
    
}

]

const Features = () =>{
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">
                    The future is Now and you just need to realise it. Step into Future Today & Make  it Happen
                </h1>
                <p>Request Early access</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item,index)=> (
                     <Feature title={item.title}  text={item.text} key={item.title + index}/>
                ))}
            </div>
        </div>
    )
}

export default Features;