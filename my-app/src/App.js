  
import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import SelectedBeast from './components/SelectedBeast';
import hornsData from './components/Data.json';

class App extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      hornedData: hornsData,
      show: false,
      selectedAnimal: {}
    }
  }

  hideModal = () => {
    this.setState({ 
      show: false, 
      selectedAnimal: {}
     });
  }

  renderingSelectedAnimal = (title) => {

    let selectedAnimal = hornsData.find(beast => {

      if (beast.title === title) {
        return beast

      }

    })

    this.setState({
      show: true,
      selectedAnimal: selectedAnimal
    })

  }

  renderingFilteredBeast = (value)=>{
    this.setState ({
      hornedData: value
    })

  }

  render() {

    return (
      <div>
        <Header />
        <Main hornedData={this.state.hornedData} renderingSelectedAnimal={this.renderingSelectedAnimal}   renderingFilteredBeast={this.renderingFilteredBeast}/>
        <SelectedBeast show={this.state.show} selectedAnimal={this.state.selectedAnimal} 
        handleClose={this.hideModal} />
        <Footer />
      </div>
    )
  }
}


export default App;