import React, { Component } from 'react';

import './index.css';

export default class FavoritesItem extends Component {

    _handleButtonDelete = (id) => {
        this.props.deleteFavorite(id);
    };

    render() {
        return(
            <div
                className="favorites__item"
            >
                <div className="favorites__item-top">
                    <div className="favorites__item-title">
                        <span>Название альбома:</span> {this.props.item.data[0]}
                    </div>
                    <div className="favorites__item-artist">
                        <span>Испольнитель:</span> {this.props.item.data[1]}
                    </div>
                </div>
                <div className="favorites__item-bottom">
                    <button
                        onClick={this._handleButtonDelete.bind(this, this.props.item.key)}
                        className="favorites__item-button"
                    >
                        Удалить
                    </button>
                </div>
            </div>
        )
    }
}