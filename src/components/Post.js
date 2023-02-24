import React from 'react';
import './post.css'

const Post = ({author}) => {
    return (
        <div className="post">
            <div className="post-header">
                <img className="user-photo" src={author.photo} alt="author" width="50" height="50" />
                <h4>{author.name}</h4>
                <img src="https://cdn3.emoji.gg/emojis/7673-verified-grey.png" alt="verified" width="20" height="20" />
                <p>{author.nickname}</p>
                <p>{author.date}</p>
            </div>
            
            <div className="post-main">
                <p>{author.content}</p>
                <img className="user-image" src={author.image} alt="content" />
            </div>

            <div className="post-footer">
                <div className="post-footer-block">
                    <i class="fi fi-rr-comments"></i>
                    <p>428</p>
                </div>

                <div className="post-footer-block">
                    <i class="fi fi-rr-arrows-retweet"></i>
                    <p>146</p>
                </div>

                <div className="post-footer-block">
                    <i class="fi fi-rs-heart"></i>
                    <p>887</p>
                </div>

                <div className="post-footer-block">
                    <i class="fi fi-rr-bookmark"></i>
                </div>
            
            </div>

        </div>
    );
};

export default Post;