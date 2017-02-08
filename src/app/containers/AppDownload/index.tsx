import * as React from 'react';

import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './index.less';

import event from '../../utils/customEvent';

import * as LocaleActions from '../../actions/locales';
import { IAppDownloadContentProps, IAppDownloadContentState, IaLLMapState } from '../../constants/AppType';

const Arrow = require('../../resources/images/Arrow.png');
const SafariIcon = require('../../resources/images/SafariIcon.png');
const IOS_EN_Leaf_1 = require('../../resources/images/leaf_app_ios_download_en_1.jpg');
const IOS_EN_Leaf_2 = require('../../resources/images/leaf_app_ios_download_en_2.jpg');
const IOS_ZH_Leaf_1 = require('../../resources/images/leaf_app_ios_download_cn_1.jpg');
const IOS_ZH_Leaf_2 = require('../../resources/images/leaf_app_ios_download_cn_2.jpg');
const Android_EN_Leaf_1 = require('../../resources/images/leaf_app_android_download_en_1.jpg');
const Android_EN_Leaf_2 = require('../../resources/images/leaf_app_android_download_en_2.jpg');
const Android_EN_Leaf_3 = require('../../resources/images/leaf_app_android_download_en_3.jpg');
const Android_ZH_Leaf_1 = require('../../resources/images/leaf_app_android_download_cn_1.jpg');
const Android_ZH_Leaf_2 = require('../../resources/images/leaf_app_android_download_cn_2.jpg');
const Android_ZH_Leaf_3 = require('../../resources/images/leaf_app_android_download_cn_3.jpg');


class AppDownload extends React.Component<IAppDownloadContentProps, IAppDownloadContentState> {

    renderIOSVersion = () => {
      return(
        <div>
          <div id='openWithSafari' style={{display: this.checkWechat() ? 'block' : 'none'}}>
            <div id='bg'></div>
            <div id='text'>
              <img id='arrow' src={Arrow}/>
              <p id='click'><FormattedMessage id='pro_exchange_appdownload_safri_please_click' /></p>
              <div id='choose'>
                <p><FormattedMessage id='pro_exchange_appdownload_safri_choose' /></p>
                <img id='safariIcon' src={SafariIcon}/>
                <p id='safari'><FormattedMessage id='pro_exchange_appdownload_safri_open' /></p>
              </div>
            </div>
          </div>

          <a id='toDesktop' href='https://exchange.btcc.com'>
            <span id='desktopText'><FormattedMessage id='pro_exchange_appdownload_button_computer_version'/></span>
          </a>


          <img className='preview' id='mainImage' src={ this.props.lang === 'en' ? IOS_EN_Leaf_1 : IOS_ZH_Leaf_1 }/>

          <div id='tip'>
            <a>
              <span><FormattedMessage id='pro_exchange_appdownload_text_for_btc_usd_only'/></span>
            </a>
          </div>

          <div id='btn'>
            <a id='download' href='https://itunes.apple.com/hk/app/btcc-bitcoin-exchange-secure/id1195786666' onClick={this.downloadIOS}>
              <span id='downloadText'><FormattedMessage id='pro_exchange_appdownload_button_download_ios_version'/></span>
            </a>
          </div>
        {/*
          <a id='howTo' href='#steps'>
            <span id='question'>?</span>
            <span id='questionText'><FormattedMessage id='pro_exchange_appdownload_button_how_to_install'/></span>
          </a>

          <div id='steps'>
            <img className='preview' src={ this.props.lang === 'en' ? IOS_EN_Leaf_2 : IOS_ZH_Leaf_2 }/>
          </div>
         */}
        </div>
      );
    }

    renderAndroidVersion = () => {
      return(
        <div>
          <div id='openWithSafari' style={{display: this.checkWechat() ? 'block' : 'none'}}>
            <div id='bg'></div>
            <div id='text'>
              <img id='arrow' src={Arrow}/>
              <p id='click'><FormattedMessage id='pro_exchange_appdownload_safri_please_click' /></p>
              <div id='choose'>
                <p><FormattedMessage id='pro_exchange_appdownload_safri_choose' /></p>
                <p id='safari'><FormattedMessage id='pro_exchange_appdownload_browser_open' /></p>
              </div>
            </div>
          </div>

          <a id='toDesktop' href='https://exchange.btcc.com'>
            <span id='desktopText'><FormattedMessage id='pro_exchange_appdownload_button_computer_version'/></span>
          </a>


          <img className='preview' id='mainImage' src={ this.props.lang === 'en' ? Android_EN_Leaf_1 : Android_ZH_Leaf_1 }/>

        {/*<div id='tip'>
            <a>
              <span><FormattedMessage id='pro_exchange_appdownload_text_for_btc_usd_only'/></span>
            </a>
          </div>
        */}

          <div id='btn'>
            <a id='download' href='https://exchange.btcc.com/btcc-app-android-0_1_2.apk'>
              <span id='downloadText'><FormattedMessage id='pro_exchange_appdownload_button_download_android_version'/></span>
            </a>
          </div>

          <a id='howTo' href='#steps'>
            <span id='question'>?</span>
            <span id='questionText'><FormattedMessage id='pro_exchange_appdownload_button_how_to_install'/></span>
          </a>

          <div id='steps'>
            <img className='preview' src={ this.props.lang === 'en' ? Android_EN_Leaf_2 : Android_ZH_Leaf_2 }/>
            <img className='preview' src={ this.props.lang === 'en' ? Android_EN_Leaf_3 : Android_ZH_Leaf_3 }/>
          </div>
        </div>
      );
    }


    downloadIOS = () => {
      // 通过iframe的方式试图打开APP，如果能正常打开，会直接切换到APP，并自动阻止a标签的默认行为
      // 否则打开a标签的href链接
      var ifr = document.createElement('iframe');
      ifr.src = 'com.btcc.EntBTCCReactNative://';
      ifr.style.display = 'none';
      document.body.appendChild(ifr);
      window.setTimeout(function(){
          document.body.removeChild(ifr);
          window.location.href = 'https://itunes.apple.com/hk/app/btcc-bitcoin-exchange-secure/id1195786666';
      }, 500);
    }

    checkSystemLanguage = () => {
      const language = navigator.browserLanguage ? navigator.browserLanguage : navigator.language;
      let lang = 'en';
      const { actions } = this.props;

      if ( language.indexOf('zh') > -1) {
        lang = 'zh';
      }
      actions.changeLang(lang);
      actions.updateUserConfig({ key: 'user_language', value: lang});
      event.trigger('reactSwitchLang', this.props.lang);
    }

    checkWechat = () => {
      const platform = window.navigator.userAgent.toLowerCase();
      if (platform.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
      }else {
        return false;
      }
    }

    checkSystemPlatform = () => {
      const platform = window.navigator.userAgent;

      if (/(Android)/i.test(platform)) {
        return 'android';
      }else if (/(iPhone|iPad|iPod|iOS)/i.test(platform)) {
        return 'ios';
      }else {
        return 'pc';
      }
    }

    componentWillMount() {
      this.checkSystemLanguage();
      this.checkSystemPlatform();
      if ( this.checkSystemPlatform() === 'pc') {
        window.location.href = 'https://exchange.btcc.com/#download';
      }
    }

    render() {
        this.checkSystemLanguage();
        return (
            <div className='appdownload'>
              {
                this.checkSystemPlatform() === 'ios' ? this.renderIOSVersion() : this.renderAndroidVersion()
              }
            </div>
        );
    }
};

function mapStateToProps(state: IaLLMapState) {
  return {
    lang: state.locales.get('lang'),
  };
}


function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(Object.assign({}, LocaleActions), dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppDownload);
