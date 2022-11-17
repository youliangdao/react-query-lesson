import React, { FC } from 'react'
import RTKitA from './RTKitA'
import RTKitB from './RTKitB'
import RTKitC from './RTKitC'
import RTKitD from './RTKitD'

const MainRTKit: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-40">
      <RTKitA />
      <RTKitB />
      <RTKitC />
      <RTKitD />
    </div>
  )
}

export default MainRTKit
