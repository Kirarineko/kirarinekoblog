import React from "react";
import './homepage.css';
import { postsList } from '../posts'; 
import { Link } from 'react-router-dom';
 
function Homepage() {
  return (

    <div className="homepage">
        <div className="container" style={{width: '1152px', position: 'relative', left: '50%', transform: 'translate(-50%, 0%)', display : 'flex' , flexDirection: 'column'}}>
            
            <div className="header card" style={{height: '96px', width: '100%'}}>
                <h1 style={{position : 'absolute' , left : '16px', fontFamily: 'Noto Sans SC' , fontSize: '42px' , margin:'3px 0px' , right : '144px', top:'12px' , fontWeight:'bold'}}>✨某不科学の星璃Sama</h1> 
                <Link to="/friends" style={{textDecoration:'none' ,position: 'absolute', right: '36px', top: '12px',fontFamily: 'Noto Sans SC' , fontSize: '24px' , margin:'16px 0px' , fontWeight:'bold', color:'#ffb7c5'}}>友链</Link>
                <Link to="/posts" style={{textDecoration:'none' ,position: 'absolute', right: '110px', top: '12px',fontFamily: 'Noto Sans SC' , fontSize: '24px' , margin:'16px 0px' , fontWeight:'bold', color:'#ffb7c5'}}>文章</Link>
            </div>

            <div style={{display:'flex' , flexDirection: 'row' , width: '100%'}}>

                 <div className="content card" style={{width: '36%' , padding: '16px 24px'}}>
                    <p className="mainText" style={{fontSize:"32px"}}>喵～ 这里是星璃✨！</p>
                    <p className="mainText">正在努力点亮 React 技能树的前端萌新喵！</p>
                    <p className="mainText">喜欢编程，也喜欢摸鱼（划掉）探索新知。</p>
                    <p className="mainText" style={{fontSize:"24px"}}>相信保持好奇，世界就会闪闪发光💡</p>
                </div>

                <div className="contact card" style={{width: '54.5%' , height: '72px', padding: '16px 2px 16px 24px', right: '-10px', position: 'absolute'}}>
                    <button className="button" style={{width: '144px', height: '72px' }} onClick={() => {window.open('https://space.bilibili.com/1272261297')}}>BiliBili</button>
                    <button className="button" style={{width: '144px', height: '72px', marginLeft: '16px'}} onClick={() => {window.open('https://github.com/kirarineko')}}>GitHub</button>
                    <button className="button" style={{width: '128px', height: '72px', marginLeft: '16px'}} onClick={() => {window.open('https://qm.qq.com/q/j1BOhXHKjS')}}>QQ</button>
                    <button className="button" style={{width: '144px', height: '72px', marginLeft: '16px'}} onClick={() => {window.open('mailto:kirari.neko@outlook.com')}}>E-mail</button>
                </div>

            </div>
        <div style={{display:'flex' , flexDirection: 'row' , width: '100%'}}>
            <div className="NekoCraft card" style={{width:'36%' , padding: '16px 24px'}}>
                <div style={{display:'flex' , flexDirection: 'row' , alignItems: 'center'}}>
                    <img src="NekocraftLogo.png" alt="Nekocraft Logo" style={{width:'24%'}}/>  
                    <p className="mainText" style={{fontSize:'42px' , margin:'0px 0px'}}>关于 Nekocraft</p>
                 </div>
                 <p className="mainText" style={{fontSize:'18px'}}>Nekocraft 曾经是一个充满欢声笑语的 Minecraft 服务器。</p>
                 <p className="mainText" style={{fontSize:'18px'}}>虽然服务器已停止运营，但这个名字所代表的创造精神并未消失。</p>
                 <p className="mainText" style={{fontSize:'18px'}}>现在，Nekocraft 已转变为星璃的个人品牌标识。</p>
                 <p className="mainText" style={{fontSize:'18px'}}>它被标记在每一份精心设计的红石机器、每一座建筑作品以及每一行开源代码之上。</p>
                 <p className="mainText" style={{fontSize:'18px'}}>它不再只是一个服务器，而是质量与创意的承诺。感谢你在数字世界中遇见 Nekocraft。</p>
                 <button className="button" style={{width: '98%', height: '72px', marginTop: '16px', color: '#9E8DDC' , fontSize:'36px'}}>Nekocraft(敬请期待)</button>
            </div>



            <div className="Posts" style={{height: '96px', width: '57.5%', padding: '16px 24px' , right: '-34px', top: '252px', position: 'absolute'}}>

                <div className="home-container">
                    <div className="post-grid">
                        {postsList.map((post) => (
                            <Link key={post.id} to={`/post/${post.slug}`} className="post card post-link" style={{height:'245px'}}>
                                {post.cover && typeof post.cover === 'string' && post.cover.endsWith('.mp4') ? (
                                <video src={post.cover} muted loop onMouseOver={e => e.target.play()} onMouseOut={e => e.target.pause()} />
                                ) : (
                                <img src={post.cover} alt={post.title} />
                                )}

                                <div className="card-content">
                                    <h2 style={{fontSize:'20px', margin:'0px 0px 0px 0px', color:'#24396E'}}>{post.title}</h2>
                                    <p style={{fontSize:'14px', margin:'0px 0px 8px 0px', color:'#24396E'}}> {post.summary}</p>
                                </div>
                            </Link>
                         ))}
                    </div>
                </div>
        </div>


        </div>

        </div>
    </div>
  );
}

export default Homepage;
