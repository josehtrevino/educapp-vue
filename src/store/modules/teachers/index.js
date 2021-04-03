const getters = {
    getTeachers: (state) => state.teachers
}

const actions = {
    async getAllTeachers(context){
        const response = await fetch('https://educapp-vue-default-rtdb.firebaseio.com/teachers.json', {
            method: 'GET'
        });

        const data = await response.json();

        const modifiedData = [];

        for (let el in data){
            modifiedData.push(data[el]);
        }

        context.commit('updateTeachersList', modifiedData);
    }
}

const mutations = {
    updateTeachersList(state, payload){
        state.teachers = payload;
    }
}

export default{
    namespaced: true,
    state(){
        return {
            teachers: null
        }
    },
    getters,
    actions,
    mutations
}