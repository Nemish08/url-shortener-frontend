import postData from '../api/post_url'
import { useEffect, useState } from 'react'

export default function Home() {

    const [url, setUrl] = useState("")
    const [id, setId] = useState("")

    const urlhandler = () => {
        postData({ "url": url }, setId)
    }

    useEffect(() => {
        if (url.length == 0) {
            setId("");
        }
    }, [url])

    return (
        <>
            
            <h1>URL Shortner</h1>
            <div>
                <input
                    onChange={(e) => setUrl(e.target.value)}
                    type='text'
                    placeholder='Example : https://google.com'
                />
                <button onClick={urlhandler}>go</button>
            </div>
            <div>
                {id ? <a>http:/localhost:8000/url/{id}</a> : <></>}
            </div>
        </>
    )
}