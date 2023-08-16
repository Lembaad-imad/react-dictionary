import React from 'react'

const Result = ({display,sample,text,defination,example}) => {
  return (
    <section style={display}>
        <div class="result" id="result">
        <div class="word">
            <h3 id="theword">{sample}</h3>
            <button><i class="fa-solid fa-volume-high"></i></button>
        </div>
        <div class="details">
            <p id="pos">{text}</p>
        </div>
        <p class="meaning" id="meaning">
            {defination}
        </p>
        <p class="example" id="example">
            {example}
        </p>
    </div>
    </section>
  )
}

export default Result
