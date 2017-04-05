import React, { Component } from 'react';

import FavoritesItem from './FavoritesItem';

import './index.css';

export default class Favorites extends Component {

    _renderFavorites = () => {
        if (this.props.localData.localData) {
            let array = [];

            for (let key in this.props.localData.localData) {
                array.push({
                    key: key,
                    data: this.props.localData.localData[key].split(';')
                });
            }

            if (array.length > 0) {
                return(
                    array.map((item, key) => {
                        return (
                            <FavoritesItem
                                item={item}
                                deleteFavorite={this.props.deleteFavorite}
                                key={key}
                            />
                        )
                    })
                );
            } else {
                return(
                    <div className="favorites__error">
                        Вы еще не добавили ни одного альбома.
                    </div>
                );
            }
        }
    };

    render() {
        return(
            <div className="favorites">
                <div className="favorites__title">
                    Избранное
                </div>
                <div className="favorites__items">
                    {this._renderFavorites()}
                </div>
            </div>
        )
    }
}