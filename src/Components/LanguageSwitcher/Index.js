import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { strings } from "../../utils/LanguageSwitcher/Index";
import './Language.scss';

export default function Index() {
    const [state, setState] = useState(null)
    const [activeLanguage, setActiveLanguage] = useState("al")
    const [mode, setMode] = React.useState("out-in");
    const [transitionState, setTransitionState] = useState(false)

    const changeLanguage = (e) => {
        e.preventDefault();
        strings.setLanguage('en');
        setActiveLanguage(strings._language)
        console.log(strings)
        setTransitionState(!transitionState)

        // setState({})


    }
    console.log(activeLanguage, 'act')
    return (

        <>
            <SwitchTransition mode={mode}>
                <CSSTransition
                    key={transitionState}
                    addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                    }}
                    classNames="fade"
                >
                    <div class="lang-menu">

                        {activeLanguage === "al" ? <div class="selected-lang">
                            Albanian
          </div> :

                            <div class="selected-lang-2">
                                English
              </div>
                        }

                        <ul>
                            {/* <li>
                  <a href="#" class="de">German</a>
              </li> */}
                            {activeLanguage === "en" ? <li>
                                <a href="#" className="al" onClick={() => {
                                    strings.setLanguage('al');
                                    // setState({})
                                    setTransitionState(!transitionState)


                                }}>Albanian</a>
                            </li> : <li>
                                    <a href="#" className="en" onClick={changeLanguage}>English</a>
                                </li>
                            }


                        </ul>

                    </div>
                </CSSTransition>
            </SwitchTransition>
        </>

    )
}
