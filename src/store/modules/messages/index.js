const getters = {}

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
    }
}

const mutations = {
    addMessage(state, payload){
        state.messages.push(payload);
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