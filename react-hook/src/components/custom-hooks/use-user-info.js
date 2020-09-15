import { useState, useEffect, useRef } from 'react'
import { debounce } from 'lodash';
const prefix = 'https://api.github.com/users/';

let controller = new AbortController()
let signal = controller.signal

const useUserInfo = (username = 'yuwanlin') => {
    const fetchRef = useRef(null)
    const [userInfo, setUserInfo] = useState({})
    const handleData = data => {
        setUserInfo(data)
    }
    useEffect(() => {
        const fetchData = (username) => {
            fetch(`${prefix}${username}`).then(res => {
                return res.json()
            }).then(data => {
                handleData(data)
            })
        }
        fetchRef.current = debounce(fetchData, 1000)
    }, [])

    useEffect(() => {
        fetchRef.current(username)
    }, [username])

    return userInfo
}

export default useUserInfo