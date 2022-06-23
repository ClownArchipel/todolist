import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListAct = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/activities");
    const data = await response.json();
    setActivities(data);
  };

  const deleteActivity = async (id) => {
    await fetch(`http://localhost:8080/activities/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchData();
  };

  return (
    <div>
      <Link to="/add" className="button is-primary bg-info">
        Add New
      </Link>
      <div>
        <br />
      </div>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Activity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={activity.id}>
              <td>{index + 1}</td>
              <td>{activity.title}</td>
              <td>
                <Link
                  to={`/edit/${activity.id}`}
                  className="button is-small is-info mr-3"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteActivity(activity.id)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListAct;
