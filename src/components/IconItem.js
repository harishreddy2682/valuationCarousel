import styles from '../updateCategories/Categories.module.css'
import React, { useEffect, useState } from 'react'

const IconItem = ({ item, id, handleClick, getList, changed }) => {
    const [position, setPosition] = useState(null)

    let top_10 = []

    if (changed) {
        top_10 = getList()
    } else {
        top_10 = getList()
    }

    useEffect(() => {
        if (top_10.includes(id)) {
            setPosition(top_10.indexOf(id) + 1)
        } else {
            setPosition(null)
        }
        // eslint-disable-next-line
    }, [changed])

    return (
        <div className={position === null ? `${styles.top10_item}` : `${styles.top10_item} ${styles.top10_item_toggle}`} onClick={() => handleClick(id)} >

            {position !== null ? <div className={styles.top10_item_number}>{position}</div> : <div className={`${styles.top10_item_number} ${styles.toggle_item_visibility}`}></div>}

            <div className={styles.top10_icon_wrapper}>
                <img className={styles.top10_icon_img} src={item.link} alt="" />
                <p>{item.title}</p>
            </div>

        </div>
    )
}

export default IconItem