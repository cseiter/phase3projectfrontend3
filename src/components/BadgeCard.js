import React from 'react';

function BadgeCard({badge, onDeleteBadge, onUpdateBadge}) {
    const {id, badges_name, badges_is_earned, badges_is_eagle} = badge;

    function handleDeleteClick() {
        fetch('http://localhost:9393/badges/${id}', {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => {onDeleteBadge(badge);
        });
    }

    function handleEarnClick() {
        const updateObj = {earned: badge.badges_is_earned = "yes"
        };
        fetch('http://localhost:9393/badges/${id}', {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateObj),
        })
        .then((r) => r.json())
        .then(onUpdateBadge);
    }

    return (
        <div>
            <h2>{badges_name}</h2>
            <p>For Eagle? {badges_is_eagle}</p>
            <p>Earned? {badges_is_earned}</p>
            <button onClick={handleEarnClick}>Mark as earned</button>
            <button onClick={handleDeleteClick}>Delete badge</button>
        </div>
        );
    };

export default BadgeCard;