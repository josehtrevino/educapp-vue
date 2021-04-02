const getters = {
    getTeachers: (state) => state.coaches
}

const actions = {}

const mutations = {}

export default{
    namespaced: true,
    state(){
        return {
            coaches: [
                {
                    'id': 'a01',
                    'firstName': 'Edward',
                    'lastName': 'Johnson',
                    'age': '32',
                    'skills': ['Algebra', 'Calculus', 'Statistics'],
                    'about': 'Be the teacher you always wanted to have',
                    'country': 'Canada'
                },
                {
                    'id': 'a02',
                    'firstName': 'Christina',
                    'lastName': 'Ruzzo',
                    'age': '28',
                    'skills': ['Web development', 'UX UI Design', 'Mobile development'],
                    'about': 'Education is the key to change our world',
                    'country': 'Argentina'
                },
                {
                    'id': 'a03',
                    'firstName': 'Gerard',
                    'lastName': 'Muñoz',
                    'age': '36',
                    'skills': ['English', 'French', 'German'],
                    'about': 'I love learning something new everyday',
                    'country': 'Spain'
                }
            ]
        }
    },
    getters,
    actions,
    mutations
}