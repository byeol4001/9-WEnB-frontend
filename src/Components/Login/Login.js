import React from 'react';
import GoogleLogin from '../../Images/google_login.png';
import KaKaoLogin from 'react-kakao-login';
import { API_URL_LOGIN } from '../../config';
import styled from 'styled-components';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'kakao',
      close: false,
    };
  }

  responseKaKao = (res) => {
    const { data } = this.state;

    this.setState({
      data: res,
    });

    fetch(`${API_URL_LOGIN}/user/signin/kakao`, {
      method: 'GET',
      headers: {
        Authorization: res.response.access_token,
      },
    })
      .then((res) => res.json())
      .then((res) => localStorage.setItem('token', res.token), alert('로그인 성공하였습니다'));
  };

  render() {
    const { close } = this.state;

    return (
      <div className={close ? 'hide' : 'Login'}>
        <div className='login-modal'>
          <div className='login-content'>
            <button onClose={this.props.onClose} onClick={() => this.setState({ close: true })} className='close-modal'>
              X
            </button>
            <div className='login-btns'>
              <KaKaoBtn
                jsKey={'0ab40e703c9ec1bf12a17310d52310c5'}
                buttonText='카카오 계정으로 로그인'
                onSuccess={this.responseKaKao}
                onFailure={this.responseFail}
                getProfile={true}
              />
              <div className='login-w-gg'>
                <img className='' src={GoogleLogin} />
                <span>구글 계정으로 로그인</span>
              </div>
              <LoginButton facebook>페이스북 계정으로 로그인</LoginButton>
            </div>
            <div className='or'>
              <hr></hr>
              <span>또는</span>
              <hr></hr>
            </div>

            <form className='login-form'>
              <div className='phone-number'>
                <select type='select'>
                  <option>+82</option>
                </select>
                <div className='number-wrapper'>
                  <input className='phone-number-field' type='text' placeholder='전화번호' />
                </div>
              </div>
              <div className='pw-wrapper'>
                <input className='password' type='password' placeholder='비밀번호' />
              </div>
              <div className='id-password'>
                <LoginWithEmail>이메일로 로그인 ·</LoginWithEmail>
                <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword>
              </div>

              <LoginButton>로그인</LoginButton>
              <NoAccount>에어비앤비 계정이 없으세요?</NoAccount>
              <SignUp>회원 가입</SignUp>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const KaKaoBtn = styled(KaKaoLogin)`
  padding: 0;
  width: 300px;
  height: 45px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

const LoginWithEmail = styled.span`
  color: #008489;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ForgotPassword = styled(LoginWithEmail)``;

const LoginButton = styled.button`
  margin-top: 10px;
  color: white;
  background-color: ${(props) => (props.facebook ? '#4568b2' : '#ff5a5f')};
  width: 300px;
  height: 45px;
  line-height: 44px;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

const NoAccount = styled.div`
  margin-top: 20px;
  font-size: 14px;
  line-height: 22px;
  color: #484848;
`;

const SignUp = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  color: #008489;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default Login;
