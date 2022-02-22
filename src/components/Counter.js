import { useState, useEffect } from 'react'
import React from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Mintaka')

    useEffect(() => {
        console.log(count)
        setCount(5)
        console.log(`count: ${count} name: ${name} `)
    }, [])

    useEffect(() => {
        setName(name === 'Mintaka' ? 'WebSchool' : 'Mintaka')
        console.log(`name: ${name} , count: ${count} `)
    }, [count])

    return (
        <div>
            <p>
                Hi {name} you clicked {count} times
            </p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <button onClick={() => setName(name === 'Mintaka' ? 'WebSchool' : 'Mintaka')}>
                Change name
            </button>
        </div>
    )
}

export default Counter 
