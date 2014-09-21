$('.subscribe-form').on('submit', function(e) {

    var data = {
        email: $(this).find('input').val()
    };

    $.post('/submit', data, function() {
        alert('Thank You!');
    });

    return false;
});
