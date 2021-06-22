import React, { useEffect, useState } from 'react';
import './itunes.scss'
import Loader from './Loader';

const Itunes = ({ search }) => {

    const [data, setData] = useState()
    const [firtLoad, setfirtLoad] = useState(false)

    const [Loading, setLoading] = useState(false)

    let title = ['Country', "Artist Name", "Track Name", "Track Price"]


    useEffect(() => {
        if (firtLoad) {

            setLoading(true)

            fetch(`https://itunes.apple.com/search?term=${search}`)
                .then(resp => resp.json())
                .then((result) => {

                    if (result.results.length) {
                        setData(result.results)
                    } else {
                        console.log('ss');
                        setData()
                    }
                }
                ).finally(() => {
                    setLoading(false)
                })
        } else {
            setfirtLoad(true)
        }
    }, [search])

    console.log(data);

    return data ? (<Loader isLoading={Loading}>
        <div id="artistList">
            <div className="width">
                {title.map((el, x) => <p className='red' key={x}>{el}</p>)}

            </div>
            {data.filter((_, indx) => indx < 4).map((ele, index) => {
                return (
                    <div className='wrap-box width' key={index}>
                        <p>{ele.country}</p>
                        <p>{ele.artistName}</p>
                        <p>{ele.trackName}</p>
                        <p>{ele.trackPrice}</p>
                    </div>
                )
            })}
        </div>
    </Loader>


    ) : <Loader isLoading={Loading}><span className="eror">შეიყვანეთ ლათინური ასოებით მომღერლის სახელი</span> </Loader>

};

export default Itunes;