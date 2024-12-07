<template>
    <v-navigation-drawer app permanent class="sidebar">
      <!-- Logo and Profile -->
      <v-list-item>
        <v-icon class="me-2">mdi-theater</v-icon> <span class="text-h6 font-weight-medium">TurHR</span>
        <!-- <template v-slot:prepend>
            <v-icon class="me-2">mdi-theater</v-icon>
        </template>
        <v-list-item-title >Turi HR</v-list-item-title> -->
        <!-- <v-list-item-content>
          <v-img width="300px" src="../assets/TuriHRLogo.png" alt="dmdmr"></v-img>
          <span class="text-h5">TurHR</span>
        </v-list-item-content> -->
      </v-list-item>
  
      <!-- Navigation Items -->
      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-icon class="me-2">mdi-home</v-icon> Dashboard
        </v-list-item>
        <v-list-item>
          <v-icon class="me-2">mdi-folder</v-icon> Projects
        </v-list-item>
        <v-list-item>
          <v-icon class="me-2">mdi-calendar</v-icon> Calendar
        </v-list-item>
        <v-list-item>
          <v-icon class="me-2">mdi-beach</v-icon> Leave Management
        </v-list-item>
        <v-list-item>
          <v-icon class="me-2">mdi-cog</v-icon> Settings
        </v-list-item>
        <v-list-item>
          <v-icon class="me-2">mdi-bell</v-icon> Notification
        </v-list-item>
        <v-list-item>
          <v-icon class="me-2">mdi-help-circle</v-icon> Help & Center
        </v-list-item>
      </v-list>
  
      <!-- Team Management -->
      <v-divider></v-divider>
      <v-list>
        <p class="section-title">TEAM MANAGEMENT</p>
        <v-list-item>
          <v-icon class="me-2">mdi-account-group</v-icon> Performance
        </v-list-item>
        <v-list-item>
          <v-icon class="me-2">mdi-cash</v-icon> Payrolls
        </v-list-item>
        <v-list-item>
          <v-icon class="me-2">mdi-receipt</v-icon> Invoices
        </v-list-item>
        <v-list-item>
          <v-icon class="me-2">mdi-account</v-icon> Employees
        </v-list-item>
        <v-list-item>
          <v-icon class="me-2">mdi-briefcase</v-icon> Recruitment & Hiring
        </v-list-item>
      </v-list>
  
      <!-- List -->
      <v-divider></v-divider>
      <v-list>
        <p class="section-title">LIST</p>
        <v-list-item>
          <v-icon class="me-2">mdi-currency-usd</v-icon> Salary Information
        </v-list-item>
        <v-list-item>
          <v-icon class="me-2">mdi-chart-bar</v-icon> Compensation Breakdown
        </v-list-item>
        <v-list-item>
          <v-icon class="me-2">mdi-database</v-icon> Project-specific Data
        </v-list-item>
      </v-list>
  
      <!-- Announcements -->
      <div style="padding-top: 40px"> 
        <v-card flat variant="outlined"
      class="announcements">
        <p class="announcement-title"><v-icon color="primary">mdi-bullhorn</v-icon>  Announcements</p>
        <p class="announcement-content">
          Stay updated with TurHR<br />
          <a href="#">Create Now</a>
        </p>
        <p>
            Read by
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
    </p>
      </v-card>
      </div>
      
    </v-navigation-drawer>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
  .sidebar {
    width: 300px;
    background-color: #f8f9fa;
  }
  
  .logo {
    font-weight: bold;
    font-size: 20px;
  }
  
  .section-title {
    font-size: 12px;
    font-weight: bold;
    color: #6c757d;
    margin: 10px 0;
    padding-left: 16px;
  }
  
  .announcements {
    padding: 16px;
  }
  
  .announcement-title {
    font-weight: bold;
  }
  
  .announcement-content a {
    color: #6200ee;
    text-decoration: none;
  }
  </style>
  