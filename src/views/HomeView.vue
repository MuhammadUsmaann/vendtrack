<template>
  <v-container fluid>
    <div id="chart">
      <apexchart type="line" height="350" :options="linechartOptions" :series="lineseries"></apexchart>

      <apexchart type="rangeBar" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import VueApexCharts from 'vue-apexcharts'
// Components
// import ReportGenerator from '../views/ReportGeneratorView.vue';

export default defineComponent({
  name: 'HomeView',

  components: {

    apexchart: VueApexCharts,
  },
  data() {
    return {
      lineseries: [{
        name: "2022",
        data: [100000, 255000, 300000, 105600, 298000, 100000, 230000, 240000, 108800, 277800, 320000, 200000]
      },
      {
        name: "2021",
        data: [180000, 206760, 300000, 105600, 298000, 265500, 234000, 240870, 108970, 274300, 320124, 212300]

      },
      {
        name: '2020',
        data: [123456, 298769, 312345, 234513, 297650, 198660, 265700, 267600, 125480, 277800, 234400, 323000]

      }
      ],
      linechartOptions: {
        chart: {
          height: 350,
          type: 'line',
          // zoom: {
          //   enabled: false
          // },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [4, 4, 4],
          curve: 'straight',
        },
        title: {
          text: 'WOW Sales Perforance (cs)',
          align: 'left'
        },
        xaxis: {
          categories: ['WK 1', 'WK 2', 'WK 3', 'WK 4', 'WK 5', 'WK 6', 'WK 7', 'WK 8', 'WK 9', 'WK 10', 'WK 11', 'WK 12',],
        },
        grid: {
          borderColor: '#E3E3E3',
        }
      },

      series: [{
        data: [{
          x: 'Mkt Seg 1',
          y: [0, 6.090]
        },
        {
          x: 'Mkt Seg 2',
          y: [0, 6.000]
        },
        {
          x: 'Mkt Seg 4',
          y: [0, 11.090]
        },
        {
          x: 'Mkt Seg 5',
          y: [0, 11.090]
        }]
      }, {
        data: [{
          x: 'Mkt Seg 1',
          y: [0, 11.090]
        },
        {
          x: 'Mkt Seg 2',
          y: [0, 4.690]
        },
        {
          x: 'Mkt Seg 4',
          y: [0, 3.020]
        },
        {
          x: 'Mkt Seg 5',
          y: [0, 5.090]
        }]
      }],
      chartOptions: {
        chart: {
          type: 'rangeBar',
          height: 350
        },
        bar: {
          width: [4, 8],
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        dataLabels: {
          enabled: false
        }
      },
    }
  },
});
</script>
