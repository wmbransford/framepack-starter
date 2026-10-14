import React from 'react'
import {AbsoluteFill,Composition,Sequence,registerRoot} from 'remotion'
import {FreeLaunch,type LaunchProps} from './FreeLaunch'
export type FilmProps = LaunchProps & { closingHeadline?:string; closingEyebrow?:string; closingTagline?:string }
const Film:React.FC<FilmProps>=({closingHeadline,closingEyebrow,closingTagline,...props})=><AbsoluteFill><Sequence durationInFrames={180}><FreeLaunch {...props}/></Sequence><Sequence from={180} durationInFrames={180}><FreeLaunch {...props} closing headline={closingHeadline ?? 'Your next chapter\nstarts here.'} eyebrow={closingEyebrow ?? 'GET STARTED WITH '+(props.brand||'orbit').toUpperCase()} tagline={closingTagline}/></Sequence></AbsoluteFill>
const defaults={brand:'orbit',headline:'Something good.\nComing your way.',eyebrow:'INTRODUCING ORBIT',background:'#d9f77d',foreground:'#182919',accent:'#35593a'}
const Root=()=> <><Composition id="LaunchHorizontal" component={Film} width={1280} height={720} fps={30} durationInFrames={360} defaultProps={defaults}/><Composition id="LaunchVertical" component={Film} width={720} height={1280} fps={30} durationInFrames={360} defaultProps={defaults}/></>
registerRoot(Root)
