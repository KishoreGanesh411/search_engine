import React from "react";
import SearchInput from "./SearchInput";
import axios from "axios";




class App extends React.Component {
  constructor(props){
    super(props)

      this.state = {images: []}
      this.onSearchSubmit=this.onSearchSubmit.bind(this)
    
  }

 async onSearchSubmit(entry) {
    const response= await axios.get(`https://pixabay.com/api/?key=35221860-f8c4a1bbaaa2d7beecc344223&q=${entry}&image_type=photo&pretty=true`)
    console.log(response.data.hits)
    this.setState({images:response.data.hits})
  }





render(){
  return (


    <div className="ui container" style={{ marginTop: '30px' }}>
      <SearchInput onSearchSubmit={this.onSearchSubmit} />
    we curently have{this.state.images.length} images
    </div>

  )
}
}
export default App;