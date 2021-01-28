<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script>
 $(document).ready(function() {
     $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate ( { 
                scrollTop: $(hash).offset().top

            } 800, function(){
                window.location.hash = hash;
        }
     }
 }


</script>