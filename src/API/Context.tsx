import React, { createContext, useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, View } from 'react-native';
import assets from '../assets';

export const HomeContext = createContext(null);

export const Context = (props: any) => {

    const [homeData, setHomeData] = useState([]);

    const [reelsData, setReelsData] = useState([
        {
            id: 'p0',
            videoUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            image: assets.god_img,
        },
        {
            id: 'p1',
            videoUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            image: assets.god_img,
        },
        {
            id: 'p2',
            videoUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            image: assets.god_img,
        },
        {
            id: 'p3',
            videoUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            image: assets.god_img,
        },
        {
            id: 'p4',
            videoUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
            image: assets.god_img,
        },
        {
            id: 'p5',
            videoUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
            image: assets.god_img,
        },
        {
            id: 'p6',
            videoUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
            image: assets.god_img,
        },
        {
            id: 'p7',
            videoUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
            image: assets.god_img,
        },
    ]);

    const [index, setIndex] = useState(1);
    const [loading, setLoading] = useState(false);

    const [isPlayerInitialized, setIsPlayerInitialized] = useState(false);

    useEffect(() => {
        setLoading(true);
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://bharat-app-gi5w5.ondigitalocean.app/api/deity/getalldeity", requestOptions)
            .then(response => response.text())
            .then(result => {
                setLoading(false);
                // console.log('\n\n getalltemple: ', JSON.parse(result)?.data)
                setHomeData(JSON.parse(result)?.data)
            })
            .catch(error => console.log('error', error));
    }, [])

    return (
        <HomeContext.Provider value={{
            homeData,
            index,
            setIndex,
            setHomeData,
            reelsData,
            setReelsData,
            loading,
            setLoading,
            isPlayerInitialized,
            setIsPlayerInitialized,
        }}>
            {props.children}
        </HomeContext.Provider>
    );
}
