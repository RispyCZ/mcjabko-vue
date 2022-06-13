import { defineConfig } from "windicss/helpers"
import plugin from "windicss/plugin"
export default defineConfig({
  safelist: "btn-red",
  theme: {
    extend: {
      colors: {
        "mcj-red": "#d9534f",
      },
    },
  },
  plugins: [
    require('@windicss/plugin-icons'),
  ],
  shortcuts: {
    "btn-red": "bg-mcj-red text-white p-3 rounded-lg hover:bg-red-700 transition duration-150 ease-out hover:ease-in"
  },
})
