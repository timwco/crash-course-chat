import Autolinker from 'autolinker';

let linkifyFilter = function() {

  return function(input) {
    return Autolinker.link(input);
  };

};

linkifyFilter.$inject = [];
export default linkifyFilter;
