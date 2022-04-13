import React from 'react'
import styles from './valuationItem.module.scss'

const ValuationItem = ({ username, date, grossCoins, netCoins, noOfPlayers, interestedCount, hour, minute, seconds, usernameHighestValuer }) => {
  return (
    <div className={styles.container}>

      <div className={styles.left}>
        <img src="/images/post.png" alt="" />
        <div className={styles.postDetails}>

          <div className={styles.profileWrapper}>
            <img src="/images/profile1.png" alt="" />
            <div>
              <h1>{username}</h1>
              <p>{date}</p>
            </div>
          </div>

          <div className={styles.attributes}>
            <div><p>Gross Coins:</p></div>
            <span>
              <img src="/images/coins.svg" alt="" />
              <p>{grossCoins}</p>
            </span>
          </div>

          <div className={styles.attributes}>
            <div><p>Net Coins:</p></div>
            <span>
              <img src="/images/coins.svg" alt="" />
              <p>{netCoins}</p>
            </span>
          </div>

          <div className={styles.attributes}>
            <div><p>No. of Players:</p></div>
            <span>
              <img src="/images/user.svg" alt="" />
              <p>{noOfPlayers}</p>
            </span>
          </div>

          <div className={styles.attributes}>
            <div><p>Interested Count:</p></div>
            <span>
              <img src="/images/thunder.svg" alt="" />
              <p>{interestedCount}</p>
            </span>
          </div>

          <div className={styles.attributes}>
            <div><p>Time Left:</p></div>
            <span className={styles.timer}>
              <p>{hour}</p>
              :
              <p>{minute}</p>
              :
              <p>{seconds}</p>
            </span>
          </div>

        </div>
      </div>

      <div className={styles.right}>
        <h1>Current Highest Valuer</h1>
        <img src="/images/profile2.png" alt="" />
        <p>{usernameHighestValuer}</p>
        <div>
          <button className={styles.follow_btn}>Follow</button>
          <button className={styles.message_btn}>Message</button>
        </div>
      </div>
    </div>
  )
}

ValuationItem.defaultProps = {
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
}

export default ValuationItem