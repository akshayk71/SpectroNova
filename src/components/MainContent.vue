<template>
    <div class="main-content">
      <!-- Header -->
      <div class="content-header">
        <h1>Good Morning, Turja Sen</h1>
      </div>
  
      <!-- Top Widgets -->
      <v-row class="top-widgets" dense>
        <v-col cols="4">
          <div class="widget">
            <p>Total Employees</p>
            <h2>150 <span class="green">+50</span></h2>
            <p>Full-time Employee</p>
            <h2>50 <span class="orange">+10</span></h2>
            <p>Freelance Employee</p>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="widget">
            <p>Attendance Overview</p>
            <h2>90% <span class="green">+20%</span></h2>
            <p>since last month</p>
            <p>Sick Leave | Day Off | On Time</p>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="widget">
            <p>Today Used Devices</p>
            <h2>100 Overall</h2>
            <p>80 Macbook</p>
            <p>13 Keyboard</p>
            <p>07 Headphones</p>
          </div>
        </v-col>
      </v-row>
  
      <!-- Employee Ratings and Income Statistics -->
      <v-row class="ratings-income" dense>
        <v-col cols="6">
          <div class="widget">
            <p>Employee Performance Ratings</p>
            <h2>98%</h2>
            <p>At Tur Agency, we're proud of our employees' punctuality and quality work.</p>
            <p>Ahsan Tapadar <span class="blue">Task: 35</span></p>
            <p>Koyes Ahmed <span class="blue">Task: 30</span></p>
            <p>Washi Bin M. <span class="blue">Task: 25</span></p>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="widget">
            <p>Income Statistics</p>
            <h2>May 2024: <span class="bold">$2,198.11</span></h2>
            <p>Income | <span class="bold">$733.43</span> Expense</p>
            <div class="chart-placeholder">
              <!-- Replace this with your chart -->
              <p>[Chart Placeholder]</p>
            </div>
          </div>
        </v-col>
      </v-row>
  
      <!-- Employee List -->
      <div class="employee-list">
        <v-card>
          <v-row>
            <!-- <div>
                <v-sheet class="d-flex mb-6 bg-surface-variant">
                <v-sheet class="ma-2 pa-2 me-auto">Flex item</v-sheet>
                <v-sheet class="ma-2 pa-2">Flex item</v-sheet>
                <v-sheet class="ma-2 pa-2">Flex item</v-sheet>
                </v-sheet>
            </div> -->
            <v-col cols="2">
                <span class="text-h6 font-weight-medium">All Employees</span>
            </v-col>
            <v-col cols="1"></v-col>
            <v-col>
              <v-text-field class="small-label" label="Search Employess" dense outlined></v-text-field>
            </v-col>
            <v-col>
              <v-select class="small-label" label="All status" dense outlined :items="['All Status', 'Full-time', 'Freelance']"><v-label>All Status</v-label></v-select>
            </v-col>
            <v-col>
              <v-select label="All Roles" dense outlined :items="['All Roles', 'UI Designer', 'Product Designer']"></v-select>
            </v-col>
            <v-col>
              <v-btn block color="primary">Export</v-btn>
            </v-col>
          </v-row>
          <v-table fixed-header hover>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Department</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TUR871219</td>
                <td>Ahsan Tapadar</td>
                <td>ahsan.tur@mail.com</td>
                <td>Sr UI/UX Designer</td>
                <td>Team Projects</td>
                <td><v-chip color="green">Full-time</v-chip></td>
                <td><v-icon class="me-2">mdi-eye-outline</v-icon><v-icon class="me-2">mdi-dots-vertical</v-icon></td>
              </tr>
              <tr>
                <td>TUR185103</td>
                <td>Washi Bin M.</td>
                <td>washi.tur@mail.com</td>
                <td>Lead Product Designer</td>
                <td>Head of Projects</td>
                <td><v-chip color="green">Full-time</v-chip></td>
                <td><v-icon class="me-2">mdi-eye-outline</v-icon><v-icon class="me-2">mdi-dots-vertical</v-icon></td>
              </tr>
              <tr>
                <td>TUR751481</td>
                <td>Koyes Ahmed</td>
                <td>koyes.tur@mail.com</td>
                <td>Sr UX Designer</td>
                <td>Client & Team Work</td>
                <td><v-chip color="green">Full-time</v-chip></td>
                <td><v-icon class="me-2">mdi-eye-outline</v-icon><v-icon class="me-2">mdi-dots-vertical</v-icon></td>
              </tr>
              <tr>
                <td>TUR016481</td>
                <td>Turja Sen Das</td>
                <td>turja.tur@mail.com</td>
                <td>Mid UI Designer</td>
                <td>Case Study</td>
                <td><v-chip color="orange">Freelance</v-chip></td>
                <td><v-icon class="me-2">mdi-eye-outline</v-icon><v-icon class="me-2">mdi-dots-vertical</v-icon></td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
        <button class="export-button">EXPORT</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MainContent",
  };
  </script>
  
  <style scoped>
  .main-content {
    padding: 20px;
    background-color: #fff;
  }
  
  .content-header {
    margin-bottom: 20px;
  }
  
  .top-widgets .widget,
  .ratings-income .widget {
    background: #f7f8fa;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    height: 100%;
  }
  
  .widget h2 {
    margin: 0;
  }
  
  .widget .green {
    color: #28a745;
  }
  
  .widget .orange {
    color: #ffa500;
  }
  
  .widget .blue {
    color: #007bff;
  }
  
  .chart-placeholder {
    height: 100px;
    background: #e9ecef;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }
  
  .employee-list {
    margin-top: 20px;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  
  .export-button {
    background-color: #007bff;
    color: white;
    padding: 10px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .small-label .v-label.v-field-label
  { font-size: 11px !important; }
  </style>
  