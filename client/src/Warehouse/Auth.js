import axios from 'axios'

import router from '../router';


const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: '',
    error: null
};

const getters = {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error : state => state.error
};

const actions = {
    async login({
        commit
    }, user) {

        try {
            commit('auth_request')
            let res = await axios.post('/api/users/login', user)
            if (res.data.success) {
                const token = res.data.token
                const user = res.data.user;
                //store the token in to localstorage
                localStorage.setItem('token', token);
                //set the axios default
                axios.defaults.headers.common['Authorization'] = token;
                commit('auth_success', token, user);
            }
            return res;
        } catch (err) {
            commit('auth_error', err);
        }
    },

    async register({
        commit
    }, userData) {
        try {
            commit('register_request');
            let res = await axios.post('/api/users/register', userData)
            if (res.data.success !== undefined) {
                commit('register_success');
                return res;
            }
            
        } catch (err) {
            commit('register_error', err);
        }
    },
    async getProfile({
        commit
    }) {
        commit('profile_request')
        let res = await axios.get('/api/users/profile')
        commit('user_profile', res.data.user)
        return res;
    },

    async logout({ commit }) {
        await localStorage.removeItem('token');
        commit('logout')
        delete axios.defaults.headers.common['Authorization'];
        router.push('/login')
        return
    }
};

const mutations = {
    auth_request(state) {
        state.status = 'loading'
        state.error= null
    },
    auth_success(state, token, user) {
        state.token = token,
        state.user = user
        state.status = 'success'
        state.error= null
    },
    auth_error(state,err){
        state.error = err.response.data.msg
    },
    register_request(state) {
        state.status = 'loading'
        state.error= null
    },
    register_success(state) {
        state.status = 'success'
        state.error= null
    },
    register_error(state,err){
        state.error = err.response.data.msg
    },

    logout(state) {
        state.status = ''
        state.token = ''
        state.user = ''
        state.error= null
    },
    profile_request(state) {
        state.status = "loading"
        state.error= null
    },
    user_profile(state, user) {
        state.user = user
    }

};

export default {
    state,
    actions,
    mutations,
    getters
}