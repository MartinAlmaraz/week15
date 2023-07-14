import { useState, useEffect } from 'react';
import House from './House';
import NewHouseForm from './NewHouseForm';
import { housesApi } from '../rest/HousesApi.js';

export default function HouseList() {
    const [houses, setHouse] = useState([]);

    //Loading data into the state object 
    useEffect(() => {
        fetchHouses();
    }, []);


    /// Read
    const fetchHouses = async () => {
        
        const newHouses = await housesApi.get();
        function compareFn(a, b) {
            if (a._id > b._id) {
                return -1;
            }

            if (a._id < b._id) {
                return 1;
            }
            return 0;
        }
        newHouses.sort(compareFn);
        setHouse(newHouses);
    };

    //Update houses 
    const updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        fetchHouses();
    };
    /// Create 
    const addHouse = async (house) => {
        await housesApi.post(house);
        fetchHouses();
    };
    ///Delete
    const deleteHouse = async (id) => {
        await housesApi.delete(id);
        fetchHouses();
    };
    return (
        <div className='container'>
            <div className='row mt-2 '>
                <div className='col-sm'>
                    <h1>Houses</h1>
                </div>
                <div className='col-sm-8 d-flex flex-row-reverse'>
                  <NewHouseForm
                    addHouse={addHouse}
                    />
                </div>
              </div>
                <div className='row'>
                   {houses.map((house, index) => (
                    <House
                      key={index}
                      house={house}
                      updateHouse={updateHouse}
                      deleteHouse={deleteHouse}
                    />
                   ))}
                </div>
            </div>
    );
}






