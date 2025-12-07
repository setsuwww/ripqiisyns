import React from 'react'
import { balls } from '@/constants/balls'

const BallsBackground = () => <div className="absolute inset-0 pointer-events-none z-0"> {balls.map((b, i) => <div key={i} className={`absolute rounded-full ${b.className} transform`}/>)} </div>

export default React.memo(BallsBackground)
