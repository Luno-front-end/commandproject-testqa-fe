import React from 'react'
import Diagram from '../Diagram/Diagram'

function Results() {
    return (
        <div className="container results_container">
            <h2 className="results_title">Results</h2>
            <p className="results_test">[ Testing theory_]</p>
            <Diagram />
            <div className="results_flex">
                <p className="results_results">Correct answers - <span>9</span></p>
                <p className="results_results">Total questions - <span>12</span></p>
            </div>
            <div className="results_img" />
            <h2 className="results_appraisal">Not bad!</h2>
            <p className="results_message">Dut you still need to learn some materials</p>
            <button className="results_button">
                <p className="results_text">Try again</p>
            </button>
        </div>
    )
}

export default Results

