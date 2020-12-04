/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import 'bootstrap';
/**
 * Write any other JavaScript below
 */

+( function() {
  
    var element = document.getElementById("menu-toggle");
    var menu = document.getElementById('mobile-menu');
    element.addEventListener('click', function(){
        menu.classList.toggle("active");
    });

} )();
