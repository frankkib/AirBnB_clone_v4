$(document).ready(function() {
    let amenityIDs = [];
    $('.checkbox').change(function() {
        let amenityID = $(this).parent().data('id');
        let amenityName = $(this).parent().data('name');

        if ($(this).is(':checked')) {
            amenityIDs.push(amenityID);
        } else {
            amenityIDs = amenityIDs.filter(id => id !== amenityID);
        }

        let amenityList = amenityIDs.map(id => {
            return `<li>${id}: ${amenityName}</li>`;
        });

        $('div.amenities h4').html('Amenities:');

        if (amenityList.length > 0) {
            $('div.amenities').append('<ul></ul>');
            $('div.amenities ul').html(amenityList);
        } else {
            $('div.amenities ul').remove();
        }
    });
});

