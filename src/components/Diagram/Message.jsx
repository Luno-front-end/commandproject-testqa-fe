// Excellent!
// Keep it up and you’ll get a cookie)

// Not bad!
// Dut you still need to learn some materials.

// Bad!
// You need to devote more time to study.

// Terrible! 
// Do you know anything?

// Are you serious?
// Go study!
import { useState, useEffect } from 'react';
import img1 from "../../images/Results/1.webp";
import img2 from "../../images/Results/2.webp";
import img3 from "../../images/Results/3.webp";
import img4 from "../../images/Results/4.webp";
import img5 from "../../images/Results/5.webp";
import PropTypes from 'prop-types'

function Message({ correctAnswers = 0 }) {
    const [img, setImg] = useState('')
    const [text, setText] = useState('')
    const [mes, setMes] = useState('')

    useEffect(() => {
        if (correctAnswers === 0) {
            setText('Go study!')
            setMes('Are you serious?')
            setImg(img5)
        } else if (correctAnswers >= 1 && correctAnswers <= 4) {
            setText('Do you know anything?')
            setMes('Terrible!')
            setImg(img3)
        } else if (correctAnswers >= 5 && correctAnswers <= 7) {
            setText('You need to devote more time to study.')
            setMes('Bad!')
            setImg(img1)
        } else if (correctAnswers >= 8 && correctAnswers <= 11) {
            setText('Dut you still need to learn some materials.')
            setMes('Not bad!')
            setImg(img2)
        } else if (correctAnswers === 12) {
            setText('Keep it up and you’ll get a cookie)')
            setMes('Excellent!')
            setImg(img4)
        }
    }, [correctAnswers])

    return <>
        <img
            src={img}
            alt="404 error"
            width="120px"
            height="120px"
            className="results_img"
        />
        <h2 className="results_appraisal">{mes}</h2>
        <p className="results_message">{text}</p>
    </>
}

Message.propTypes = {
    correctAnswers: PropTypes.number
}

export default Message