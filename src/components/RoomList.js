import Card from "react-bootstrap/Card";
import Room from "./Room";


export default function RoomList(props) {
    const { house, updateHouse } = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house, 
            rooms: house.rooms.filter((room) => room._id !== roomId), 
        };
        updateHouse(updatedHouse)
    };
    
    const updateRoom = (updatedRoom) => {
        const updatedHouse = {
            ...house, 
            rooms: house.rooms.map((room) => 
              room._id !== updatedRoom._id ? room : updatedRoom),
        };
        updateHouse(updatedHouse);
    };

    return (
        <Card.Body>
            <h6>Rooms</h6>
            {house.rooms.map((room, index) => {
                <Room>
                    key={index}
                    room={room}
                    updateRoom={updateRoom}
                    deleteRoom={deleteRoom}
                </Room>
            })}
        </Card.Body>
    );
}
