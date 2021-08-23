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








};

export default BadgeForm;