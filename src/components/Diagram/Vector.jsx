import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function Vector({ type = "R", correctAnswers= 0 }) {
    const [width, setWidth] = useState(null)
    const [widthQ, setWidthQ] = useState(null)

    const onWidth = (e) => {
        if (e.target.innerWidth === widthQ) {
            return
        }
        setWidthQ(e.target.innerWidth)
    }

    useEffect(() => {
        window.addEventListener(`resize`, onWidth, false);
        return () => {
            window.removeEventListener('resize', onWidth)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [widthQ])

    useEffect(() => {
        
    
  }, [widthQ])

    useEffect(() => {
        if (window.innerWidth < 768) {
           return setWidth('M')
        } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
           return setWidth('T')
        } else {
           return setWidth('D')
        }
    }, [widthQ])

    if (correctAnswers === 1 && width === "M") {
        return (<svg className={`vector-diagram`} width="45" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M45 1H23L5.5 12.5" stroke="#000" /><circle cx="3" cy="13.5" r="3" fill="#fff" /></svg>)
    }

    if (width === "M") {
        return type === "R"
            ? (<svg className={`vector${type}-diagram`} width="66" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M66 1H23L5.5 12.5" stroke="#000" /><circle cx="3" cy="13.5" r="3" fill="#fff" /></svg>)
            : (<svg className={`vector${type}-diagram`} width="45" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M45 1H23L5.5 12.5" stroke="#000" /><circle cx="3" cy="13.5" r="3" fill="#fff" /></svg>)
    }

    if (width === "T") {
      return  (<svg className={`vector${type}-diagram`} width="93" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M92.5 1H23L5.5 12.5" stroke="#000"/><circle cx="3" cy="13.5" r="3" fill="#fff"/></svg>)
    }
    
    if (width === "D") {
       return (<svg className={`vector${type}-diagram`} width="133" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M133 1H23L5.5 12.5" stroke="#000"/><circle cx="3" cy="13.5" r="3" fill="#fff"/></svg>)
    }

    return <></>
}

Vector.propTypes = {
    type: PropTypes.string,
    correctAnswers: PropTypes.number
}

export default Vector


