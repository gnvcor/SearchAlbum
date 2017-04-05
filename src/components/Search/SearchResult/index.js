import React, { Component } from 'react';

import SearchResultItem from './SearchResultItem';

import './index.css';

export default class SearchResult extends Component {

    _renderResult = () => {
        if (this.props.data) {
            let array = [];

            for (let key in this.props.data) {
                array.push({
                    key: key,
                    data: this.props.data[key]
                });
            }

            if (array.length > 0) {
                return(
                    array.map((item, key) => {
                        return (
                            <SearchResultItem
                                item={item}
                                addFavorite={this.props.addFavorite}
                                localData={this.props.localData}
                                key={key}
                            />
                        )
                    })
                );
            } else {
                return(
                    <div className="search-result__error">
                        Похоже, что такого альбома не существует. Попробуйте еще раз.
                    </div>
                );
            }
        }
    };

    render() {
        return(
            <div className="search-result">
                {this.props.data ?
                    <div className="search-result__data">
                        {this._renderResult()}
                    </div> :
                    <div className="search-result__error">Что бы добавить альбом в избранное, найдите его.</div>
                }
            </div>
        )
    }
}