import sprite from "../../images/sprite.svg";

export default function AuthPage() {

    function name(e) {
        console.log(e)
        e.preventDefault()
    }

    return (
        <section className="section-test">
            <div className="container">
                <div className="auth">
                    <h2 className="auth__title">Pro Test</h2>
                    <p className="auth__text"><span className='auth__span'>[</span> We will help you find weak points
                in knowledge so that you can strengthen it. We will show you what is relevant to know for a <span className='auth__span'>QA
                    Engineer</span> and will try to make the learning process more diverse_ <span className='auth__span'>]</span></p>
                </div>
                <div className="form__wrap">
                    <form className="form" onSubmit={name}>
                        <p className="form__text">You can use your Google Account to authorize:</p>
                        <button className="btn__google"><svg className='btn__google-svg'><use href={sprite + "#google"}></use></svg> <span className='span__google'>Google</span></button>
                        <p className="form__text">Or login to our app using e-mail and password:</p>
                        <div className="input__inner">
                            <input type="email" id="email" placeholder="E-mail" />
                            <input type="password" id="pass" placeholder="Password" />
                        </div>
                        <div className="btn">
                            <button className="btn__sign-in sign__hover">Sign in</button>
                            <button className="btn__sign-up sign__hover">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}