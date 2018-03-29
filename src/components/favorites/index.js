import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImagesList from '../imagesList';
import SearchBar from '../searchBar';
import actions from '../../actions';
import Wrapper from '../wrapper';


class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this.props.getFavoritesR(1);
  }

  componentWillUnmount(){
    this.props.clearInput();
  }

  render() {

    if(this.props.loading){
      return <div>Loading...</div>
    }
    return (
      <Wrapper>
        <SearchBar
          handleChange={this.props.filterChange}
          handleSearch={this.props.getFavoritesR.bind(this,1)}
        />
        <ImagesList
          favButton={this.props.addRemoveFavoriteView}
        />
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  const {
    addRemoveFavoriteView,
    getFavoritesR,
    filterChange,
    filterClick,
    clearInput
  } = actions

  return bindActionCreators({
    addRemoveFavoriteView,
    getFavoritesR,
    filterChange,
    filterClick,
    clearInput
  }, dispatch);
}

const mapStateToProps = ({ favorites }) => {
  const {
    loading,
  } = favorites;

  return { 
    loading
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);