import tailwindcss from 'tailwindcss';
import tailwindcssForms from '@tailwindcss/forms';

const config = {
  plugins: [
    tailwindcss,
    tailwindcssForms({ strategy: "class" })
  ]
};

export default config;
