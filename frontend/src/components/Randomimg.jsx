import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Randomimg = () => {
    const [imageUrl, setImageUrl] = useState('');
    const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
    
    useEffect(() => {
        const fetchImage = async () => {
            if (!accessKey) {
                console.error("Unsplash Access Key is missing");
                return;
            }
            try {
                const response = await axios.get('https://api.unsplash.com/photos/random', {
                    params: { query: 'agriculture' ,w:1920, h:500 },
                    headers: {
                        Authorization: `Client-ID ${accessKey}`,
                    },
                });

                setImageUrl(response.data.urls.regular);
            } catch (error) {
                console.error("Error fetching image:", error);
            }
        };

        fetchImage();
    }, [accessKey]);

    return (
        <>
        
            {imageUrl ? (
                <img src={imageUrl} alt="Random Agriculture" style={{ width: '100%', maxWidth: '1920',height:"500px" }} />
            ) : (
                <p>Loading image...</p>
            )}
        </>
    );
};

export default Randomimg;
