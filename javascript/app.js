$(function() {

    $('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    $(document).ready(function() {
        $('#register-form').validate({

            rules: {
                "user[email]": {
                    required: true
                },
                "user[first_name]": {
                    required: true
                },
                "user[last_name]": {
                    required: true
                },
                "user[company_name]": {
                    required: true
                },
                "user[country]": {
                    required: true
                },
                "user[business_phone]": {
                    required: true,
                    rangelength:[10, 12]
                }
            },
            messages: {
                "user[email]": {
                    required: "Email should not be blank"
                },
                "user[first_name]": {
                    required: "First Name should not be blank"
                },
                "user[last_name]": {
                    required: "Last name should not be blank"
                },
                "user[company_name]": {
                    required: "Company Name should not be blank"
                },
                "user[country]": {
                    required: "Country should not be blank"
                },
                "user[business_phone]": {
                    required: "Business phone should not be blank"
                }
            }


        });
    });

});
