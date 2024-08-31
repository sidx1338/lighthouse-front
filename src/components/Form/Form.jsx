import React from "react";
import './Form.scss'

const TELEGRAM_BOT_TOKEN = '6799304241:AAEyvUaR011p6gMp_ByEOvatUMrQEGYxBmk';
const TELEGRAM_CHAT_ID = '@skSterh';
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

async function sendEmailTelegram(event) {
    event.preventDefault()

    const form = event.target
    const formBtn = document.querySelector('.form-wrapper__btn')
    const formSendResult = document.querySelectorAll('.form__send-result')
    formSendResult.forEach(elem => {
        elem.textContent = ''
    })
    const { name, phone, email, text } = Object.fromEntries(new FormData(form).entries())
    const message = `Заявка от ${name}!\nТелефон: ${phone}\nEmail: ${email}\nСообщение: ${text}`;

    try {
        formBtn.textContent = 'Отправка...'
        const response = await fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
            })
        });
        if (response.ok) {
            formSendResult.forEach(elem => {
                elem.textContent = 'Спасибо за вашу заявку! Мы свяжемся с вами!'
            })
            form.reset()
        } else {
            throw new Error(response.statusText)
        }
    } catch (error) {
        console.error(error);
        formSendResult.textContent = 'Заявка не отправлена! Попробуйте еще раз!';
        formSendResult.style.color = 'red'
    } finally {
        formBtn.textContent = 'Отправить'
    }
}


const Form = () => {
    return (
        <form className="form-wrapper" onSubmit={sendEmailTelegram}>
            <div className="form-wrapper__body">
                <p className="form-wrapper__text">Имя</p>
                <input id="first-input-value" className="form-wrapper__input" type="text" name="name" autoComplete="off"
                       maxLength="50" required/>
            </div>
            <div className="form-wrapper__body">
                <p className="form-wrapper__text">Номер</p>
                <input id="first-input-value" className="form-wrapper__input" type="tel" name="phone" autoComplete="off"
                       maxLength="50" required/>
            </div>
            <div className="form-wrapper__body">
                <p className="form-wrapper__text">Email</p>
                <input id="second-input-value" className="form-wrapper__input" type="email" name="email"
                       autoComplete="off" maxLength="50" required/>
            </div>
            <div className="form-wrapper__body">
                <p className="form-wrapper__text">Ваше сообщение</p>
                <input id="first-input-value" className="form-wrapper__textarea" type="text" name="text"
                       autoComplete="off" maxLength="100" required></input>
            </div>
            <div className="form-wrapper__body">
                <button type="submit" id="btn" className="form-wrapper__btn">ОТПРАВИТЬ</button>
            </div>
            <div className="form__send-result">Нажимая "Отправить", я даю своё согласие на обработку моих персональных данных.</div>
        </form>
    )
}

export {Form}