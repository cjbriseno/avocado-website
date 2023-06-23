import React from 'react';

function ContentBox({ title, content }) {
    return (
            <div className="bg-black p-4 rounded-3xl shadow">
                <h2 className="font-manrope text-xl font-bold mb-2 text-lgreen">{title}</h2>
                <p className="font-manrope font-light text-lgreen">{content}</p>
            </div>
    );
}

export default ContentBox;