/* Public configuration. NEVER put a teacher key or SMS credentials here. */
window.PAPER_CLASS_CONFIG = Object.freeze({
  scriptUrl: 'https://script.google.com/macros/s/AKfycbz_n7BB6udv2arXcDML-BpN0DRUQ9Mq2MWSA-pWwvaKxbslLLmSlpeEbfxaOnK4Fp0X/exec',
  className: '2026 O/L Paper Class',
  teacherName: 'Hasith Sir',
  subject: 'Science',
  // Optional. Set a verified date with +05:30, or leave blank to hide the countdown.
  examDate: '',
  // These are your class reporting bands, and can be edited.
  grades: [
    {min:75,label:'A'}, {min:65,label:'B'}, {min:55,label:'C'},
    {min:35,label:'S'}, {min:0,label:'W'}
  ]
});
