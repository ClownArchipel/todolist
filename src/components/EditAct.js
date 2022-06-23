import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditAct = () => {
    const [title, setTitle] = useState('');    
    const Navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getActivityById();
    }, []);

    const getActivityById = async() => {
        const response = await fetch(`http://localhost:8080/activities/${id}`);
        const data = await response.json();
        setTitle(data.title);        
    }

    const updateActivity = async(e) => {
        e.preventDefault();
        const activity = { title};
        await fetch(`http://localhost:8080/activities/${id}`,{
            method: "PUT",
            body: JSON.stringify(activity),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        Navigate("/");
    }

    return (
        <div>
            <form onSubmit={updateActivity}>
                <div className="field">
                <label className="label">Activity</label>
                <div className="control">
                    <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
                </div>
                </div>
        
                <div className="field">
                <div className="control">
                    <button className="button is-primary">Update</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default EditAct