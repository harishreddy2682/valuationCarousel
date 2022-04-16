import React, { useState } from 'react'
import styles from './Leaderboard.module.scss'

const Leaderboard = () => {

    const countries = [
        'India',
        'Australia',
        'Russia',
        'UAE',
        'USA'
    ]

    const usersData = [
        {
            username: 'kalyan_varma',
            name: 'Kalyan Verma',
            image: '/images/leaderboard/profile.png',
            coinsInWallet: '12,09,00,000',
            growthStatus: 'positive'
        },
        {
            username: 'kalyan_varma',
            name: 'Kalyan Verma',
            image: '/images/leaderboard/profile.png',
            coinsInWallet: '12,09,00,000',
            growthStatus: 'neutral'
        },
        {
            username: 'kalyan_varma',
            name: 'Kalyan Verma',
            image: '/images/leaderboard/profile.png',
            coinsInWallet: '12,09,00,000',
            growthStatus: 'negative'
        },
        {
            username: 'kalyan_varma',
            name: 'Kalyan Verma',
            image: '/images/leaderboard/profile.png',
            coinsInWallet: '12,09,00,000',
            growthStatus: 'positive'
        },
    ]

    const [users, setUsers] = useState(usersData)

    const [selectedCountry, setSelectedCountry] = useState(countries[0])
    const [search, setSearch] = useState('')


    return (
        <div className={styles.container}>
            <span className={styles.mobileHeader}>
                <img src="/images/leaderboard/arrowLeft.svg" alt="" />
                <h1>Leaderboard</h1>
                <div className={styles.searchMobile}>
                    <img src="/images/leaderboard/search.svg" alt="" />
                    <input type="text" id='search' name='search' placeholder='Search...' value={search} onChange={e => setSearch(e.target.value)} />
                </div>
            </span>

            <div className={styles.filter}>
                <p>Filter Rank By: </p>
                <button id={styles.globalBtn}>Global</button>
                <button id={styles.countryBtn}>Country</button>
                <button id={styles.friendsBtn}>Friends</button>
                <select name="country" id="country" onChange={e => setSelectedCountry(e.target.value)}>
                    {countries.map((i) => <option key={i} value={i}>{i}</option>)}
                </select>
                <div className={styles.search}>
                    <img src="/images/leaderboard/search.svg" alt="" />
                    <input type="text" id='search' name='search' placeholder='Search...' value={search} onChange={e => setSearch(e.target.value)} />
                </div>
            </div>

            <div className={styles.top3_container}>
                <div id={styles.top_2} className={styles.top3_wrapper}>
                    <img src='/images/leaderboard/crown_silver.svg' className={styles.crown} alt="" />
                    <div className={styles.avatarWrapper}>
                        <img className={styles.userImg} src={usersData[1].image} alt="avatar" />
                        <img className={styles.userCountry} src="/images/leaderboard/country.svg" alt="" />
                    </div>
                    <h1 >{usersData[1].username}</h1>
                    <span>
                        <img src="/images/leaderboard/coins.svg" alt="" />
                        <p>{usersData[1].coinsInWallet}</p>
                    </span>
                </div>
                <div id={styles.top_1} className={styles.top3_wrapper}>
                    <img src='/images/leaderboard/crown_gold.svg' className={styles.crown} alt="" />
                    <div className={styles.avatarWrapper}>
                        <img className={styles.userImg} src={usersData[0].image} alt="avatar" />
                        <img className={styles.userCountry} src="/images/leaderboard/country.svg" alt="" />
                    </div>
                    <h1 >{usersData[0].username}</h1>
                    <span>
                        <img src="/images/leaderboard/coins.svg" alt="" />
                        <p>{usersData[0].coinsInWallet}</p>
                    </span>
                </div>
                <div id={styles.top_3} className={styles.top3_wrapper}>
                    <img src='/images/leaderboard/crown_bronze.svg' className={styles.crown} alt="" />
                    <div className={styles.avatarWrapper}>
                        <img className={styles.userImg} src={usersData[2].image} alt="avatar" />
                        <img className={styles.userCountry} src="/images/leaderboard/country.svg" alt="" />
                    </div>
                    <h1 >{usersData[2].username}</h1>
                    <span>
                        <img src="/images/leaderboard/coins.svg" alt="" />
                        <p>{usersData[2].coinsInWallet}</p>
                    </span>
                </div>
            </div>

            <div className={styles.topUsersContainer}>
                {users.map((user, index) => (
                    <div key={index} className={styles.userWrapper}>
                        <p className={styles.userIndex}>{index + 4}</p>
                        <img className={styles.userCountry} src="/images/leaderboard/countryRectangle.svg" alt="" />
                        <div style={{ "height": "fit-content", "width": "fit-content", "position": "relative" }}>
                            <img className={styles.userAvatar} src={user.image} alt="" />
                            <img className={styles.userCountryPhone} src="/images/leaderboard/country.svg" alt="" />
                        </div>
                        <span className={styles.nameWrapper}>
                            <p className={styles.userUsername}>{user.username}</p>
                            <p className={styles.userName}>{user.name}</p>
                            <span>
                                <img src="/images/leaderboard/coins.svg" alt="" />
                                <p>{user.coinsInWallet}</p>
                            </span>
                        </span>
                        <img className={styles.coin} src="/images/leaderboard/coins.svg" alt="" />
                        <p className={styles.userWalletCoins}>{user.coinsInWallet}</p>

                        {user.growthStatus === "positive" ? <img className={styles.growthIndicator} src="/images/leaderboard/triangleUp.svg" alt="" /> : user.growthStatus === "negative" ? <img className={styles.growthIndicator} src="/images/leaderboard/triangleDown.svg" alt="" /> : <span className={styles.growthIndicator}>
                            <img src="/images/leaderboard/triangleLeft.svg" alt="" />
                            <img src="/images/leaderboard/triangleRight.svg" alt="" />
                        </span>}

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Leaderboard