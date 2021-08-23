import React from 'react';
import BadgeCard from './BadgeCard';

function BadgeContainer( {badges, onDeleteBadge, onUpdateBadge}) {
    const badgeCards = badges.map((badge) => (
        <BadgeCard
            key={badge.id}
            badge={badge}
            onDeleteBage={onDeleteBadge}
            onUpdateBadge={onUpdateBadge}
        />
    ));
    return <div>{badgeCards}</div>;
}
export default BadgeContainer;