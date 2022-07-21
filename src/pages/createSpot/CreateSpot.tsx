import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import PrefectureList from '../../components/prefectureList/PrefectureList';
import "./createspot.scss"

const CreateSpot = () => {
    const navigate = useNavigate()
    const jumpToAddImages = () => {
        console.log(`name: ${name}`)
        console.log(`prefecture: ${prefecture}`)
        navigate("/spots/10/images/new")
    }

    const [name, setName] = useState<string>("")
    const [zip, setZip] = useState<string>("")
    const [prefecture, setPrefecture] = useState<string>("")
    const [address1, setAddress1] = useState<string>("")
    const [address2, setAddress2] = useState<string>("")
    const [address3, setAddress3] = useState<string>("")
    const [access, setAccess] = useState<string>("")
    const [parking, setParking] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [hp, setHp] = useState<string>("")
    const [close, setClose] = useState<string>("")
    const [open, setOpen] = useState<string>("")
    const [minPrice, setMinPrice] = useState<string>("")
    const [rentalPrice, setRentalPrice] = useState<string>("")

    const [water, setWater] = useState<string>("")
    const [animal, setAnimal] = useState<string>("")
    const [adventure, setAdventure] = useState<string>("")

    const [other, setOther] = useState<string>("")

    return (
        <div className='createSpotContainer'>
            <div className="headContainer">
                <div className="title">
                    スポットを登録
                </div>

                <div className="description">

                    サウナ施設登録の協力をお願いします。 <br />
                    入力項目が多数あるので、不明な箇所は未入力のままでも登録できます。<br />
                    一度施設を登録した後はサウナイキタイのユーザーなら誰でも情報を編集することができます。 <br />
                    既に同じ施設が登録されている場合は後から登録したページは削除されますのでご注意ください。
                </div>
            </div>

            <div className="flowContainer">
                <div className="first">
                    01施設情報入力
                </div>
                <div className="second">
                    02施設画像登録
                </div>
                <div className="third">
                    03登録完了
                </div>
            </div>

            <div className="basicInfoContainer">
                <div className="headerTitle">
                    施設基本情報
                </div>
                <div className="container">
                    <div className="containerInside">
                        <div className="description">
                            施設登録後は誰でも編集できるようになります。入力できる項目のみお願いします。<br />

                            いつも施設情報を登録していただきありがとうございます。 <br />
                            近ごろ既に施設情報が登録されている施設の重複登録が多くなっています。 <br />
                            新規登録施設は運営が1件1件確認し、重複している場合は削除を行っていますが、 <br />
                            登録前に一度施設名で検索していただき、既に登録がないことをお確かめいただけると幸いです。ご協力のほどよろしくお願いいたします。
                        </div>
                        <div className="inputContainers">
                            <div className="inputContainer">
                                <div className="title">
                                    スポット名

                                </div>
                                <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='例: xxxダイビングスポット'/>
                            </div>
                            <div className="inputContainer">
                                <div className="title">
                                    都道府県

                                </div>
                                <PrefectureList setPrefecture={setPrefecture}/>
                            </div>
                            <div className="inputContainer">
                                <div className="title">
                                    郵便番号

                                </div>
                                <input type="text" placeholder='例: 123-4567' value={zip} onChange={(e) => setZip(e.target.value)}/>
                            </div>
                            <div className="inputContainer">
                                <div className="title">
                                    住所１

                                </div>
                                <input type="text" placeholder='市区 例: 渋谷区' value={address1} onChange={(e) => setAddress1(e.target.value)}/>
                            </div>
                            <div className="inputContainer">
                                <div className="title">
                                    住所２

                                </div>
                                <input type="text" placeholder='町村 例: 千駄ヶ谷1-23-4' value={address2} onChange={(e) => setAddress2(e.target.value)}/>
                            </div>
                            <div className="inputContainer">
                                <div className="title">
                                    住所３

                                </div>
                                <input type="text" placeholder='ダイビングビル2F' value={address3} onChange={(e) => setAddress3(e.target.value)}/>
                            </div>
                            <div className="inputContainer">
                                <div className="title">
                                    アクセス

                                </div>
                                <textarea name="" id="" rows={10} value={access} onChange={(e) => setAccess(e.target.value)}></textarea>
                            </div>
                            <div className="inputContainer">
                                <div className="title">
                                    駐車場情報

                                </div>
                                <input type="text" placeholder='例: 有り 有料３０台' value={parking} onChange={(e) => setParking(e.target.value)}/>
                            </div>
                            <div className="inputContainer">
                                <div className="title">
                                    電話番号

                                </div>
                                <input type="text" placeholder='例: 123-4567-8901' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                            <div className="inputContainer">
                                <div className="title">
                                    ホームページ

                                </div>
                                <input type="text" placeholder='例: https://google.com' value={hp} onChange={(e) => setHp(e.target.value)}/>
                            </div>
                            <div className="inputContainer">
                                <div className="title">
                                    定休日

                                </div>
                                <input type="text" placeholder='例: 毎月第２水曜日' value={close} onChange={(e) => setClose(e.target.value)}/>
                            </div>
                            <div className="inputContainer">
                                <div className="title">
                                    営業時間

                                </div>
                                <input type="text" placeholder='例: 10:00 ~ 17:00' value={open} onChange={(e) => setOpen(e.target.value)}/>
                            </div>
                            <div className="inputContainer">
                                <div className="title">
                                    最低料金

                                </div>
                                <input type="text" placeholder='ガイド料4000円' value={minPrice} onChange={(e) => setMinPrice(e.target.value)}/>
                            </div>
                            <div className="inputContainer">
                                <div className="title">
                                    レンタル情報

                                </div>
                                <input type="text" placeholder='全てレンタル可能（５０００円〜）' value={rentalPrice} onChange={(e) => setRentalPrice(e.target.value)}/>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="seaInfoContainer">
                <div className="headerTitle">
                    海情報
                </div>
                <div className="container">

                    <div className="containerInside">
                        <div className="description">
                            海の情報を入力してください。
                        </div>
                        <div className="inputContainers">
                            <div className="inputContainer">
                                <div className="title">
                                    水質情報
                                </div>
                                <textarea name="" id="" rows={4} value={water} onChange={(e) => setWater(e.target.value)}></textarea>
                            </div>
                            <div className="inputContainer">
                                <div className="title">
                                    生き物情報
                                </div>
                                <textarea name="" id="" rows={4} value={animal} onChange={(e) => setAnimal(e.target.value)}></textarea>
                            </div>
                            <div className="inputContainer">
                                <div className="title">
                                    アドベンチャー情報
                                </div>
                                <textarea name="" id="" rows={4} value={adventure} onChange={(e) => setAdventure(e.target.value)}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="otherInfoContainer">
                <div className="headerTitle">
                    補足情報
                </div>
                <div className="container">

                    <div className="containerInside">
                        <div className="description">
                            おすすめポイントなど補足があればご自由にお書きください。
                        </div>
                        <div className="inputContainers">
                            <div className="inputContainer">
                                <div className="title">
                                    おすすめ情報
                                </div>
                                <textarea name="" id="" rows={4} value={other} onChange={(e) => setOther(e.target.value)}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="buttonContainer">
                <button onClick={(() => jumpToAddImages())}>画像の登録に進む</button>
            </div>


        </div>
    )
}

export default CreateSpot