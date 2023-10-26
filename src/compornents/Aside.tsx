import React from 'react';

function Aside() {
  return (
    <aside>
        <div className="aside">
            <section className='about'>
                <h2 className='about-title'>プロフィール</h2>
                <hr />
                <p className='about-prof'>
                    当ブログはエンジニアとして自身が学習したことをアウトプットし、記録するためのブログです。
                    自分と同じように、エンジニアを目指す方の参考になれば幸いです。
                    記事の更新は最低月1ペースで投稿する予定です。
                </p>
                <a href="" className='about-portfolio'>ポートフォリオ</a>
            </section>
            <div className='search'>
                <h2 className='search-title'>記事検索</h2>
                <form className='search-form'>
                    <input type="text" className='search-input'placeholder='キーワード検索'/>
                    <button type='submit' className='search-btn'>検索</button>
                </form>
            </div>
        </div>
    </aside>
  )
}

export default Aside