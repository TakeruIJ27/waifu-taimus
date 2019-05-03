import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Marika from '../../marika.jpeg';
//import Sagiri from '../sagiri.png';
import Rikka from '../../rikka.gif';
import './Home.css';

class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                this.setState({
                    posts: res.data.slice(0, 20)
                })
            })
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Marika} alt="smug face, reeeeeeee!!" />
                        <div className="card-content">
                            <Link to={"/posts/" + post.id}> <span className="card-title">{post.title}</span> </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center"> No posts yet!</div>
            );
        return (
            <div className="container home">
                <div className="container greeting">
                    <img src={Rikka} alt="finger spiin!!" />
                    <h4 className="center">Home / Posts</h4>
                </div>
                
                {/* <p> Waifu is an English loanword that appeared in the Japanese lexicon
                    around the early 1980s. Dynamics between husband and wife continued to
                    change in ways that made the tradition way of referring to a woman as a
                    wife offensive to young couples. Kanai, the word for wife that uses two
                    Chinese characters that mean “inside the house” became objectionable for
                    many young women. Likewise, the word for husband, shujin or danna, 
                    translate roughly to “master.”  Because these words fail to match their 
                    relationship, many couples adapted the English words husband and wife. 
                    Of course, the words changed slightly in pronunciation. Wife became waifu. 
                    band became hazu (Stanlaw, 2004; Rebick & Takenade, 2006).
    
                These words were slowly picked up by American anime/manga fans and were used 
                to refer to their favorite fictional characters. The anime Azumanga Daioh is 
                thought to be one of the anime that popularized the use of the word waifu 
                (Waifu, 2010). However, the words were in the Japanese lexicon and used by 
                anime long before this popularization. </p> 
                */}

                {postList}
            </div>
            
        )
    }
}

export default Home;