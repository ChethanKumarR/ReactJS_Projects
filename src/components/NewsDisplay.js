import React from 'react'

const NewsDisplay = (props) => {
   
    const renderList = props.datalist.map((data) => {
        return (
            <div key={data.id}>
                <h2>{data.title}</h2>
                <p>{data.feed}</p>
            </div>
        )
    })

    return (
        <React.Fragment>
            {renderList}
        </React.Fragment>
    )
}

export default NewsDisplay;