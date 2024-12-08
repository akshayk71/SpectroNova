<template>
    <v-card>
      <v-row justify="space-between">
        <v-col cols="6">
             <span class="text-h6 font-weight-medium" style="padding-left:20px; padding-top:20px;">Dashboard</span>
        </v-col>
        <v-col cols="3">
          <v-text-field
            label="Quick Search"
            color="primary"
            prepend-icon="mdi-magnify"
            class="small-label"
            variant="outlined"
            density="compact"
          ></v-text-field>
          </v-col>
          <v-col cols="3">
          <v-btn icon>
            <v-icon>mdi-email</v-icon>
          </v-btn>
          <v-avatar-group>
            <v-avatar>
                <v-icon icon="mdi-account" />
            </v-avatar>
            <v-avatar>
                <v-icon icon="mdi-account" />
            </v-avatar>
            <v-avatar>
                <v-icon icon="mdi-account" />
            </v-avatar>
        </v-avatar-group>
          <v-btn>Invite</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </template>
  
  <script>
  export default {};
  </script>

  