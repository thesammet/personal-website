import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import VerticalTimelineItem from '../components/VerticalTimelineItem'
import { School, Work, WorkOff, Computer } from '@material-ui/icons'
function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineItem title={"X"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                    date={"2021-2022"}
                    icon={<WorkOff />} />
                <VerticalTimelineItem title={"X"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                    date={"2020-2021"}
                    icon={<Work />} />
                <VerticalTimelineItem title={"X"}
                    description={"Lorem ipsum dolor sit amet"}
                    date={"2010-2014"}
                    icon={<Computer />} />
                <VerticalTimelineItem title={"X"}
                    description={"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                    date={"2010-2014"}
                    icon={<School />} />
            </VerticalTimeline>
        </div>
    )
}

export default Experience