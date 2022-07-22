import './mainText.css';
import SvgFont from './animationFont.js';

function MainText() {
  return (
    <div className="main-text-bg">
      <div style={{ height: '600px' }}>
        <div>
          <h1 className="main-font main-text">안녕, 저는 시원입니다.</h1>
          <h2 className="main-font main-text2">'더 아름다운 미래'를 꿈꾸는 시원입니다.</h2>
          <button className="btn main-font">더 알아보기</button>
        </div>
        <SvgFont />
        <img className="bg-circle" src={process.env.PUBLIC_URL + '/img/shadow.png'} />
      </div>
    </div>
  );
}

export default MainText;
