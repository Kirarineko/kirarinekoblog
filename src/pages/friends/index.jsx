import React from 'react';
import './friends.css';
import { Link } from 'react-router-dom';

const friends = [
  { name: '星璃的猫窝', url: 'https://example.com', desc: '分享前端笔记与手工' },
  { name: 'Nekocraft', url: 'https://example.org', desc: '我的创作与小玩意' },
  { name: '前端小课堂', url: 'https://example.net', desc: '教程与练习资源' }
];

function Friends() {
  return (
    <div className="friends-page">
      <div className="friends-container card">
        <h1>友链</h1>
        <p className="friends-intro">欢迎互换友链！如果你想和我互换友链，请发邮件联系我。</p>

        <ul className="friends-list">
          {friends.map((f, i) => (
            <li key={i} className="friend-item">
              <a href={f.url} target="_blank" rel="noopener noreferrer" className="friend-link">
                <div className="friend-name">{f.name}</div>
                <div className="friend-desc">{f.desc}</div>
              </a>
            </li>
          ))}
        </ul>

        <div style={{marginTop: 16}}>
          <Link to="/">← 返回首页</Link>
        </div>
      </div>
    </div>
  );
}

export default Friends;
