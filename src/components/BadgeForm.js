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
        .then(onAddBadge);
    }








};

export default BadgeForm;