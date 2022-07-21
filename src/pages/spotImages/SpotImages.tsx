import React, { FC, useRef, useState, useEffect} from 'react'
import "./spotimages.scss";


const SpotImages: FC = () => {
  const [file, setFile] = useState<any>(null)
  const hiddenFileInput = useRef<HTMLInputElement>(null)


  const handleClick = () => {
    hiddenFileInput.current?.click()
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = event.target.files?.[0]
    if (fileUploaded) {
      setFile(fileUploaded)
    }
  }

  const submitSpot = () => {

  }

  return (
    <div className='spotImagesContainer'>
      <div className="headContainer">
        <div className="title">
          スポットの画像を登録
        </div>

        <div className="description">
          アップロードする写真はご自身で撮影した写真か、使用許可をいただいた写真のみでお願いします。 <br />
          不適切な画像をアップロードした場合、運営判断で削除する場合がございます。
        </div>
      </div>

      <div className="flowContainer">
        <div className="first">
          01施設情報入力
        </div>
        <div className="second active">
          02施設画像登録
        </div>
        <div className="third">
          03登録完了
        </div>
      </div>

      <div className="basicInfoContainer">
        <div className="headerTitle">
          画像登録
        </div>
        <div className="container">
          <div className="containerInside">
            <div className="description">
              画像は追加と差し替えのみ行うことができます。 <br />
              特定画像の削除ご希望の方はお手数ですが、お問い合わせフォームよりご連絡ください。
            </div>
            <div className="inputContainers">
              <div className="inputContainer">
                <div className="title">メイン画像</div>
                <img src="" alt="" />
                <button type="button" onClick={handleClick}>画像を登録する</button>
                <input
                  type="file"
                  ref={hiddenFileInput}
                  style={{ display: 'none' }}
                  onChange={handleChange}
                />
                <div className="captionContainer">
                  <span className='title'>キャプション</span>
                  <input type="text" placeholder='' />
                </div>
              </div>

              <div className="inputContainer">
                <div className="title">サブ画像１</div>
                <img src="" alt="" />
                <button type="button" onClick={handleClick}>画像を登録する</button>
                <input
                  type="file"
                  ref={hiddenFileInput}
                  style={{ display: 'none' }}
                  onChange={handleChange}
                />
                <div className="captionContainer">
                  <span className='title'>キャプション</span>
                  <input type="text" placeholder='' />
                </div>
              </div>

              <div className="inputContainer">
                <div className="title">サブ画像１</div>
                <img src="" alt="" />
                <button type="button" onClick={handleClick}>画像を登録する</button>
                <input
                  type="file"
                  ref={hiddenFileInput}
                  style={{ display: 'none' }}
                  onChange={handleChange}
                />
                <div className="captionContainer">
                  <span className='title'>キャプション</span>
                  <input type="text" placeholder='' />
                </div>
              </div>

              <div className="inputContainer">
                <div className="title">サブ画像２</div>
                <img src="" alt="" />
                <button type="button" onClick={handleClick}>画像を登録する</button>
                <input
                  type="file"
                  ref={hiddenFileInput}
                  style={{ display: 'none' }}
                  onChange={handleChange}
                />
                <div className="captionContainer">
                  <span className='title'>キャプション</span>
                  <input type="text" placeholder='' />
                </div>
              </div>

              <div className="inputContainer">
                <div className="title">サブ画像３</div>
                <img src="" alt="" />
                <button type="button" onClick={handleClick}>画像を登録する</button>
                <input
                  type="file"
                  ref={hiddenFileInput}
                  style={{ display: 'none' }}
                  onChange={handleChange}
                />
                <div className="captionContainer">
                  <span className='title'>キャプション</span>
                  <input type="text" placeholder='' />
                </div>
              </div>

              <div className="inputContainer">
                <div className="title">サブ画像４</div>
                <img src="" alt="" />
                <button type="button" onClick={handleClick}>画像を登録する</button>
                <input
                  type="file"
                  ref={hiddenFileInput}
                  style={{ display: 'none' }}
                  onChange={handleChange}
                />
                <div className="captionContainer">
                  <span className='title'>キャプション</span>
                  <input type="text" placeholder='' />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div className="backButtonContainer">
        <button onClick={(() => submitSpot())}>戻る</button>
      </div>

      <div className="buttonContainer">
        <button onClick={(() => submitSpot())}>登録を完了する</button>
      </div>


    </div>
  )
}

export default SpotImages