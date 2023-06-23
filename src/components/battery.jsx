import React, { useEffect, useState } from 'react';
import {
    MdBattery20, MdBattery30,
    MdBattery50, MdBattery60,
    MdBattery80, MdBattery90, MdBatteryFull,
    MdBatteryCharging20, MdBatteryCharging30,
    MdBatteryCharging50, MdBatteryCharging60,
    MdBatteryCharging80, MdBatteryCharging90, MdBatteryChargingFull
} from 'react-icons/md'

const Battery = () => {
    const [batteryLevel, setBatteryLevel] = useState(null)
    const [isCharging, setIsCharging] = useState(null)

    useEffect(() => {
        navigator.getBattery().then(battery => {
            const updateBatteryStatus = () => {
                setBatteryLevel(battery.level);
                setIsCharging(battery.charging)
            }

            updateBatteryStatus();
            battery.addEventListener('levelchange', updateBatteryStatus);
            battery.addEventListener('chargingchange', updateBatteryStatus);

            return () => {
                battery.removeEventListener('levelchange', updateBatteryStatus);
                battery.removeEventListener('chargingchange', updateBatteryStatus);
            }
        })
    }, [])

    const IconBattery = ( { amount } ) => {
        if(isCharging) {
            if(amount == 100) {
                return <MdBatteryChargingFull/>
            }
            else if(amount > 80 || amount == 90) {
                return <MdBatteryCharging90/>
            }
            else if(amount > 60 || amount == 80) {
                return <MdBatteryCharging80/>
            }
            else if(amount > 50 || amount == 60) {
                return <MdBatteryCharging60/>
            }
            else if(amount > 30 || amount == 50) {
                return <MdBatteryCharging50/>
            }
            else if(amount > 20 || amount == 30) {
                return <MdBatteryCharging30/>
            }
            else {
                return <MdBatteryCharging20/>
            }
        } else {
            if(amount == 100) {
                return <MdBatteryFull/>
            }
            else if(amount > 80 || amount == 90) {
                return <MdBattery90/>
            }
            else if(amount > 60 || amount == 80) {
                return <MdBattery80/>
            }
            else if(amount > 50 || amount == 60) {
                return <MdBattery60/>
            }
            else if(amount > 30 || amount == 50) {
                return <MdBattery50/>
            }
            else if(amount > 20 || amount == 30) {
                return <MdBattery30/>
            }
            else {
                return <MdBattery20/>
            }
        }
    } 



  return (
    <div className='mx-auto mt-12 border-2 p-4 rounded-lg'>
        <div className='text-3xl text-white font-semibold'>
            Battery Status
        </div>
        {batteryLevel !== null && (
            <>
                <div className='font-bold text-white text-2xl'>Battery Level : {batteryLevel * 100}%</div>
                <div className='text-6xl text-white'>
                    <IconBattery amount={batteryLevel * 100}/>
                </div>
                {/* <div>Charging: {isCharging ? 'Yes' : 'No'}</div> */}
                {/* <div className='w-24 h-12 bg-gray-200 border-2 border-gray-400 relative'>
                    <div className={`h-full flex justify-center items-center bg-green-400 w-[${batteryLevel * 100}%]`}>
                        {batteryLevel * 100}
                    </div>
                </div> */}
            </>
        )}
    </div>
  )
}

export default Battery