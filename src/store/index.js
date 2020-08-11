import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

export default new Vuex.Store( {
	state: {
		phabricatorApiKey: '',
		taskId :'',
		retrievedTask: {
			title: '',
			status: '',
			description: '',
		},
		taskFeatures: {
			T123: {
				fd9888eb7: 'r7ccdede4',
			}
		},
		features: {
			fd9888eb7: {
				label: 'Impact for developers',
				options: {
					r5792c5a0: {
						label: 'No impact',
						value: 0,
					},
					r7ccdede4: {
						label: 'minor positive impact',
						value: 1,
					},
					r98853cd7: {
						label: 'positive impact',
						value: 2,
					},
				},
			},
			f72ae704: {
				label: 'Impact for users',
				options: {
					r72ae948: {
						label: 'No impact',
						value: 0,
					},
					r72aeb28: {
						label: 'minor positive impact',
						value: 1,
					},
					r72aec22: {
						label: 'positive impact',
						value: 2,
					},
				},
			},
			ffafdd06: {
				label: 'Relation to prior problems',
				options: {
					rfafdf4a: {
						id: 'r5792c5a0',
						label: 'Did not cause any issues',
						value: 0,
					},
					rfafe15c: {
						id: 'r7ccdede4',
						label: 'Did cause issues before',
						value: 1,
					},
					rfafe274: {
						id: 'r98853cd7',
						label: 'related to incidents',
						value: 2,
					},
				},
			},
		},
	},
	mutations: {
		setApiKey(state, key) {
			state.phabricatorApiKey = key;
		},
		setCurrentTaskId(state, taskId) {
			state.taskId = taskId;
		},
		setTaskData(state, payload) {
			console.log(payload);
			state.retrievedTask.title = payload.title;
			state.retrievedTask.status = payload.status;
			state.retrievedTask.description = payload.description;
		}
	},
	actions: {
		setApiKey({ commit }, apiKey) {
			commit('setApiKey', apiKey);
		},
		retrieveTask({ commit, state }, taskId) {
			commit('setCurrentTaskId', taskId);

			const endpoint = 'https://phabricator.wikimedia.org/api/maniphest.info';
			const query = {
				task_id: taskId.slice(1),
				'api.token': state.phabricatorApiKey,
			};
			const fetchOptions = {
				mode: 'cors',
				// ua
			};
			fetch(`${endpoint}?${Object.entries(query).map(([k, v]) => `${k}=${v}`).join('&')}`, fetchOptions)
				.then(response => response.json())
				.then(data => commit('setTaskData', data))
				.catch(error => {console.error(error); alert(error)})

		},
	},
	modules: {},
} );
