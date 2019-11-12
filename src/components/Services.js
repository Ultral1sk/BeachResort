import React, { Component } from 'react'
import {FaCocktail, FaHiking, FashuttleVan, FaBeer, FaShuttleVan} from 'react-icons/fa'
import Title from './Title'

class Services extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             services : [{
                icon: <FaCocktail />,
                title: "free cocktails",
                info : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

             },
             {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

             },
             {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

             },
             {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

             }
                
            ]
        }
    }
    

    render() {
        return (
            <section className="services">
                <Title title="services"/>
                    <div className="services-center">
                        {this.state.services.map((item, index) => {
                            return (
                                <article key={index} className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            )
                        })}
                    </div>
            </section>
        )
    }
}

export default Services
