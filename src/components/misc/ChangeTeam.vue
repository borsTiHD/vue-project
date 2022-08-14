<template>
    <Dropdown class="ml-2" v-model="selectedTeam" :options="teamStore.getTeams" @change="changeTeam" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTeamStore } from '@/stores/teams'

// Store
const teamStore = useTeamStore()

// Teams
const selectedTeam = computed(() => teamStore.getSelectedTeam)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const changeTeam = (event: any) => {
    const team = event?.value || false
    if (team) { teamStore.setSelectedTeam(team) }
}
</script>
