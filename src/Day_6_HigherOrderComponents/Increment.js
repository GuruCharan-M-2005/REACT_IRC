import React ,{Component} from 'react'

export default function Increment(MyComp) {
  
   class MyIncrement extends Component {
        state ={count:0}
        inc=()=>{
            this.setState({count :this.state.count+1})
        }
        render(){
            return <MyComp inc={this.inc} count={this.state.count} /> 
        }
    }  
    return MyIncrement
}
