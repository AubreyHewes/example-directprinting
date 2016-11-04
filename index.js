import ipp from 'ipp';

ipp.Printer('http://127.0.0.1:631/printers/MyPrinter').execute('Print-Job', {
  'operation-attributes-tag': {
    'requesting-user-name': 'app',
    'job-name': 'My Test Job'
  },
  data: new Buffer('Hello')
}, (err, res) => {
  if (err) {
    console.error(err);
  }
  console.log(res);
});
