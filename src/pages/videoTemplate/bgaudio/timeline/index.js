import React, { useRef, useState, useEffect } from 'react'
import './index.scss'
import { SVG, List, Timeline, Spring, extend as SVGextend, Element as SVGElement } from '@svgdotjs/svg.js'
import { randomNum } from "@/utils/handy";

const TimeLine = (props) => {
    const { currentTime, startRange, endRange, duration, setaudiocurrent, isset } = props
    const [linenum, setlinenum] = useState(0)
    const [linesarr, setlinesarr] = useState()
    const lineRef= useRef()
    const canvas = SVG()
    canvas.on('click', (e) => {
        const width = lineRef.current.clientWidth
        const {layerX} = e
        const percentage = layerX / width
        const touchtime = percentage * duration
        if ( startRange < touchtime && endRange > touchtime) {
            setaudiocurrent(touchtime)
        }
    })
    function creatsvg () {
        const width = lineRef.current.clientWidth
        const height = lineRef.current.clientHeight
        const linwidth = isset ? 2.5 : 1.5
        const linspace = 3
        const linearr = []
        const linheight = [5, 9, 5, 9, 16, 9, 5, 13, 5, 9, 5, 4, 5, 11, 5, 7, 5, 7, 5, 3, 5, 3, 5, 9, 5, 9, 5, 9, 16, 9, 5, 13, 5, 9, 5, 4, 5, 11]
        const num = parseInt(width / (linwidth + linspace + 1))
        setlinenum(num)
        let thenum = 0
        while ( thenum <= num) {
            linearr.push(thenum*(linwidth + linspace + 1))
            thenum++
        }
        canvas.addTo(lineRef.current).size('100%', '100%')
        const group = canvas.group()
        const lines = new List( linearr.map( 
            (tx, i) => {
                const h = linheight[i] || 10
                const y = (height - h) / 2
                return group.line( 0, 0, 0, h ).x(tx).y(y)
            }
        ))
        group.center(width/2, height/2)
        setlinecolor(lines, num)
        const timeline = new Timeline()
        lines.timeline(timeline)
        setlinesarr(lines)
    }
    function setlinecolor(lines, num) {
        lines && lines.forEach((line, i) => {
            const progress = (duration / num) * i
            let color = isset ? 'rgba(223,242,255,0.2)' :'#D8DFE9'
            if (progress >= startRange && progress <= endRange) {
                color = isset ? 'rgba(169,214,255,1)' :'#A9CCFF'
                if(progress < currentTime) {
                    color = isset ? '#fff' : '#1890FF'
                }
            }
            line.stroke({color: color, width: 1.5})
                // .animate(new Spring(1000, 20)) // 有时间加个动画
        })
    }
    useEffect(() => {
        creatsvg()
    }, [])
    useEffect(() => {
        setlinecolor(linesarr, linenum)
    }, [currentTime]);
    return (<div className="line" ref={lineRef}></div>)
}
export default TimeLine
