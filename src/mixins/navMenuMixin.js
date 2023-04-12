import { mdiHome, mdiCashMinus, mdiCashPlus, mdiCashClock } from "@mdi/js";
import MoblieModal from "@/components/app/modals/MoblieModal.vue";
import AddIncome from "@/components/app/formAddTransaction/AddIncome.vue";
import AddOutcome from "@/components/app/formAddTransaction/AddOutcome.vue";

export default {
  components: { MoblieModal, AddIncome, AddOutcome },
  data() {
    return {
      index: 0,
      showModalIncome: false,
      showModalOutcome: false,
      currentRoute: "",
      optMenu: [
        {
          id: "1",
          icon: mdiHome,
          label: "Inicio",
          click: this.routerHome,
          isActive: this.$route.path === "/",
        },
        {
          id: "2",
          icon: mdiCashPlus,
          label: "Ingreso",
          click: this.openModalIncome,
        },
        {
          id: "3",
          icon: mdiCashMinus,
          label: "Gasto",
          click: this.openModalOutcome,
        },
        {
          id: "4",
          icon: mdiCashClock,
          label: "Historial",
          click: this.routerHistory,
          isActive: this.$route.path === "/historial-de-transacciones",
        },
      ],
    };
  },
  methods: {
    routerHome() {
      this.$router.push("/");
      this.closeModalIncome();
      this.closeModalOutcome();
    },
    openModalIncome() {
      this.closeModalOutcome();
      this.showModalIncome = true;
    },
    closeModalIncome() {
      this.showModalIncome = false;
    },
    openModalOutcome() {
      this.closeModalIncome();
      this.showModalOutcome = true;
    },
    closeModalOutcome() {
      this.showModalOutcome = false;
    },
    routerHistory() {
      this.$router.push("/historial-de-transacciones");
      this.closeModalIncome();
      this.closeModalOutcome();
    },
    setIndex(newVal) {
      if (newVal) {
        this.index = this.optMenu
          .map((ele) => String(ele.isActive))
          .indexOf("true");
      }
      this.optMenu[this.index].isActive = !newVal;
    },
  },
  watch: {
    showModalIncome(newVal) {
      this.setIndex(newVal);
      this.optMenu[1].isActive = newVal;
    },
    showModalOutcome(newVal) {
      this.setIndex(newVal);
      this.optMenu[2].isActive = newVal;
    },
  },
};
