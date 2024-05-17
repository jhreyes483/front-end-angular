document.addEventListener('DOMContentLoaded', function () {

});

window.addEventListener('resize', function () {
    let screenWidth = window.innerWidth;
    if (screenWidth < 1129) {
        const sidevar = document.getElementById('sidevar');
        const itensSidevar = document.querySelectorAll('.sidevar-item');
        sidevar.classList.remove('col-md-4');
        sidevar.classList.add('col-md-12')
    }else{
        sidevar.classList.remove('col-md-12');
        sidevar.classList.add('col-md-4')

        /*
        itensSidevar.forEach(element => {
          //  element.classList.add('col-md-6')
          //  console.log(element)
        });  // contains
        */
    }

    // 
    // idevar-item
});