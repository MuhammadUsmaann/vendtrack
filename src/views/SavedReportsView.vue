<template>


  <div class=" whos-Reported page-height rounded bg-white px-3 py-4">
    <div class="row mx-0 align-item-center mb-3">
      <div class="col px-0">
        <CHeading content="Saved Reports" />
      </div>
    </div>
    <div class="overflow-auto">

      <b-table id="my-table" hover :fields="fields" :items="items" :per-page="perPage" :current-page="currentPage">
        <template #cell(regenerate)>
          
          <router-link to="/whos-reported" class="waves-effect">
          <p class="mb-0 font-weight-600 font-black font-13 text-right font-mono font-style-underline">Re-Generate
          </p>
        </router-link>
        </template>
      </b-table>

    </div>
    <div class=" paginationclass pt-4">
      <div class="font-mono font-14 ">
        {{ rows }} Total Listings
      </div>
      <div>
        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table">
        </b-pagination>
      </div>
    </div>
  </div>
</template>

<script>

// @ is an alias to /src
import CHeading from '@/components/heading.vue';
export default {
  computed: {
    rows() {
      return this.items.length
    }
  },
  name: 'SavedReports',
  components: {
    CHeading
  },
  data() {
    return {

      fields: [
        {
          key: 'reportname',
          label: 'Report Name',
          class: 'distributerNameClass',
        },
        { label: 'Date Saved', key: 'datesaved', class: 'lastInvoiceClass', },
        { label: 'Re-Generate', key: 'regenerate', class: 'lastReportedDateClass', },
      ],

      perPage: 24,
      currentPage: 1,
      items: [
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        }, {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        }, {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        }, 
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017',
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017'
        }, {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017'
        },
        {
          reportname: 'Cameron Williamson',
          datesaved: '15/08/2017'
        }
      ],
    }
  },

}
</script>

<style >
.distributerNameClass {
  border: 0 !important;
  height: 43px !important;
  padding: 0 0.75rem !important;
  vertical-align: inherit !important;
}

.lastInvoiceClass {
  border: 0 !important;
  height: 43px !important;
  text-align: end !important;
  width: 20%;
  padding: 0 0.75rem !important;
  vertical-align: inherit !important;


}

.lastReportedDateClass {
  border: 0 !important;
  height: 43px !important;
  text-align: end !important;
  width: 43%;
  padding: 0 0.75rem !important;
  vertical-align: inherit !important;
}


ul {
  margin-bottom: 0 !important;
}

.table {
  margin-bottom: 0 !important;
}
</style>
