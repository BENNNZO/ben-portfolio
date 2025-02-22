import React from 'react';

export default function TaskList() {
    return (
        <div className="absolute bottom-2 right-2 px-4 py-2 rounded-md bg-red-400 text-yellow-200">
            <h1>Road Map</h1>
            <ul className="list-disc list-inside">
                <li>
                    Hero
                    <ul className="list-disc list-inside pl-5">
                        <li>Picture Of Me</li>
                        <li>My Name</li>
                        <li>Contacts</li>
                    </ul>
                </li>
                <li>Talents</li>
                <li>Education</li>
                <li>More About Me</li>
            </ul>
        </div>
    );
}