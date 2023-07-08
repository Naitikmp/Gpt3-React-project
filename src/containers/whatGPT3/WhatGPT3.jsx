import React from "react";
import Feature from "../../components/feature/Feature";
import './whatGPT3.css';

const whatGPT3 = () =>{
    return (
        <div className="gpt3__whatgpt3 section__margin" id="whpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title="What is Gpt3" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ev" />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">
                    The possibilities ar beyond your imagination
                </h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Chatbots" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries." />
                <Feature title="knowledgebase" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ." />
                <Feature title="Education" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries." />                
            </div>
        </div>
    )
}

export default whatGPT3;