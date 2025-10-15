export const loginObjects = {
    loginPageUrl : 'https://www.cnarios.com/challenges/login-flow',
    usernameInput: '#«r1»', 
    passwordInput: '#«r2»',
    loginButton: '.MuiCardContent-root > .MuiButtonBase-root',
    logoutButton: '.MuiCardContent-root > .MuiButtonBase-root'
}

export const ecommerceObjects = {
    productListingUrl: 'https://www.cnarios.com/challenges/product-listing-pagination',
    productCard: '.MuiCard-root',
    productName: 'h6.MuiTypography-root.MuiTypography-h6.font-semibold.css-1imvwru',
    productPrice: 'h6.MuiTypography-root.MuiTypography-h6.text-green-600.css-1imvwru',
    productRating: 'span[aria-label]',
    category: '.MuiContainer-root > div',
    pagination: '.MuiPagination-root',
    nextPageButton: '[aria-label="Go to next page"]',
    previousPageButton: '[aria-label="Go to previous page"]'
}

export const buttonObjects = {
    buttonPageUrl: 'https://www.cnarios.com/concepts/button',
    followButton: 'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-fullWidth capitalize css-nqtpxt',
    unfollowButton: 'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorSecondary MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorSecondary MuiButton-fullWidth capitalize css-nqtpxt'
}

export const formObjects = {
    formPageUrl: 'https://www.cnarios.com/concepts/form#try-it-yourself',
    eventForm: '[data-testid="event-registration-form"]',
    fullNameInput: '[data-testid="input-fullname"]',
    emailInput: '[data-testid="input-email"]',
    phoneInput: '[data-testid="input-phone"]',
    eventButton: '[class="MuiFormControl-root MuiFormControl-fullWidth css-17qa0m8"]',
    eventOption: '[data-value="evt-101"]', // Frontend Conf 2025
    eventOption2: '[data-value="evt-102"]', // Automation Summit
    eventOption3: '[data-value="evt-103"]', // Design & UX Meetup
    ticketsInput: '[data-testid="input-tickets"]',
    submitButton: '[data-testid="btn-submit"]',
    resetButton: '[data-testid="btn-reset"]',
    confirmButton: '[data-testid="btn-confirm"]',
    closeButton: '[fdprocessedid="9837m3"]',
    ticketID: '[data-testid="ticket-id-item"]'
    // error messages
    // fullNameError: '#«r1t»-helper-text»',
    // emailError: '.MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained MuiFormHelperText-filled css-nl47j',
    // phoneError: '#«r1v»-helper-text',
    // eventError: '#«r1w»-helper-text',
    // ticketsError: '#«r1x»-helper-text'
}

export const checkboxObjects = {
    checkboxPageUrl: 'https://www.cnarios.com/concepts/checkbox#try-it-yourself',
    setPreferencesButton: 'Set Preferences',
    technologyCheckbox: '.MuiDialogContent-root > .flex > :nth-child(1)',
    sportsCheckbox: '.MuiDialogContent-root > .flex > :nth-child(2)',
    businessCheckbox: '.MuiDialogContent-root > .flex > :nth-child(3)',
    scienceCheckbox: '.MuiDialogContent-root > .flex > :nth-child(4)',
    healthCheckbox: '.MuiDialogContent-root > .flex > :nth-child(5)',
    entertainmentCheckbox: '.MuiDialogContent-root > .flex > :nth-child(6)',
    doneButton: '.MuiDialogActions-root > .MuiButtonBase-root',
    newsFeed: '.max-w-3xl'
}
