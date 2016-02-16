import moment from 'moment';

let momentFilter = function() {

  return function (input) {
    return moment(input).format('MM-DD-YYYY');
  };

};

momentFilter.$inject = [];
export default momentFilter;
