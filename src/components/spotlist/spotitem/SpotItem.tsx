import React from 'react'
import "./spotitem.scss"
import { useNavigate } from 'react-router-dom';

function SpotItem() {
  const navigate = useNavigate()
  const jumpToSpot = () => {
    navigate("/spots/1")

  }
  return (
    <div className="spotItemContainer" onClick={(() => jumpToSpot())}>
      <img src="https://www.owd.jp/wp-content/uploads/2018/04/DSC7678.jpg" alt="" />
      <div className="info">
        <div className="name">
          ドーミーインEXPRESS目黒青葉台

        </div>
        <div className="address">
          東京都 目黒区

        </div>
        <div className="feature">
          ホテルの為宿泊者のみ、施設が利用できる。 タトゥーNG。 ◎ただし、貸切利用の場合は上記に当てはまらない。

        </div>
      </div>
      <div className="right">
        <div className="like">
          <span className='title'>いいね</span>
          <span className='number'>10</span>

        </div>
        <div className="post">
          <span className='title'>投稿</span>
          <span className='number'></span>

        </div>
      </div>

    </div>
  )
}

export default SpotItem