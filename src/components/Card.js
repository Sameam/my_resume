import React from 'react';

const Card = ({data}) => {
  return (
    <div className='row'>
        {data.map((item) => {
          return (
            <div className="col-md-6 lead mb-2 d-flex align-items-stretch" style={{float:"left"}} >
            <div className="card mb-2">
              <img className="card-img-top"
              src={item.image} alt="Card cap" />
              <div className="card-body card">
                <h4 className="card-title">{item.title}</h4>
                <p className="card-text">Requirements: {item.requirement}</p>
                {item.backend ? <p className="card-text">Backend: {item.backend}</p> : <p className="card-text">Description: {item.description}</p>}
                {item.frontend && <p className="card-text">Frontend: {item.frontend}</p>}
                {item.upcoming && <p>Upcoming Features: {item.upcoming}</p>}
                {item.url && <a href={item.url}>Visit Website</a>}
                {item.source_code && <a className='card-text' href={item.source_code}>Source Code</a>}
              </div>
            </div>  
            </div>
          );
        })}
    </div>  
  )
}  


export default Card;
