import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
function VerticalTimelineItem(props) {
    return (
        <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date={props.date}
            iconStyle={{ background: '#3e497a', color: '#fff' }}
            icon={props.icon}
        >
            <h3 className='vertical-timeline-element-title'>{props.title}</h3>
            <p>{props.description}</p>
        </VerticalTimelineElement>
    )
}

export default VerticalTimelineItem