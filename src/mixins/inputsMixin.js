export default {
  props: {
    modelValue: { type: String, default: "" },
    label: { type: String, default: "Label" },
    hasMiniLabel: { type: Boolean, default: false },
    miniLabelType: { type: String, default: "required" },
    placeholder: { type: String, default: "Placeholder" },
    required: { type: String, default: false },
    disabled: { type: String, default: false },
  },
  computed: {
    localModel: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit("update:modelValue", newValue);
      },
    },
    miniLabelElems() {
      return this.miniLabelType === "required"
        ? { class: "mini-label--required", label: "*" }
        : { class: "mini-label--optional", label: "(Opcional)" };
    },
  },
};
