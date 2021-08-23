import React, {useState} from "react";

function BadgeForm({onAddBadge}) {

    const [formData, setFormData] = useState({
        name: "",
        earned: "",
        eagle: "",
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newBadge = {...formData};

        fetch("http://localhost:9393/badges", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBadge),
        })
        .then((r) => r.json())
        .then(console.log(newBadge))
        .then(onAddBadge);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Enter New Badge</h3>
                <input 
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Enter badge name, underscore for spaces"
                />
                <br />
                <input
                type="text"
                name="eagle"
                onChange={handleChange}
                value={formData.eagle}
                placeholder="Is this for Eagle? yes/no"
                />
                <br />
                <input
                type="text"
                name="earned"
                onChange={handleChange}
                value={formData.earned}
                placeholder="Is this badge already earned? yes/no"
                />
                <br />
                <input 
                type="submit"
                name="submit"
                value="Create New Badge"
                />
            </form>
        </div>
    );
};

export default BadgeForm;