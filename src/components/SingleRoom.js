import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from './Hero';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero'

class SingleRoom extends Component {
    constructor(props) {
        super(props)
    //   console.log(this.props);
      
        
        this.state = {
            slug : this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext
 
    // componentDidMount() { }

    render() {
       
      const { getRoom } = this.context
 
        const room = getRoom(this.state.slug);
        console.log(room)
        if(!room) {
            return (
                <div className="error">
                    <h3>no such room coul be round...</h3>
                    <Link to="/rooms/" className="btn-primary">
                        BACK TO ROOMS
                    </Link>
                </div>
            );
        } 
        const  { name, description, capacity, size, price, extras, breakfast, pets, images } = room
    
        return (
            <>
                 <StyledHero img={images[0] || defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className="btn-primary">
                            Back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                       {images.map((item, index) =>{
                           return <img key={index} src={item} alt={name} />
                       })}
                    </div>
                    <div className="single-room-info">
                       <article className="decs">
                           <h3>Details</h3>
                           <p>{description}</p>
                       </article>
                       <article className="info">
                        <h3>Info</h3>
                        <h6>Price : ${price}</h6>
                        <h6>size : ${size} SQFT</h6>
                        <h6>
                            Max Capacity : { " " } 
                           {capacity > 1 ? `${capacity}` :`${capacity} Person`}
                        </h6>
                        <h6>
                            {pets ? "pets allowed" : "no pets allowed"}
                        </h6>
                        <h6>
                            {breakfast && "free breakfast"}
                        </h6>
                       </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                       <ul className="extras">
                           {extras.map((item,index) =>{
                               return <li key={index}>- {item}</li>
                           })}
                       </ul>
                </section>
            </>
        )
    }
}

export default SingleRoom
