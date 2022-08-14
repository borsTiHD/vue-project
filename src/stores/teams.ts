import { defineStore } from 'pinia'

export const useTeamStore = defineStore({
    id: 'team-store',
    state: () => ({
        teams: ['Team 1', 'Team 2', 'Team 3'],
        selectedTeam: 'Team 1'
    }),
    actions: {
        setSelectedTeam(value: string) {
            this.selectedTeam = value
        }
    },
    getters: {
        getTeams: (state) => state.teams,
        getSelectedTeam: (state) => state.selectedTeam
    }
})
