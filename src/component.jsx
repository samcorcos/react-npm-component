import React from 'react'

export class MyReactComponent extends React.Component {
  componentDidMount() {
    console.log(this.myRef)
  }
  
  render() {
    return (
      <div ref={ref => {this.myRef = ref}}>
        This is an external component
      </div>
    )
  }
}

export default MyReactComponent
