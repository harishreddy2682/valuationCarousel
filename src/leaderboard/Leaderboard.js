import React, { useState } from 'react'
import styles from './Leaderboard.module.scss'

const Leaderboard = () => {

    const usersData = [
        {
            username: 'kalyan_varma',
            name: 'Kalyan Verma',
            image: '/images/leaderboard/profile.png',
            country: '/images/leaderboard/country.svg',
            coinsInWallet: '52,65,000',
            indicator: 'replay'
        },
        {
            username: 'kalyan_varma',
            name: 'Kalyan Verma',
            image: '/images/leaderboard/profile.png',
            country: '/images/leaderboard/country.svg',
            coinsInWallet: '52,65,000',
            indicator: 'negative'
        },
        {
            username: 'kalyan_varma',
            name: 'Kalyan Verma',
            image: '/images/leaderboard/profile.png',
            country: '/images/leaderboard/country.svg',
            coinsInWallet: '52,65,000',
            indicator: 'positive'
        },
        {
            username: 'kalyan_varma',
            name: 'Kalyan Verma',
            image: '/images/leaderboard/profile.png',
            country: '/images/leaderboard/country.svg',
            coinsInWallet: '52,65,000',
            indicator: 'positive'
        },
    ]
    // eslint-disable-next-line
    const [users, setUser] = useState(usersData)

    return (
        <div className={styles.leaderboardRoot}>
            <div className={styles.container}>
                <div className={styles.mobileHeader}>
                    <img src="images/leaderboard/arrowLeft.svg" alt="back" />
                    <p>Leaderboard</p>
                    <img src="images/leaderboard/search.svg" alt="search" />
                </div>
                <div className={styles.filterDiv}>
                    <p>Filter Rank By: </p>
                    <button id={styles.globalBtn}>Global</button>
                    <button id={styles.countryBtn}>Country</button>
                    <button id={styles.friendsBtn}>Friends</button>

                    <div className={styles.search}>
                        <img src="/images/leaderboard/search.svg" alt="" />
                        <input type="text" id='search' name='search' placeholder='Search...' />
                    </div>
                </div>

                <div className={styles.listTitleDiv}>
                    <p className={styles.rank}>Rank</p>
                    <p className={styles.country}>Country</p>
                    <p className={styles.profile}>Profile</p>
                    <p className={styles.ucoins}>U-Coins</p>
                    <p className={styles.indicator}>Indicator</p>
                </div>

                <div className={styles.top1}>
                    <img className={styles.crown} src="images/leaderboard/crown_gold.svg" alt="1" />
                    <span className={`${styles.mobileAvatarBox} ${styles.mobile}`}>
                        <img className={styles.mobileAvatar} src={usersData[0].image} alt="" />
                        <img className={styles.mobileCountry} src="images/leaderboard/countryRound.svg" alt="" />
                    </span>
                    <div className={`${styles.mobileUsernameBox} ${styles.mobile}`}>
                        <p>{usersData[0].username}</p>
                        <span>
                            <img src="/images/leaderboard/coins.svg" alt="" />
                            <p>{usersData[0].coinsInWallet}</p>
                        </span>
                    </div>
                    <img className={styles.country} src={usersData[0].country} alt="" />
                    <img className={styles.avatar} src={usersData[0].image} alt="" />
                    <span className={styles.usernameSpan}>
                        <p className={styles.username}>{usersData[0].username}</p>
                        <p>{usersData[0].name}</p>
                    </span>
                    <span className={styles.coinsSpan}>
                        <img className={styles.top1Coin} src="/images/leaderboard/coins.svg" alt="" />
                        <p>{usersData[0].coinsInWallet}</p>
                    </span>
                    {usersData[0].indicator === "positive" ? <img className={styles.indicator} src="/images/leaderboard/triangleUp.svg" alt="" /> : usersData[0].indicator === "negative" ? <img className={styles.indicator} src="/images/leaderboard/triangleDown.svg" alt="" /> : usersData[0].indicator === "plus" ? <p className={styles.indicator}>+</p> : usersData[0].indicator === "replay" ? <img className={styles.indicator} src="/images/leaderboard/replay.svg" alt="" /> : <span className={styles.indicator}>
                        <img src="/images/leaderboard/triangleLeft.svg" alt="" />
                        <img src="/images/leaderboard/triangleRight.svg" alt="" />
                    </span>}
                </div>
                <div className={styles.top2}>
                    <img className={styles.crown} src="images/leaderboard/crown_silver.svg" alt="2" />
                    <span className={`${styles.mobileAvatarBox} ${styles.mobile}`}>
                        <img className={styles.mobileAvatar} src={usersData[1].image} alt="" />
                        <img className={styles.mobileCountry} src="images/leaderboard/countryRound.svg" alt="" />
                    </span>
                    <div className={`${styles.mobileUsernameBox} ${styles.mobile}`}>
                        <p>{usersData[1].username}</p>
                        <span>
                            <img src="/images/leaderboard/coins.svg" alt="" />
                            <p>{usersData[1].coinsInWallet}</p>
                        </span>
                    </div>
                    <img className={styles.country} src={usersData[1].country} alt="" />
                    <img className={styles.avatar} src={usersData[1].image} alt="" />
                    <span className={styles.usernameSpan}>
                        <p className={styles.username}>{usersData[1].username}</p>
                        <p>{usersData[1].name}</p>
                    </span>
                    <span className={styles.coinsSpan}>
                        <img className={styles.top1Coin} src="/images/leaderboard/coins.svg" alt="" />
                        <p>{usersData[1].coinsInWallet}</p>
                    </span>
                    {usersData[1].indicator === "positive" ? <img className={styles.indicator} src="/images/leaderboard/triangleUp.svg" alt="" /> : usersData[1].indicator === "negative" ? <img className={styles.indicator} src="/images/leaderboard/triangleDown.svg" alt="" /> : usersData[1].indicator === "plus" ? <p className={styles.indicator}>+</p> : usersData[1].indicator === "replay" ? <img className={styles.indicator} src="/images/leaderboard/replay.svg" alt="" /> : <span className={styles.indicator}>
                        <img src="/images/leaderboard/triangleLeft.svg" alt="" />
                        <img src="/images/leaderboard/triangleRight.svg" alt="" />
                    </span>}
                </div>
                <div className={styles.top3}>
                    <img className={styles.crown} src="images/leaderboard/crown_bronze.svg" alt="3" />
                    <span className={`${styles.mobileAvatarBox} ${styles.mobile}`}>
                        <img className={styles.mobileAvatar} src={usersData[2].image} alt="" />
                        <img className={styles.mobileCountry} src="images/leaderboard/countryRound.svg" alt="" />
                    </span>
                    <div className={`${styles.mobileUsernameBox} ${styles.mobile}`}>
                        <p>{usersData[2].username}</p>
                        <span>
                            <img src="/images/leaderboard/coins.svg" alt="" />
                            <p>{usersData[2].coinsInWallet}</p>
                        </span>
                    </div>
                    <img className={styles.country} src={usersData[2].country} alt="" />
                    <img className={styles.avatar} src={usersData[2].image} alt="" />
                    <span className={styles.usernameSpan}>
                        <p className={styles.username}>{usersData[2].username}</p>
                        <p>{usersData[2].name}</p>
                    </span>
                    <span className={styles.coinsSpan}>
                        <img className={styles.top1Coin} src="/images/leaderboard/coins.svg" alt="" />
                        <p>{usersData[2].coinsInWallet}</p>
                    </span>
                    {usersData[2].indicator === "positive" ? <img className={styles.indicator} src="/images/leaderboard/triangleUp.svg" alt="" /> : usersData[2].indicator === "negative" ? <img className={styles.indicator} src="/images/leaderboard/triangleDown.svg" alt="" /> : usersData[2].indicator === "plus" ? <p className={styles.indicator}>+</p> : usersData[2].indicator === "replay" ? <img className={styles.indicator} src="/images/leaderboard/replay.svg" alt="" /> : <span className={styles.indicator}>
                        <img src="/images/leaderboard/triangleLeft.svg" alt="" />
                        <img src="/images/leaderboard/triangleRight.svg" alt="" />
                    </span>}
                </div>
                {
                    users.map((user, index) => (
                        <div className={styles.singleList} key={index}>
                            <p className={styles.index}>{index + 4}</p>
                            <span className={`${styles.mobileAvatarBox} ${styles.mobile}`}>
                                <img className={styles.mobileAvatar} src={usersData[2].image} alt="" />
                                <img className={styles.mobileCountry} src="images/leaderboard/countryRound.svg" alt="" />
                            </span>
                            <div className={`${styles.mobileUsernameBox} ${styles.mobile}`}>
                                <p>{usersData[2].username}</p>
                                <span>
                                    <img src="/images/leaderboard/coins.svg" alt="" />
                                    <p>{usersData[2].coinsInWallet}</p>
                                </span>
                            </div>
                            <img className={styles.country} src={user.country} alt="" />
                            <img className={styles.avatar} src={user.image} alt="" />
                            <span className={styles.usernameSpan}>
                                <p className={styles.username}>{user.username}</p>
                                <p>{user.name}</p>
                            </span>
                            <span className={styles.coinsSpan}>
                                <img className={styles.top1Coin} src="/images/leaderboard/coins.svg" alt="" />
                                <p>{user.coinsInWallet}</p>
                            </span>
                            {user.indicator === "positive" ? <img className={styles.indicator} src="/images/leaderboard/triangleUp.svg" alt="" /> : user.indicator === "negative" ? <img className={styles.indicator} src="/images/leaderboard/triangleDown.svg" alt="" /> : user.indicator === "plus" ? <p className={styles.indicator}>+</p> : user.indicator === "replay" ? <img className={styles.indicator} src="/images/leaderboard/replay.svg" alt="" /> : <span className={styles.indicator}>
                                <img src="/images/leaderboard/triangleLeft.svg" alt="" />
                                <img src="/images/leaderboard/triangleRight.svg" alt="" />
                            </span>}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Leaderboard