import React, { Component } from 'react';

import SearchResult from './SearchResult';

import './index.css';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        }
    }

    _handleSearchValue = (event) => {
        this.setState({
            searchValue: event.target.value
        });
    };

    _handleSearchClick = () => {
        this.setState({
            searchValue: ''
        });

        this.props.sendData(this.state.searchValue);
    };

    render() {
        return(
            <div className="search">
                <div className="search__title">
                    Поиск альбомов
                </div>
                <div className="search__top">
                    <div className="search__block-input">
                        <input
                            type="text"
                            placeholder="Введите название альбома"
                            value={this.state.searchValue}
                            onChange={this._handleSearchValue}
                            className={!this.props.emptySearch.emptySearch ? "search__input" : "search__input search__input--error"}
                        />
                    </div>
                    <div className="search__block-button">
                        <button
                            onClick={this._handleSearchClick}
                            className="search__button"
                        >
                            Найти
                        </button>
                    </div>
                </div>
                <div className="search__bottom">
                    <SearchResult
                        addFavorite={this.props.addFavorite}
                        data={this.props.data.data}
                        localData={this.props.localData}
                    />
                </div>
            </div>
        )
    }
}