import styles from './Categories.module.css'
// import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
// import axios from 'axios'
import IconItem from '../components/IconItem'

const UpdateCategories = () => {
    const icons = [
        { link: '/icons/travel.svg', title: 'Travel' },
        { link: '/icons/brands.svg', title: 'Brands' },
        { link: '/icons/art.svg', title: 'Art/Design' },
        { link: '/icons/book.svg', title: 'Books' },
        { link: '/icons/game.svg', title: 'Games' },
        { link: '/icons/food.svg', title: 'Food & Drinks' },
        { link: '/icons/car.svg', title: 'Cars' },
        { link: '/icons/bird.svg', title: 'Species' },
        { link: '/icons/colors.svg', title: 'Colors' },
        { link: '/icons/celebrity.svg', title: 'Celebrities' },
        { link: '/icons/song.svg', title: 'Songs' },
        { link: '/icons/first-aid-kit.svg', title: 'Health' },
        { link: '/icons/sport.svg', title: 'Sports' },
        { link: '/icons/technology.svg', title: 'Technology' },
        { link: '/icons/bike.svg', title: 'Bikes' },
        { link: '/icons/television.svg', title: 'Web Series' },
        { link: '/icons/video.svg', title: 'Videos' },
        { link: '/icons/fashion.svg', title: 'Fashion' },
        { link: '/icons/meme.svg', title: 'Memes' },
        { link: '/icons/rolemodel.svg', title: 'Role & Models' },
        { link: '/icons/interest.svg', title: 'Interested' },
        { link: '/icons/photos.svg', title: 'Photos' },
        { link: '/icons/quote.svg', title: 'Quotes' },
        { link: '/icons/movies.svg', title: 'Movies' }]

    const categories = [ // pre selected categories of the user
        { "piority": 1 },
        { "piority": 4 },
        { "piority": 7 },
        { "piority": 3 },
        { "piority": 10 },
        { "piority": 20 },
        { "piority": 2 }
    ]

    const initialTop_10 = categories.map(i => {
        return i.piority
    })

    const [top_10, setTop_10] = useState(initialTop_10)
    const [changed, setChanged] = useState(false)

    const [total, setTotal] = useState(10000)

    const handleClick = (id) => {
        let temp = top_10
        if (temp.includes(id)) {
            let p = temp.indexOf(id)
            setTotal(total - (temp.length - p) * 100)  // changing gross value

            let i = temp.length - 1
            while (temp[i] !== id) {
                temp.pop()
                i = i - 1
            }
            temp.pop()
            setTop_10(temp)
            changed ? setChanged(false) : setChanged(true)
        }
        else {
            temp.push(id)
            setTop_10(temp)
            changed ? setChanged(false) : setChanged(true)
            setTotal(total + 100)  // changing gross value
        }
    }

    const getList = () => {
        return top_10
    }

    const handleSubmit = () => {
        // save top_10 list to user's database
        console.log(top_10)
    }

    return (<>
        <div className={styles.top10_navbar}>
            <span className={styles.top10_navbar_logo}>DENAURLEN</span>
            <div className={styles.top10_navbar_ucoins}><img src="/icons/coins.svg" alt="" />{total}</div>
        </div>
        <div className={styles.top10body}>
            <div className={styles.top10_heading_container}>
                Update your Top #10 categories
            </div>

            <div className={styles.top10_items_container}>
                {
                    icons.map((item, i) => (
                        <IconItem key={i} item={item} id={i} handleClick={handleClick} getList={getList} changed={changed} />
                    ))
                }
            </div>
            <div className={styles.button_div}>
                <button className={styles.top10_button_container} disabled={top_10.length < 10} onClick={handleSubmit}>Update</button>
            </div>
        </div>
    </>
    )
}

export default UpdateCategories
