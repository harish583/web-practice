
import React, { Component } from 'react'
class TodoList extends Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus()
      }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input 
                placeholder="Task"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList
// import React, { Component } from 'react';
// class TodoList extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             line:["hello"]
            
//         }
//         console.log("line")
//     }
//     insertText(event){
//         this.setState({
//           line:event.target.value
//         })
//         console.log("line")
//       }
//     render(){
        
//         return <li>
//             <input type="checkbox" className="checkbox" />
//             <span className="textContent">{this.state.line}</span>
//             <span className="closingList">X</span>
//         </li>
//     }
// }
// export default TodoList;