<template>
  <v-container fluid>
    <compendium-table :headers="headers" :items="weapons">Mech Weapons</compendium-table>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import CompendiumTable from '../components/CompendiumTable.vue'
import { getModule } from 'vuex-module-decorators'
import { CompendiumStore } from '@/store'
import { MechWeapon } from '../../../classes/mech/MechWeapon'

@Component({
  components: { CompendiumTable },
})
export default class Weapons extends Vue {
  public headers = [
    { text: 'Source', align: 'left', value: 'Source' },
    { text: 'Weapon', align: 'left', value: 'Name' },
    { text: 'License', align: 'left', value: 'LicenseString' },
    { text: 'Size', align: 'left', value: 'Size' },
    { text: 'Type', align: 'left', value: 'Type' },
    { text: 'Range', align: 'left', value: 'Range[0].Max' },
    { text: 'Damage', align: 'left', value: 'Damage[0].Max' },
  ]

  private compendium = getModule(CompendiumStore, this.$store)
  public get weapons(): MechWeapon[] {
    return this.compendium.MechWeapons.filter(x => x.Source)
  }
}
</script>
