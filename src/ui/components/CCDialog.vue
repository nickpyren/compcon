<template>
  <div>
    <v-btn
      v-if="flat"
      :small="smallBtn"
      :large="large"
      :color="color"
      text
      :dark="dark"
      @click="dialog = true"
    >
      <slot name="button"></slot>
    </v-btn>
    <cc-btn v-else :small="smallBtn" :large="large" :color="color" @click="dialog = true">
      <slot name="button"></slot>
    </cc-btn>
    <v-dialog v-model="dialog" :width="small ? '30vw' : large ? '80vw' : '50vw'">
      <v-card tile>
        <cc-titlebar :color="color">
          <slot name="title"></slot>
          <slot slot="items" name="title-items"></slot>
        </cc-titlebar>

        <v-card-text>
          <slot></slot>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions v-if="noConfirm">
          <v-spacer />
          <v-btn text @click="dialog = false">dismiss</v-btn>
        </v-card-actions>
        <v-card-actions v-else>
          <v-btn text @click="dialog = false">cancel</v-btn>
          <v-spacer />
          <cc-btn @click="confirm">confirm</cc-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'


@Component({ name: 'cc-dialog' })
export default class CCDialog extends Vue {
  @Prop({ type: Boolean, })
  readonly small?: boolean 
  @Prop({ type: Boolean, })
  readonly smallBtn?: boolean 
  @Prop({ type: Boolean, })
  readonly large?: boolean 

  @Prop({ type: String, required: false, default: 'primary', })
  readonly color: string 

  @Prop({ type: Boolean, })
  readonly flat?: boolean 
  @Prop({ type: Boolean, })
  readonly dark?: boolean 
  @Prop({ type: Boolean, })
  readonly noConfirm?: boolean

  dialog = false

  @Emit()
  confirm() {
    this.dialog = false
  }
}
</script>
