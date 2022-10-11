import { mdiHome, mdiCashMinus, mdiCashPlus, mdiCashClock } from "@mdi/js";
import MoblieModal from "@/components/app/modals/MoblieModal.vue";
import AddIncome from "@/components/app/formAddTransaction/AddIncome.vue";
import AddOutcome from "@/components/app/formAddTransaction/AddOutcome.vue";

export default {
  data() {
    return {
      showModalIncome: false,
      showModalOutcome: false,
      optMenu: [
        {
          id: "1",
          icon: mdiHome,
          label: "Inicio",
          click: this.routerHome,
        },
        {
          id: "2",
          icon: mdiCashPlus,
          label: "Ingreso",
          click: this.closeModalIncome,
        },
        {
          id: "1",
          icon: mdiCashMinus,
          label: "Egreso",
          click: this.closeModalOutcome,
        },
        {
          id: "4",
          icon: mdiCashClock,
          label: "Historial",
          click: this.routerHistory,
        },
      ],
    };
  },
  components: { MoblieModal, AddIncome, AddOutcome },
  methods: {
    routerHome() {
      this.$router.push("/");
      console.log("HOLI");
    },
    closeModalIncome() {
      this.showModalIncome = !this.showModalIncome;
      // this.$router.push("/añadir-ingreso");
    },
    closeModalOutcome() {
      this.showModalOutcome = !this.showModalOutcome;
      // this.$router.push("/añadir-egreso");
    },
    routerHistory() {
      this.$router.push("/historial-de-transacciones");
      console.log("JJJJJ");
    },
  },
};
