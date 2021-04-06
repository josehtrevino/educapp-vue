const getters = {
    getMessages(state){
        return state.messages;
    }
}

const actions = {
    async saveMessage(context, payload){
        const finalData = {
            id: new Date().getTime(),
            coachId: payload.id,
            name: payload.name,
            message: payload.message
        }

        await fetch(`https://educapp-vue-default-rtdb.firebaseio.com/messages/${finalData.id}.json`, {
            method: 'PUT',
            body: JSON.stringify(finalData)
        })

        context.commit('addMessage', finalData);
    },
    async fetchMessages(context){
        const messages = [];

        const response = await fetch('https://educapp-vue-default-rtdb.firebaseio.com/messages.json');

        const data = await response.json();

        for(let key in data){
            const message = {
                teacherId: data[key].teacherId,
                id: data[key].id,
                name: data[key].name,
                message: data[key].message
            }

            messages.push(message);
        }

        context.commit('setSavedMessages', messages);
    }
}

const mutations = {
    addMessage(state, payload){
        state.messages.push(payload);
    },
    setSavedMessages(state, payload){
        state.messages = payload;
    }
}

export default {
    namespaced: true,
    state(){
        return {
            messages: []
        }
    },
    getters,
    actions,
    mutations
}