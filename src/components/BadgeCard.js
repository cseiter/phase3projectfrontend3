import React from 'react'

function BadgeCard({badge, onDeleteBadge, onUpdateBadge}) {
    const {id, badges_name, badges_is_earned, badges_is_eagle} = badge;

    function handleDeleteClick() {
        fetch('http://localhost:9393/badges/${id}', {
            method: "DELETE",
        })
        .then((r => r.json())
        .then(() => {onDeleteBadge(badge);
        });
    }

    function handleEarnClick() {
        const updateObj = {earned: badge.badges_is_earned = "yes",
    };













};

export default BadgeCard;