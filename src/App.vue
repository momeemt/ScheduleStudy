<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-calendar-daily></v-calendar-daily>
          </v-col>
          <v-col>
            <v-row>
              <v-card>
                <v-card-title>今日の学習タスク</v-card-title>
                <v-card-text>
                  <v-list>
                    <v-list-item>出る順 準1級</v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-row>
            <v-row>
              <v-card>
                <v-card-title>進捗状況</v-card-title>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-bottom-navigation fixed grow>
        <v-btn value="today">
          <span>Today</span>
          <v-icon>mdi-calendar-today</v-icon>
        </v-btn>
        <v-btn value="add">
          <span>Add</span>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn value="report">
          <span>Report</span>
          <v-icon>mdi-file-chart</v-icon>
        </v-btn>
        <v-btn value="target">
          <span>Target</span>
          <v-icon>mdi-bullseye-arrow</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-main>
  </v-app>
</template>
