// The submit button
const SUBMIT = $( "#submit" );

// Each of the fields and error message divs
const USERNAME = $( "#username" );
const USERNAME_MSG = $( "#user-msg" );

const PASSWORD = $( "#password" );
const PASSWORD_MSG = $( "#password-msg" );

const CONFIRM = $( "#confirm" );
const CONFIRM_MSG = $( "#confirm-msg" );

const FNAME = $( "#fname" );
const FNAME_MSG = $( "#fname-msg" );

const LNAME = $( "#lname" );
const LNAME_MSG = $( "#lname-msg" );

const PHONENO = $( "#phoneNo" );
const PHONENO_MSG = $( "#phoneNo-msg" );

const EMAIL = $( "#email" );
const EMAIL_MSG = $( "#email-msg" );

const FLAT = $( "#flat" );
const FLAT_MSG = $( "#flat-msg" );

const FLOOR = $( "#floor" );
const FLOOR_MSG = $( "#floor-msg" );

const ESTATE = $( "#estate" );
const ESTATE_MSG = $( "#estate-msg" );

const STREET = $( "#street" );
const STREET_MSG = $( "#street-msg" );

const DISTRICT = $( "#district" );
const DISTRICT_MSG = $( "#district-msg" );


/**
 * Resets the error message fields and makes the submit
 * button visible.
 */
function reset_form ( )
{
    USERNAME_MSG.html( "" );
    USERNAME_MSG.hide();
    PASSWORD_MSG.html( "" );
    PASSWORD_MSG.hide();
    CONFIRM_MSG.html( "" );
    CONFIRM_MSG.hide();
    LNAME_MSG.html( "" );
    LNAME_MSG.hide();
    FNAME_MSG.html( "" );
    FNAME_MSG.hide();
    PHONENO_MSG.html( "" );
    PHONENO_MSG.hide();
    EMAIL_MSG.html( "" );
    EMAIL_MSG.hide();
    FLAT_MSG.html( "" );
    FLAT_MSG.hide();
    FLOOR_MSG.html( "" );
    FLOOR_MSG.hide();
    ESTATE_MSG.html( "" );
    ESTATE_MSG.hide();
    STREET_MSG.html( "" );
    STREET_MSG.hide();
    DISTRICT_MSG.html( "" );
    DISTRICT_MSG.hide();
    SUBMIT.show();
}

/**
 * Validates the information in the register form so that
 * the server is not required to check this information.
 */
function validate ( )
{
    let valid = true;
    reset_form ( );
    SUBMIT.hide();

    // This currently checks to see if the username is
    // present and if it is at least 5 characters in length.
    if ( !USERNAME.val() || USERNAME.val().length < 5  )
    {
        // Show an invalid input message
        USERNAME_MSG.html( "Username must be 5 characters or more" );
        USERNAME_MSG.show();
        // Indicate the type of bad input in the console.
        console.log( "Bad username" );
        // Indicate that the form is invalid.
        valid = false;
    }
    // TODO: Add your additional checks here.


    if ( USERNAME.val() != USERNAME.val().toLowerCase())
    {
        USERNAME_MSG.html("Username must be all lowercase");
        USERNAME_MSG.show();
        valid = false;
    }

    if ( !PASSWORD.val() || PASSWORD.val().length < 8 )
    {
        PASSWORD_MSG.html("Password needs to be at least 8 characters long");
        PASSWORD_MSG.show();
        valid = false;
    }

    if ( !CONFIRM.val() || PASSWORD.val() != CONFIRM.val() )
    {
        CONFIRM_MSG.html("Passwords don't match");
        CONFIRM_MSG.show();
        valid = false;
    }

    if ( !FNAME.val() )
    {
        FNAME_MSG.html("First name must not be empty");
        FNAME_MSG.show();
        valid = false;
    }

    if ( !LNAME.val() )
    {
        LNAME_MSG.html("Last name must not be empty");
        LNAME_MSG.show();
        valid = false;
    }

    if ( !PHONENO.val() || PHONENO.val().length < 8 || PHONENO.val().length > 8)
    {
        PHONENO_MSG.html("You need to enter a valid phone number");
        PHONENO_MSG.show();
        valid = false;
    }

    var x = EMAIL.val().trim();
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if ( atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length ) {
        EMAIL_MSG.html("You need to enter a valid email address");
        EMAIL_MSG.show();
        valid = false;
    }

    if ( !FLAT.val() )
    {
        FLAT_MSG.html("Flat must not be empty");
        FLAT_MSG.show();
        valid = false;
    }

    if ( !FLOOR.val() )
    {
        FLOOR_MSG.html("Floor must not be empty");
        FLOOR_MSG.show();
        valid = false;
    }

    if ( !ESTATE.val() )
    {
        ESTATE_MSG.html("Estate must not be empty");
        ESTATE_MSG.show();
        valid = false;
    }

    if ( !STREET.val() )
    {
        STREET_MSG.html("Street must not be empty");
        STREET_MSG.show();
        valid = false;
    }

    if ( !DISTRICT.val() )
    {
        DISTRICT_MSG.html("District must not be empty");
        DISTRICT_MSG.show();
        valid = false;
    }

    // If the form is valid, reset error messages
    if ( valid )
    {
        reset_form ( );
    }
}

// Bind the validate function to the required events.
$(document).ready ( validate );
USERNAME.change ( validate );
PASSWORD.change ( validate );
CONFIRM.change ( validate );
LNAME.change ( validate );
FNAME.change ( validate );
PHONENO.change ( validate );
EMAIL.change ( validate );
FLAT.change ( validate );
FLOOR.change ( validate );
ESTATE.change ( validate );
STREET.change ( validate );
DISTRICT.change ( validate );



