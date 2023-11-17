import React,{Component} from 'react'
import ReactPlayer from 'react-player'
import './css/body.css'
class Body extends Component{
constructor() {
  super();
  this.state={ count: 0}

}
increment =() =>{
this.setState({count: this.state.count+1})
}
decrement =() =>{
this.setState({count: this.state.count-1})
}
render(){
  return(
    <div>
          <ReactPlayer url={'https://www.youtube.com/watch?v=XfXgUZDCAoA'} controle height={500} width={500} />
                    <p> An image is a visual representation of something. An image can be a two-dimensional (2D) representation, such as a drawing, painting, or photograph, or a three-dimensional (3D) object, such as a carving or sculpture.</p>

      <img src='https://th.bing.com/th/id/OIP.JSsToB-lGbPi1xiDUmK03wHaEo?w=282&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt="Description of the image" className='image' />
      <p>{this.state.count}</p>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>decrement</button>

    </div>
  )
}
}
export default Body