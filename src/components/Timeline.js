import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';
import { Typography } from '@material-ui/core';


const Timeline = ({data}) => {

  return (
    <VerticalTimeline>
      {data.map((item) => {
        
        const descriptions = item.description.split('-').map((description) => description.trim()).filter(description => description !== "")
        return (
          <VerticalTimelineElement
            key={item.title}
            date={item.date}
          >
            <Typography variant='h5' className='vertical-timeline-element-title' style={{fontFamily:'Roboto", sans-serif'}}>
              {item.title}
            </Typography>
            <Typography variant='h6' className='vertical-timeline-element-subtitle' style={{fontFamily:'Roboto", sans-serif'}}>
              {item.subtitle}
            </Typography>
            <div>
              {descriptions.map((description,index) => (
                <p key={index}>- {description}</p>
              ))}
            </div>
            <div dangerouslySetInnerHTML={{ __html: item.html }} />
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;