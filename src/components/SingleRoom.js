import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from './Hero';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';

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
            <div>
                 <Hero hero='roomsHero'>
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className="btn-primary">
                            Back to rooms
                        </Link>
                    </Banner>
                </Hero>
            </div>
        )
    }
}

export default SingleRoom