import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImagesList from '../imagesList';
import SearchBar from '../searchBar';
import actions from '../../actions';
import Wrapper from '../wrapper'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this.props.getNewContent(1);
  }

  render() {

    if(this.props.loading){
      return <div>Loading...</div>
    }
    return (
      <Wrapper>
        <SearchBar
          handleSearch={this.props.getNewContent.bind(this,1)}
        />
        <ImagesList favButton={this.props.addRemoveFavoriteHome}/>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  const {
    getNewContent,
    searchChange,
    addRemoveFavoriteHome
  } = actions

  return bindActionCreators({
    getNewContent,
    searchChange,
    addRemoveFavoriteHome
  }, dispatch);
}

const mapStateToProps = (state) => {
  const { loading } = state.loading;
  return { loading };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);