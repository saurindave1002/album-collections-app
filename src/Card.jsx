import React, { useState, useEffect } from 'react'

function Card() {
    const [user, setUser] = useState([]);

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then((response) => {
                return response.json();
            }).then((data) => {
                let album = data
                console.log(data);
                setUser(album)
            })
    }
    useEffect(() => {
        fetchData();
    }, [])

    const updateAlbum = () => {
        fetch('https://jsonplaceholder.typicode.com/albums/1', {
            method: 'PUT',
            body: alert('an album has been updated with' + JSON.stringify({
                'title': 'Pushpa - Saaamiiii',

            })),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    const deleteAlbum = () => {
        fetch('https://jsonplaceholder.typicode.com/albums/101', {
            method: 'DELETE',
            body: alert('an album has been deleted with' + JSON.stringify({
                'id': 101,
            })),
        }).then((response) => response.json())
            .then((json) => console.log(json));;
    }

    const addAlbum = () => {
        fetch('https://jsonplaceholder.typicode.com/albums', {
            method: 'POST',
            body: alert('an album has been added' + JSON.stringify({
                'title': 'Pushpa - Ooo Antee Vaa Mamaaa',
            })),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }



    return (
        <div className="clearfix">
            <h1 className="header"> Album Collection App</h1>
            <button className='button bttn' type="button" onClick={addAlbum}> Add Album </button> <br /><br />
            <div className="row">
                {user.map(data => (
                    <div className="col-md-4" key={data.id}>
                        <div className="card">
                            <div className="card-body">
                                <div className="avatar">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/26/26805.png"
                                        className="card-img-top"
                                        alt=""
                                    />
                                </div>
                                <h4 className="card-title">
                                    {data.title}
                                </h4>


                                <div className='btns'>
                                    <button className='button bttn' type="button" onClick={updateAlbum}> Update </button><br />
                                    <button className='button bttn' type="button" onClick={deleteAlbum}> Delete </button>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}

            </div>

        </div>

    )
}

export default Card
