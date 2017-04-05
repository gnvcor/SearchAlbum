import store from '../store';

import { updateData } from '../actions';

class Api {
    _transformData(data) {
        let newData = {};

        for (let key in data['release-groups']) {
            if(data['release-groups'][key]['primary-type'] == "Album" && data['release-groups'][key]['score'] == 100) {
                newData[key] = {
                    title: data['release-groups'][key].title,
                    artist: data['release-groups'][key]['artist-credit'][0].artist.name,
                    id: data['release-groups'][key].id
                }
            }
        }

        return newData;
    }

    getData(params) {
        let url = 'http://musicbrainz.org/ws/2/release-group?query=releasegroup:' + params + '&fmt=json';

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                store.dispatch(updateData(this._transformData(data)));
            })
            .catch((e) => {
                store.dispatch(updateData(null));

                console.log(e);
            });
    }
}

let apiObject = new Api();

export default apiObject;