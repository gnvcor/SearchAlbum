import React, { Component } from 'react';

import './index.css';

export default class SearchResultItem extends Component {

    _handlerButtonAdd = (title, artist, id) => {
        this.props.addFavorite(title, artist, id);
    };

    render() {
        return(
            <div
                className="search-result__data-item"
            >
                <div className="search-result__data-item-top">
                    <div className="search-result__data-item-title">
                        <span>Название альбома:</span> {this.props.item['data']['title']}
                    </div>
                    <div className="search-result__data-item-artist">
                        <span>Испольнитель:</span> {this.props.item['data']['artist']}
                    </div>
                </div>
                <div className="search-result__data-item-bottom">
                    <button
                        onClick={this._handlerButtonAdd.bind(this, this.props.item['data']['title'], this.props.item['data']['artist'], this.props.item['data']['id'])}
                        className="search-result__data-item-button"
                        disabled={this.props.localData.localData[this.props.item['data']['id']] ? true : false}
                    >
                        {this.props.localData.localData[this.props.item['data']['id']] ? "Добавлено" : "Добавить в избранное"}
                    </button>
                </div>
            </div>
        )
    }
}