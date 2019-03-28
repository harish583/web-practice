import React from 'react';
import './index.css'

export default class Emoji extends React.Component{
    constructor(props){
        super(props);
        this.state={
            emoji:[],
            searchEmojiText:"",
            searchEmoji:[],
            spare:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/emoji')
        .then(function(response) {
            return response.json();
        })
        .then((response)=>{
            this.setState({
                emoji:response,
                spare:response
            })
        });
        
    }
    searchImage=(e)=>{
        var text = e.target.value.toUpperCase();
        var obj = this.state.spare;
        var searchEmoji = []
        for (let k in obj) {
            if (obj[k].name.toUpperCase().indexOf(text)>-1) {
                searchEmoji.push(obj[k])
            }
        }
        this.setState({
            emoji:searchEmoji
        })
      }
    render(){
        var emoji = this.state.emoji
        return(
            <div className="emoji-holder">
                <div>Emoji Search</div>
                <input type="text" onChange={this.searchImage}></input>
                <div>
                    {emoji.map((item,index)=>{
                        return <div key={index} className="emoji-details">
                            <span><img className="emoji-pic" src={item.image} /></span>
                            <span className="emoji-name">{item.name}</span>
                        </div>
                        })
                    }
                </div>
            </div>
        )
    }
}