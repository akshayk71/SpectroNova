<template>
    <div class="main-content">
    <!-- Header -->
     <Header></Header>
      <div class="content-header">
        <span class="text-h5 font-weight-medium">Good Morning, Turja Sen</span>
      </div>
  
      <!-- Top Widgets -->
      <v-row class="top-widgets" dense>
        <v-col cols="4">
          <div class="widget">
            <p>Total Employees</p>
            <div class="d-inline-flex align-center mt-2 md-2" style="background-color: lightgreen;">
            <div class="mx-2"><span class="font-weight-medium">150 </span><span class="green">+50</span></div>
            <div class="mx-2">Full-Time Employees</div>
            </div>
            <div class="d-inline-flex align-center mt-2 md-2" style="background-color:#FFCC99">
            <div class="mx-2"><span class="font-weight-medium">50 </span><span class="orange">+10</span></div>
            <div class="mx-2">Freelance Employees</div>
        </div>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="widget">
            <v-card class="pa-4" flat style="background-color: inherit;">
                 <v-card-title class="text-h6">Attendance Overview</v-card-title> 
                 <v-card-subtitle class="text-h4">90%<span class="text-subtitle-2 green--text">↑ 20% since last month</span> </v-card-subtitle> 
                 <v-row class="mt-4">
                    <v-col cols="4"> 
                        <v-chip color="amber-lighten-3" label>Sick Leave</v-chip> 
                    </v-col>
                    <v-col cols="4"> <v-chip color="blue" label>Day Off</v-chip> 
                    </v-col>
                    <v-col cols="4">
                        <v-chip color="purple" label>On time</v-chip> 
                    </v-col> 
                </v-row>
                <v-progress-linear
                    color="purple"
                    model-value="15"
                    class="mt-5"
                    ></v-progress-linear>
            </v-card>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="widget">
            <p>Today Used Devices</p>
            <h2>100 Overall</h2>
            <v-row>
                <v-col cols="auto">                
                <v-progress-circular
                color="brown"
                model-value="60"
                size="80"
                ></v-progress-circular>
                </v-col>
                <v-col cols="auto">
                    <p>80 Macbook</p>
                    <p>13 Keyboard</p>
                    <p>07 Headphones</p>
                </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
  
      <!-- Employee Ratings and Income Statistics -->
      <v-row class="ratings-income" dense>
        <v-col cols="6">
          <div class="widget">
            <p>Employee Performance Ratings</p>
            <p><span class="text-h6 font-weight-medium">98%</span>At Tur Agency, we're proud of our employees' punctuality and quality work.
            </p>
            <v-row>
                <v-col cols="3">
                    Ahsan Tapadar 
                </v-col>
                <v-col cols=3></v-col>
                <v-col cols="6">
                    <v-progress-linear
                        color="purple"
                        model-value="35"
                        >
                    </v-progress-linear>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="3">
                    Koyes Ahmed 
                </v-col>
                <v-col cols=3></v-col>
                <v-col cols="6">
                    <v-progress-linear
                        color="blue"
                        model-value="30"
                        >
                    </v-progress-linear>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="3">
                    Washi Bin M.
                </v-col>
                <v-col cols=3></v-col>
                <v-col cols="6">
                    <v-progress-linear
                        color="green"
                        model-value="25"
                        >
                    </v-progress-linear>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="3">
                    Mir Muhsin 
                </v-col>
                <v-col cols=3></v-col>
                <v-col cols="6">
                    <v-progress-linear
                        color="red"
                        model-value="45"
                        >
                    </v-progress-linear>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="3">
                    Turja Sen Das
                </v-col>
                <v-col cols=3></v-col>
                <v-col cols="6">
                    <v-progress-linear
                        color="amber"
                        model-value="33"
                        >
                    </v-progress-linear>
                </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="widget">
            <p>Income Statistics</p>
            <h2>May 2024: <span class="bold">$2,198.11</span></h2>
            <p>Income | <span class="bold">$733.43</span> Expense</p>
                <BarChart :data="chartData" />
          </div>
        </v-col>
      </v-row>
  
      <!-- Employee List -->
      <div class="employee-list">
        <v-card flat>
          <v-row>
            <v-col cols="2">
                <span class="text-h6 font-weight-medium">All Employees</span>
            </v-col>
            <v-col cols="1"></v-col>
            <v-col>
              <v-text-field 
                class="small-label" 
                label="Search Employess"   
                color="primary"
                variant="outlined"
                density="compact"
                dense></v-text-field>
            </v-col>
            <v-col>
              <v-select 
                class="small-label"
                label="All status"
                color="primary"
                variant="outlined"
                dense 
                density="compact"
                outlined 
                :items="['All Status', 'Full-time', 'Freelance']"><v-label>All Status</v-label></v-select>
            </v-col>
            <v-col>
              <v-select label="All Roles" 
              color="primary"
              variant="outlined"
              dense
              density="compact"
              :items="['All Roles', 'UI Designer', 'Product Designer']"></v-select>
            </v-col>
            <v-col>
              <v-btn block>Export</v-btn>
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
      </div>
    </div>
  </template>
  
  <script>
  import Header from './Header.vue';
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  export default {
    name: "MainContent",
    components: {
        Header,
        BarChart: Bar
    },
    data () {
    return {
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'], // months
        datasets: [
          {
            label: 'Income',
            data: [1000, 1200, 1100, 1300, 1400, 1200, 1500, 1600, 1700, 1800, 1900], // Income data
            backgroundColor: 'rgba(75, 192, 192, 0.6)', // bar color for income
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          },
          {
            label: 'Expense',
            data: [800, 900, 850, 950, 1100, 1000, 1200, 1300, 1400, 1350, 1450], // Expense data
            backgroundColor: 'rgba(255, 99, 132, 0.6)', // bar color for expense
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      }
    }
  }
  };
</script>
  
<style scoped>
.main-content {
    padding: 20px;
    background-color: #fff;
}
  
.content-header {
    margin-top: 20px;
    margin-bottom: 20px;
}
  
.top-widgets .widget, .ratings-income .widget {
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

canvas {
  max-width: 100%;
  height: 400px;
}

.small-label .v-label.v-field-label { 
    font-size: 11px !important; 
}

  </style>
  