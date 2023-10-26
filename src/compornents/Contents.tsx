import { error } from 'console';
import React, { useEffect } from 'react';

function Contents() {
    
    useEffect(() => {
        fetch("http://localhost:5000/api/v1/article")
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => {
            console.log(error);
        });
    },[]);

    return (
        <div className='contents'>
            <article className='article'>
                <a href="" className='article-Link'>
                    <div className='article-block'>
                        <img src="/images/sample.jpg" alt=""  className='article-img'/>
                        <dl className='article-cont'>
                            <dt className='article-title'>タイトル</dt>
                            <dd className='article-data'>ReactとTypescriptを使ってTodoアプリを作ってみた！</dd>
                        </dl>
                        <p className='article-day'>2023/10/26</p>
                    </div>
                </a>
            </article>
            <article className='article'>
                <a href="" className='article-Link'>
                    <div className='article-block'>
                        <img src="/images/sample.jpg" alt=""  className='article-img'/>
                        <dl className='article-cont'>
                            <dt className='article-title'>タイトル</dt>
                            <dd className='article-data'>ReactとTypescriptを使ってTodoアプリを作ってみた！</dd>
                        </dl>
                        <p className='article-day'>2023/10/26</p>
                    </div>
                </a>
            </article>
            <article className='article'>
                <a href="" className='article-Link'>
                    <div className='article-block'>
                        <img src="/images/sample.jpg" alt=""  className='article-img'/>
                        <dl className='article-cont'>
                            <dt className='article-title'>タイトル</dt>
                            <dd className='article-data'>ReactとTypescriptを使ってTodoアプリを作ってみた！</dd>
                        </dl>
                        <p className='article-day'>2023/10/26</p>
                    </div>
                </a>
            </article>
            <article className='article'>
                <a href="" className='article-Link'>
                    <div className='article-block'>
                        <img src="/images/sample.jpg" alt=""  className='article-img'/>
                        <dl className='article-cont'>
                            <dt className='article-title'>タイトル</dt>
                            <dd className='article-data'>ReactとTypescriptを使ってTodoアプリを作ってみた！</dd>
                        </dl>
                        <p className='article-day'>2023/10/26</p>
                    </div>
                </a>
            </article>
        </div>
    )
}

export default Contents