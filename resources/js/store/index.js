export default {

	state: {
		showFlash: false,
		changeLang: false,
	},

	getters: {
		getShowFlash(state) {
			return state.showFlash
		},
		getTest(state) {
			return 'Een nieuwe test'
		},
		getChangeLang(state) {
			return state.changeLang
		}


	},

	mutations: {
		SET_FlASH(state, flash) {
			state.showFlash = flash
		},
		SET_CHANGE_LANG(state, change) {
			state.changeLang = change
		}


	},

	actions: {

	},


}
