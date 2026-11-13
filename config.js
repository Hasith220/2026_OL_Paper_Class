/* Public configuration. NEVER put a teacher key or SMS credentials here. */
window.PAPER_CLASS_CONFIG = Object.freeze({
  scriptUrl: 'https://script.google.com/macros/library/d/1H3MRZqSdAhqUa0OgDbUySIA3LPLWc4nQC8oEZuGaKZukePwcbHvBr0cJ/14',
  className: '2026 O/L Paper Class',
  teacherName: 'Hasith Sir',
  subject: 'Science',
  // Optional. Set a verified date with +05:30, or leave blank to hide the countdown.
  examDate: '2026-12-08T08:30:00+05:30',
  examLabel: 'O/L exam target',
  introImage: 'https://hasith220.github.io/2026_OL_Paper_Class/class-photo.jpg',
  // Upload prize-01.jpg ... prize-12.jpg to the main repository root. Missing photos are skipped.
  gallery: {
    baseUrl: 'https://hasith220.github.io/2026_OL_Paper_Class/',
    count: 12
  },
  // These are your class reporting bands, and can be edited.
  grades: [
    {min:75,label:'A'}, {min:65,label:'B'}, {min:55,label:'C'},
    {min:35,label:'S'}, {min:0,label:'W'}
  ]
});
