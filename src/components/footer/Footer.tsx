import React, { FC } from 'react';
import './footer.scss'


const Footer: FC = () => {
    return (
        <div className={'footerContainer'}>
            <div className={'innerContainer'}>
                <div className="logoContainer">
                    
                </div>
                <div className="contentContainer">
                    <div className="header">
                        利用規約
                    </div>
                    <div className="value">
                        プライバシーポリシー
                    </div>
                </div>
                <div className="contentContainer">
                    <div className="header">
                        SNS
                    </div>
                    <div className="value">
                        Twitter
                    </div>
                    <div className="value">
                        Instagram
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Footer;