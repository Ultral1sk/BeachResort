import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();


class RoomProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          rooms : [],
          sortedRooms : [],
          featuredRooms : [],
          loading : true,
          type : 'all',
          capacity : 1,
          price : 0,
          minPrice : 0,
          maxPrice : 0,
          minSize : 0,
          maxSize : 0,
          breakfast : false,
          pets : false
        };
    };

    //
    componentDidMount() {
        let rooms = this.formatData(items)
        let featuredRooms = rooms.filter(room => room.featured === true );
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));

        console.log(maxPrice);
        console.log(maxSize);

        
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms : rooms,
            loading: false,
            price : maxPrice,
            maxPrice, 
            maxSize
        });
      
    }

    handleChange = event => {
        const type = event.target.type
        const name = event.target.type
        const value = event.target.type
        console.log(type,name,value);
        
    }

    filterRooms = () => {
        console.log('Ello');
        
    }
    
    formatData(items){ 
        let tempItems  =  items.map(item =>{
            let id     = item.sys.id
            let images = item.fields.images.map(image => 
                image.fields.file.url)

            let room   = {...item.fields, images, id}
          
            return room
           
        });
        return tempItems
    }

    getRoom = (slug) => {
       
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug)
     
        return room

    }


    render() {
  
        return (
           <RoomContext.Provider value={{...this.state, getRoom : this.getRoom, handleChange : this.handleChange}}>
               {this.props.children}
           </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;


export const  withRoomConsumer = (Component) =>{
   const ConsumerWrapper = (props) => {

        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
             </RoomConsumer>
    }
}



export { RoomProvider, RoomConsumer, RoomContext };
