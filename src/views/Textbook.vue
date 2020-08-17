<template>
  <div>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title>教科書を追加する</v-card-title>
        <v-text-field
          v-model="textbook.name"
          label="教科書名"
          outlined
          dense
        ></v-text-field>
        <v-btn-toggle
          v-model="textbook.subjects"
          multiple
          dense
          mandatory
        >
          <v-btn v-for="(value, key, index) in subjects" :key="index">
            {{ value }}
          </v-btn>
        </v-btn-toggle>
        <v-text-field
          v-model="textbook.unit"
          label="単位"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          v-model="textbook.allAmount"
          type="number"
          label="総分量"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          v-model="textbook.progressAmount"
          label="今進んでいる分量"
          outlined
          dense
        ></v-text-field>
        <v-card-actions>
          <v-btn @click="saveTextbook" right text>保存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card>
      <v-card-title>教科書一覧</v-card-title>
      <v-list>
        <v-list-item v-for="(value, key) in getTextbooks" :key="key">
          <v-list-item-content>
            <v-list-item-title>{{ value.name }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ value.progressAmount }}{{ value.unit }} / {{ value.allAmount }}{{ value.unit }} ({{ value.progressAmount / value.allAmount * 100 }}%)
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-card-actions>
        <v-btn text right @click="dialog = true">教科書を追加する</v-btn>
      </v-card-actions>
    </v-card>
    <BottomNavigation />
    <v-snackbar
      v-model="snackbar"
    >
      教科書を追加しました
      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          閉じる
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import BottomNavigation from '@/components/Organism/BottomNavigation'
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  name: 'Textbook',
  components: { BottomNavigation },
  data () {
    return {
      textbooks: [],
      textbook: {
        name: '',
        subjects: [],
        unit: 'ページ',
        allAmount: 0,
        progressAmount: 0
      },
      subjects: {
        Japanese: '現代文',
        classicalJapanese: '古文',
        classicalChinese: '漢文',
        math1: '数学I',
        mathA: '数学A',
        math2: '数学II',
        mathB: '数学B',
        math3: '数学III',
        advancedPhysics: '物理',
        basicPhysics: '物理基礎',
        advancedChemistry: '化学',
        basicChemistry: '化学基礎',
        EnglishCommunication: 'コミュニケーション英語',
        EnglishExpression: '英語表現'
      },
      dialog: false,
      snackbar: false
    }
  },
  computed: {
    ...mapGetters('Textbooks', [
      'getTextbooks'
    ])
  },
  methods: {
    saveTextbook () {
      this.addTextbook(this.textbook)
      this.snackbar = true
      this.dialog = false
    },
    ...mapActions('Textbooks', [
      'addTextbook'
    ])
  }
})
</script>

<style scoped>

</style>
