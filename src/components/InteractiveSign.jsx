import React, { useState } from 'react';
import '../styles/interactiveSign.css';

const InteractiveSign = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [emailNext, setEmailNext] = useState(false);
    const [passwordNext, setPasswordNext] = useState(false);
    const [repeatPasswordNext, setRepeatPasswordNext] = useState(false);
    const [foldedSections, setFoldedSections] = useState({
      emailSection: false,
      passwordSection: true,
      repeatPasswordSection: true,
    });
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      setEmailNext(e.target.value !== '');
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
      setPasswordNext(e.target.value !== '');
    };
  
    const handleRepeatPasswordChange = (e) => {
      setRepeatPassword(e.target.value);
      setRepeatPasswordNext(e.target.value !== '');
    };
  
    const handleEmailNextClick = () => {
      setFoldedSections({
        emailSection: true,
        passwordSection: false,
        repeatPasswordSection: true,
      });
    };
  
    const handlePasswordNextClick = () => {
      setFoldedSections({
        emailSection: true,
        passwordSection: true,
        repeatPasswordSection: false,
      });
    };
  
    const handleRepeatPasswordNextClick = () => {
      setFoldedSections({
        emailSection: true,
        passwordSection: true,
        repeatPasswordSection: true,
      });
    };
  
    return (
      <div className="registration-form">
        <header>
          <h1>Sign Up</h1>
          <p>Fill in all informations</p>
        </header>
        <form>
          <div
            className={`input-section email-section ${
              foldedSections.emailSection ? 'folded' : ''
            }`}
          >
            <input
              className="email"
              type="email"
              placeholder="ENTER YOUR E-MAIL HERE"
              autoComplete="off"
              value={email}
              onChange={handleEmailChange}
            />
            <div
              className={`animated-button ${
                emailNext ? 'next' : ''
              } email`}
              onClick={handleEmailNextClick}
            >
              <span className="icon-paper-plane">
                <i className="fa fa-envelope-o"></i>
              </span>
              <span className="next-button email">
                <i className="fa fa-arrow-up"></i>
              </span>
            </div>
          </div>
          <div
            className={`input-section password-section ${
              foldedSections.passwordSection ? 'folded' : ''
            }`}
          >
            <input
              className="password"
              type="password"
              placeholder="ENTER YOUR PASSWORD HERE"
              value={password}
              onChange={handlePasswordChange}
            />
            <div
              className={`animated-button ${
                passwordNext ? 'next' : ''
              } password`}
              onClick={handlePasswordNextClick}
            >
              <span className="icon-lock">
                <i className="fa fa-lock"></i>
              </span>
              <span className="next-button password">
                <i className="fa fa-arrow-up"></i>
              </span>
            </div>
          </div>
          <div
            className={`input-section repeat-password-section ${
              foldedSections.repeatPasswordSection ? 'folded' : ''
            }`}
          >
            <input
              className="repeat-password"
              type="password"
              placeholder="REPEAT YOUR PASSWORD HERE"
              value={repeatPassword}
              onChange={handleRepeatPasswordChange}
            />
            <div
              className={`animated-button ${
                repeatPasswordNext ? 'next' : ''
              } repeat-password`}
              onClick={handleRepeatPasswordNextClick}
            >
              <span className="icon-repeat-lock">
                <i className="fa fa-lock"></i>
              </span>
              <span className="next-button repeat-password">
                <i className="fa fa-paper-plane"></i>
              </span>
            </div>
          </div>
          {/* {!foldedSections.repeatPasswordSection ? 
            <div className="success">
                <p>ACCOUNT CREATED</p>
          </div>
          :
          " "  
        } */}
          {foldedSections.repeatPasswordSection && foldedSections.emailSection && foldedSections.passwordSection ?
            <div className="success transition transform translate-x-[0%] translate-y-[100%] flex left-0">
              <p>ACCOUNT CREATED</p>
            </div>
            :
            <div className="success translate-x-[50%] translate-y-[0%] hidden">
              <p>ACCOUNT CREATED</p>
            </div>
}
        </form>
      </div>
    );
};

export default InteractiveSign;
