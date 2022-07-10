import React, { useState } from 'react';
import './Youtube.css'

const Youtube = () => {
    const [link, setLink] = useState('');

    const handleSubmit =(e) => {
        e.preventDefault();
        const searchedText= e.target.youtubeLink.value;
        const splitedText = searchedText.split('?v=')[1];
        const finalLink = splitedText.substring(0,11);
        setLink(finalLink);
        e.target.reset();

    }
    
    const url = `https://www.youtube.com/embed/${link}`
    return (
        <div>
            <div>
                <div className='navbar'></div>
                <div className='canvas-container'>
                    <div className='canvas'>
                        <iframe width="860" height="450" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className='search-area'>
                        <form onSubmit={handleSubmit}>
                            <input className='searched-field' type="text" name="youtubeLink" />
                            <input className='searched-button' type="submit" value="Search"></input>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Youtube;