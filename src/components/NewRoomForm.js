import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function NewRoomForm(props) {
    const { addRoom }  = props;
    console.log(props)
    const [name, setName] = useState("");
    const [area, setArea] = useState("");

    // Will only accept numbers 
    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ?  int: "");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name && area) {
            addRoom({ name, area });
            setName("");
            setArea("");
        } else {
            alert("Invalid data");
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <div className="container">
                    <div className="row">
                        <div className="col-sm text-end mt-2">
                            <h6>New Room</h6>
                        </div>
                        <div className="col-sm">
                           <Form.Control
                            type="text"
                            placeholder="Room Name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                           />
                        </div>
                        <div className="col-sm">
                            <Form.Control type="text" placeholder="Sq. Ft." 
                            onChange={handleAreaInput}
                            value={area}
                            

                            ></Form.Control>
                        </div>
                        <div className="col-sm-1 mt-1 me-2">
                            <Button type="submit" className="btn-sm" title="Add room">
                              Add
                            </Button>
                        </div>
                    </div>
                </div>
            </Form.Group>
        </Form>
    );
}