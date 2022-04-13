import React, { useState } from 'react'
import styles from './valuationCarousel.module.scss'
import ValuationItem from './ValuationItem'

const ValuationCarousel = () => {

    const valuationItemList = [
        {
            username: 'meenu_sharma',
            date: '16 July 2021, 02:20 pm',
            grossCoins: '17,100,000',
            netCoins: '45,000',
            noOfPlayers: '67',
            interestedCount: '56,000',
            hour: '42',
            minute: '12',
            seconds: '34',
            usernameHighestValuer: 'kalyan_varma'
        },
        {
            username: '2',
            date: '16 July 2021, 02:20 pm',
            grossCoins: '17,100,000',
            netCoins: '45,000',
            noOfPlayers: '67',
            interestedCount: '56,000',
            hour: '42',
            minute: '12',
            seconds: '34',
            usernameHighestValuer: 'kalyan_varma'
        },
        {
            username: '3',
            date: '16 July 2021, 02:20 pm',
            grossCoins: '17,100,000',
            netCoins: '45,000',
            noOfPlayers: '67',
            interestedCount: '56,000',
            hour: '42',
            minute: '12',
            seconds: '34',
            usernameHighestValuer: 'kalyan_varma'
        }
    ]

    const [x, setX] = useState(0)

    const goLeft = () => {
        x === 0 ? setX(-100*(valuationItemList.length-1)) : setX(x + 100)
    }

    const goRight = () => {
        x === -100*(valuationItemList.length-1) ? setX(0) : setX(x - 100)
    }

    return (
        <div className={styles.valuationCarousel}>
            {valuationItemList.map((item, index) => (
                <div className={styles.valuationCarouselItem} style={{ transform: `translateX(${x}%)` }} key={index}>
                    <ValuationItem username={item.username} date={item.date} grossCoins={item.grossCoins} netCoins={item.netCoins} noOfPlayers={item.noOfPlayers} interestedCount={item.interestedCount} usernameHighestValuer={item.usernameHighestValuer} />
                </div>
            ))}
            <button className={styles.leftSlider} onClick={goLeft}><img src="./images/arrowLeft.svg" alt="" /></button>
            <button className={styles.rightSlider} onClick={goRight}><img src="./images/arrowRight.svg" alt="" /></button>
        </div>
    )
}

export default ValuationCarousel
