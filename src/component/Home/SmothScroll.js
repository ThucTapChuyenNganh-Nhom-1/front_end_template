// import React from 'react'
import { useEffect, useRef } from 'react'

export const SmothScroll = id => {
    const ref = useRef(null)
    useEffect(() => {
        const listener = e => {
            if (ref.current && window.location.hash === id) {
                ref.current.scrollIntoView({behavior: 'smooth'})
            }
        }
        window.addEventListener('hashchange', listener, true)
        return () => {
            window.removeEventListener('hashchange', listener)
        }
    }, [id])
    return {
        'data-anchor-id': id,
        ref
    }
}
