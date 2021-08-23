import React, {useState} from "react";

function BadgeForm({onAddBadge}) {

    const [formData, setFormData] = useState({
        badges_name: "",
        badges_is_earned: "",
        badges_is_eagle: "",
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
        .then(onAddBadge);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Enter New Badge</h3>
                <input 
                type="text"
                name="badges_name"
                onChange={handleChange}
                value={formData.badges_name}
                placeholder="Enter badge name, underscore for spaces"
                />
                <br />
                <input
                type="text"
                name="badges_is_eagle"
                onChange={handleChange}
                value={formData.badges_is_eagle}
                placeholder="Is this for Eagle? yes/no"
                />
                <br />
                <input
                type="text"
                name="badges_is_earned"
                onChange={handleChange}
                value={formData.badges_is_earned}
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