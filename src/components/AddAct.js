import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddAct = () => {
    const [title, setTitle] = useState('');
    const Navigate = useNavigate();

    const saveActivity = async(e) => {
        e.preventDefault();
        const activity = { title};
        await fetch('http://localhost:8080/activities',{
            method: "POST",
            body: JSON.stringify(activity),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        Navigate("/");
    }

    return (
        <div>
            <form onSubmit={saveActivity}>
                <div className="field">
                <label className="label">Activity</label>
                <div className="control">
                    <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
                </div>
                </div>
        
                <div className="field">
                <div className="control">
                    <button className="button is-primary">Save</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default AddAct