import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from 'zod';
import ContactValidate from '../type';

const contactSchema = z.object({
    name:z
        .string()
        .min(1, {message:"お名前を入力してください"}),
    email:z
        .string()
        .min(1, {message:"メールアドレスを入力してください"})
        .regex(/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,{message:"メールアドレス形式で入力してください"})
});

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactValidate>({
        mode:"onChange",
        shouldUnregister: false,
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = (data:ContactValidate) => {
        console.log("Submitted Data", data);
     };

    return (
        <div className='contact'>
            <nav className='contact-nav'>
                <ul>
                    <li>
                        <Link to='/' className='contact-nav-link'>Top /</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='contact-nav-link'>Contact /</Link>
                    </li>
                </ul>
            </nav>
            <div className='contact-cont'>
                <h2 className='contact-title'>お問い合わせはこちら</h2>
                <form action="" className='contact-form' onSubmit={handleSubmit(onSubmit)}>
                    <div className='contact-field'>
                        <label htmlFor="name">名前</label>
                        <input type="text" id='name' placeholder='山田 太朗'  {...register("name")}/>
                        {errors.name && <p className='contact-error'>{errors.name.message as React.ReactNode}</p>}
                    </div>
                    <div className='contact-field'>
                        <label htmlFor="email">メールアドレス</label>
                        <input type="email" id='email' placeholder='@' {...register("email")}/>
                        {errors.email && <p className='contact-error'>{errors.email.message as React.ReactNode}</p>}
                    </div>
                    <div className='contact-field'>
                        <label htmlFor="message">メッセージ</label>
                        <textarea id="message" placeholder='内容を入力してください' className='contact-text'></textarea>
                    </div>
                    <input type="submit" value="送信" className='submitbtn'/>
                </form>
                <div className='contact-note'>
                    <h2>プライバシーポリシー</h2>
                    <p>
                        当ブログでは、お問い合わせいただく際に、お名前とメールアドレスを送信いただいております。<br/>
                        いただいた、お名前とメールアドレスにつきましては、返信目的以外の使用は一切いたしません。<br/>
                        お問い合わせの際には、上記についてご了承いただきますようお願いいたします。
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact