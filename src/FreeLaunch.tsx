import React from 'react'
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
export type LaunchProps = { headline?:string; eyebrow?:string; background?:string; foreground?:string; accent?:string; brand?:string; closing?:boolean }
export const FreeLaunch: React.FC<LaunchProps> = ({headline='Something good.\nComing your way.',eyebrow='INTRODUCING ORBIT',background='#d9f77d',foreground='#182919',accent='#35593a',brand='orbit',closing=false}) => {
 const frame = useCurrentFrame(); const {fps,width,height} = useVideoConfig(); const portrait = height>width
 const progress=spring({frame,fps,config:{damping:22,stiffness:95}})
 const fontSize = portrait?width*.105:width*.075
 const words = headline.trim().slice(0,100).split('\n')
 return <AbsoluteFill style={{backgroundColor:background,color:foreground,fontFamily:'Arial, sans-serif',overflow:'hidden'}}>
  <AbsoluteFill style={{backgroundImage:`linear-gradient(${foreground}0c 1px, transparent 1px),linear-gradient(90deg,${foreground}0c 1px, transparent 1px)`,backgroundSize:`${width/14}px ${width/14}px`}}/>
  <div style={{position:'absolute',inset:width*.04,border:`1px solid ${foreground}33`,borderRadius:width*.025,transform:`scale(${.97+.03*progress})`}}/>
  <div style={{position:'absolute',left:width*.08,top:height*.095,fontSize:width*.025,fontWeight:700,letterSpacing:-width*.001}}>◒ {brand.slice(0,24)}</div>
  <div style={{position:'absolute',right:width*.08,top:height*.11,fontSize:width*.011,letterSpacing:width*.0015}}>A FRESH PERSPECTIVE</div>
  <div style={{position:'absolute',left:width*.08,right:width*.08,top:portrait?'34%':'32%'}}>
   <div style={{fontSize:width*(portrait?.023:.012),letterSpacing:width*.002,marginBottom:height*.04,opacity:progress}}>{eyebrow.slice(0,55)}</div>
   {words.map((line,i)=>{const p=spring({frame:frame-6-i*5,fps,config:{damping:23}});return <div key={i} style={{overflow:'hidden'}}><div style={{fontSize:Math.min(fontSize,width*.86/Math.max(line.length*.54,1)),lineHeight:1.04,fontWeight:600,letterSpacing:-fontSize*.055,transform:`translateY(${(1-p)*110}%)`}}>{line}</div></div>})}
  </div>
  <div style={{position:'absolute',bottom:height*.09,left:width*.08,fontSize:width*(portrait?.023:.014),opacity:interpolate(frame,[25,45],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}}>{closing?'Make room for what’s next. →':'A little less busy. A lot more possibility.'}</div>
  <div style={{position:'absolute',right:width*.08,bottom:height*.075,width:width*.058,height:width*.058,borderRadius:'50%',border:`1px solid ${accent}`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:width*.035,transform:`rotate(${interpolate(frame,[0,180],[-35,15])}deg)`}}>✳</div>
 </AbsoluteFill>
}
