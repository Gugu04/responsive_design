module.exports = {
  purge: {
    content: ['./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        //Celulares pequenios ejemplo iPhone 5/SE
        'msm': { 'min': '315px', 'max': '359px' },
        //Celulares medianos
        'mmd': { 'min': '360px', 'max': '489px' },
        //Celulares grandes
        'mlg': { 'min': '490px', 'max': '639px' },
      },

      colors: {
        colorGreenClan:
        {
          50: "#EAF3F5",
          900: "#31B6D4"
        },
        colorBlueAciano: '#4579FF',
        colorGreyLavender: '#f1f5f8'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
